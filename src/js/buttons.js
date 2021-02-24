//description button listener

var $description_text = $('.description_text');
var $description_holder = $('.description_holder');

//switch displays on click
$description_text.click(function(){
	$description_text.css("display", "none");
	$description_holder.css("display", "block");
});

$description_holder.click(function(){
	$description_text.css("display", "block");
	$description_holder.css("display", "none");
});