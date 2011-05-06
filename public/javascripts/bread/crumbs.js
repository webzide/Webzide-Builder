$(document).bind('ready', function(){	
	
	$('.tools').bind('click', function(){
		$('#toaster').empty();
		$('#followDiv').remove();
		$('.sel').remove();
		
		$('.div').removeClass('wz-draw_division')
		
		
	});
	
	$('div').not('.div').bind('mouseenter', function(){
		$('#followDiv').remove();
	});
})