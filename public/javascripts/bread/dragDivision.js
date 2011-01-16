$(document).bind('ready', function(){

	$('#divisionDrag').bind('click', function(){

		$('.div, span').css('cursor', 'move');
		
		$('.div').bind('mouseenter',function(event){
		
			if(event.target.nodeName == 'DIV'){
				curr = event.target;
			} else {
				curr = $(event.target).parents().filter('.div').get(0);
			}
		
			$(curr).draggable();
			
		}).bind('mouseout', function(event){
			$(curr).removeClass('ui-draggable')
		});
	});

});