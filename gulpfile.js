const {src, dest, series, parallel, watch} = require('gulp');
const del = require('del');
const origin = 'src';
//const destination = '';
const browserSync = require('browser-sync').create();
const babel = require('gulp-babel');
const concatenate = require('gulp-concat');
const sass = require('gulp-sass');
const wait = require('gulp-wait');

sass.compiler = require('node-sass');

//function html(cb) {
//	src(`${origin}/**/*.html`).pipe(dest(`${destination}`));
//	cb();
//}


function css(cb) {
	src(`${origin}/sass/style.scss`)
	.pipe(wait(500))
	.pipe(sass({
		outputSyle: 'compressed'
	}))
	.pipe(dest('css'));

	cb();
}

function js(cb) {
	src(`${origin}/js/**/*.js`)
	.pipe(babel({
		presets: ['@babel/env']
	}))
	.pipe(concatenate('build.js'))
	.pipe(dest('js'));
	cb();
}

//async function clean(cb) {
//	await del(destination);
//	cb();
//}

function watcher (cb) {
	watch(`${origin}/sass/*.scss`).on('change',series(css, browserSync.reload))
	watch('pages/*.html').on('change', browserSync.reload)
	watch('index.html').on('change', browserSync.reload)
	watch(`${origin}/**/*.js`).on('change',series(js, browserSync.reload))
	cb();
}

function server(cb) {
	browserSync.init({
		notify: false,
		server:{
			baseDir:'./'
		}
	})
	cb();
}

exports.default = series(parallel(css, js), server, watcher);