	$(document).bind('ready', function(){	
	  $('#textSelect').bind('click', function(){
			
		$('.sel').remove();
		$('.div').unbind()
		
		$('span').bind('click', function(event){
			$(event.target).addClass('edit');
			
			$(event.target).parents('.div').each(function(){
				this.contentEditable=true;
			});

			$('body').css({
				'-moz-user-select':'text',
				'-webkit-user-select': 'text'
			})
		})	
             
		$('#toolDiv').bind('mouseenter', function(){
		
		})
		
	  });

	});
	
	