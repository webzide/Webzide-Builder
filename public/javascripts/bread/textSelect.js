	$(document).bind('ready', function(){	
	  $('#textSelect').bind('click', function(){
          

		
		$('span').bind('click', function(event){
			$(event.target).addClass('edit');
			
			$(event.target).parents('.div').not("#page").each(function(){
				this.contentEditable=true;

                                if(navigator.product == 'Gecko'){
                                    document.execCommand("enableObjectResizing", false, false);
                                }
                                
                                this.removeAttribute("_moz_abspos")

                                $(this).css({
                                    "outline": "0px solid transparent"
                                })
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
	
	