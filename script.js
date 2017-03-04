function hideAll (view) {
	$('#about').hide();
	$('#music').hide();
	$('#work').hide();
	$('#contact').hide();
	$('#front').hide();
	$(view).show();
};

$.ajax({
	url: 'http://quotes.rest/qod.json?category=inspire'
}).done(function(data) {
	console.log(data)
	$('#quote').prepend(data.contents.quotes[0].quote +  '<br> - ' + data.contents.quotes[0].author + '<br>' )
})

$('.workLink').click(function(e) {
	e.preventDefault()
	window.open(this.href)
})

$('#about').hide();
$('#music').hide();
$('#work').hide();
$('#contact').hide();

$('a').click(function(e) {
	if (e.target.classList[2] === 'links') {
		e.preventDefault();
		$(this).addClass('selected');
		$(this).siblings().removeClass('selected');
	}
});

$('.links').click(function() {
	if ($(this).hasClass('home') === false) {
		if ($('.picture').hasClass('zoomOutUp') === false) {
			$('.picture').addClass('zoomOutUp');
		setTimeout(function() {
			$('.pic-container').hide('slow');
		}, 1000)
		}
	} else {
		$('.pic-container').show('slow');
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
});

$('.about').click(function() {
	hideAll($('#about'));
});

$('.work').click(function() {
	hideAll($('#work'));
});

$('.contact').click(function() {
	hideAll($('#contact'));
});
