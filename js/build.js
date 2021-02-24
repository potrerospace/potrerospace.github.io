"use strict";

//description button listener
var $description_text = $('.description_text');
var $description_holder = $('.description_holder'); //switch displays on click

$description_text.click(function () {
  $description_text.css("display", "none");
  $description_holder.css("display", "block");
});
$description_holder.click(function () {
  $description_text.css("display", "block");
  $description_holder.css("display", "none");
});
"use strict";

//jquery script
//comment grid button listener
var $1_1_button = $("#1_1_t");
var $1_1_input = $("#1_1_i"); //switch displays on click

$1_1_button.click(function () {
  $1_1_button.css("display", "none");
  $1_1_input.css("display", "inline-block");
});
$1_1_input.click(function () {
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
"use strict";

//javascript
//get viewport height/ width for grid dimensions
var vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0); //grid generator

function createGrid(x) {
  for (var rows = 0; rows < x; rows++) {
    for (var columns = 0; columns < x; columns++) {
      var tileContainer = document.createElement("div");
      tileContainer.id = "" + rows + "_" + columns;
      tileContainer.className = "tile_container";
      $("#grid_1").append(tileContainer);
    }
  }

  $(".tile_container").width(75 / x - 0.01 + 'vw');
  $(".tile_container").height(75 / x - 0.01 + 'vw');
}

; //clear grid

function clearGrid() {
  $(".tile_container").remove();
}

; //grid click handling

function gridClick(clicked) {
  //c;ear previous selections
  $(".tile_container").css("background-color", ""); //change current selection

  clicked.css("background-color", "rgba(155, 49, 160,0.75)"); //highlight toggle

  $(".input_off").css("display", "block");
  $(".input_off").css("background-color", "rgba(155, 49, 160,0.75)"); //bring up text input

  $(".text_input").css("display", "block"); //change placeholder coordinates

  var id = clicked.attr("id");
  $(".text_input").attr("placeholder", "Comments: Tile " + id); //return clicked object

  return clicked;
} //create grid/ text input on loading


$(document).ready(function () {
  clearGrid();
  createGrid(20);
  $(".tile_container").click(function () {
    var clicked = gridClick($(this));
  });
  $(".input_off").click(function () {
    //close text input
    $(".tile_container").css("background-color", "");
    $(".text_input").css("display", "none");
    $(".input_off").css("display", "none");
  });
  $(".input_on").click(function () {
    //open text input
    $(".text_input").css("display", "block");
    $(".input_off").css("display", "block");
    $(".input_off").css("background-color", "rgba(155, 49, 160,0.75)");
    $(".text_input").attr("placeholder", "Comments: Tile X_Y");
  });
});
"use strict";