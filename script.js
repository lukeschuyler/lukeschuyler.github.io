function hideAll (view) {
	$('#about').hide();
	$('#music').hide();
	$('#work').hide();
	$('#contact').hide();
	$('#front').hide();
	$(view).show();
};

$('#about').hide();
$('#music').hide();
$('#work').hide();
$('#contact').hide();

$('a').click(function(e) {
	e.preventDefault();
	console.log(this)
	console.log($(this).siblings())
	$(this).addClass('selected');
	$(this).siblings().removeClass('selected');
});

$('.links').click(function() {
	if ($(this).hasClass('home') === false) {
		$('.picture').addClass('zoomOutUp');
	setTimeout(function() {
		$('.pic-container').hide('slow');
	}, 1000)
	} else {
		$('.pic-container').show();
		$('.picture').removeClass('zoomOutUp');
		$('.picture').addClass('zoomInDown');
	}

})

$('.links').mouseover(function(e) {
	$(this).addClass('pulse');
});

$('.links').mouseleave(function(e) {
	$(this).removeClass('pulse');
});

$('.icons').mouseover(function(e) {
	$(this).addClass('pulse');
});

$('.icons').mouseleave(function(e) {
	$(this).removeClass('pulse');
});

$('.home').click(function() {
	hideAll($('#front'));
	// $('#front').show();
});

$('.about').click(function() {
	hideAll($('#about'));
});

$('.work').click(function() {
	hideAll($('#work'));
});

$('.contact').click(function() {
	hideAll($('#contact'));
})
