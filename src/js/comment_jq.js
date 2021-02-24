//jquery script
//comment grid button listener
var $1_1_button = $("#1_1_t");
var $1_1_input = $("#1_1_i");

//switch displays on click
$1_1_button.click(function(){
	$1_1_button.css("display", "none");
	$1_1_input.css("display", "inline-block");
});

$1_1_input.click(function(){
	$1_1_button.css("display", "inline-block");
	$1_1_input.css("display", "none");
});

/*switch displays on click
$grid_tile.click(function(){
	$grid_tile.css("display", "none");
	$grid_comment.css("display", "inline-block");
});

$grid_comment.click(function(){
	$grid_tile.css("display", "inline-block");
	$grid_comment.css("display", "none");
});*/