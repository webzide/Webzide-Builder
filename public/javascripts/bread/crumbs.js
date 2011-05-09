$(document).bind('ready', function(){	
	
	$('.tools').bind('click', function(){
		
		$('#followDiv').remove();
		$('.sel').remove();
		
		$('.div').removeClass('wz-draw_division')
		
		$(".divider").remove();
	});
	
	$('div').not('.div').bind('mouseenter', function(){
		$('#followDiv').remove();
	});
})