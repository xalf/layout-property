$(window).load(function(){
	$('#more-options').click(function(){
		$('.more-options').toggleClass('display');//css('display','block');
	});
	$('.grade-area').tooltip();
	$('.graf-legend li').tooltip();
});