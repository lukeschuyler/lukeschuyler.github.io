var $name = $(".name-fade");

$('#aboutView').hide();

$('#about').click(function(e) {
	$('.banner').hide('slow');
	setTimeout(function() {
		$('.pic-container').hide('slow');
		$('#aboutView').show('slow');
	}, 500);

})

$(document).ready(function() {
	$($name).fadeIn(2000);
	setTimeout(function() {
		$('#work1').fadeIn(2000);
		setTimeout(function() {
			$('#work2').fadeIn(2000);
		}, 1200);
		setTimeout(function() {
			setTimeout(function() {
			$('#work3').fadeIn(2000);
		}, 2400);
		})
	}, 1500)
});

$('.link').mouseover(function() {
	$(this).parent().addClass('pulse');
})

$('.link').mouseleave(function() {
	$(this).parent().removeClass('pulse');
})

$('#about').click(function(e) {
	$('html, body').animate({
        scrollTop: $(".pic-container2").offset().top
    }, 2000);
});
