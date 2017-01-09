var $name = $(".name-fade");

$(document).ready(function() {
	$($name).fadeIn(3000);
});

// $('a').click(function(e) {
// 	e.preventDefault();
// 	console.log(this)
// 	$(this).addClass('selected');
// 	$(this).siblings().removeClass('selected');
// });

$('.links').mouseover(function(e) {
	$(this).addClass('hover');
});
