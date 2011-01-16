$(document).bind('ready', function(){	

	$('.switch').toggle(
		function(){
			$(this).css({
				'border-left': '1px solid #CCCCCC',
				'border-top': '1px solid #CCCCCC',
				'border-right': 'none',
				'border-bottom': 'none'
			})
		},
		function(){
			$(this).css({
				'border-top': 'none',
				'border-left': 'none'
			})
		}
	);
	
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