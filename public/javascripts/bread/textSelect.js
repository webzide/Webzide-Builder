	$(document).bind('ready', function(){	
	  $('#textSelect').bind('click', function(){
          

		
		$('span').bind('click', function(event){
			$(event.target).addClass('edit');

                        $(event.target).attr("unselectable", 'off')

			$(event.target).parents('.div').not("#page").each(function(){
				this.contentEditable=true;

                                $(this).bind("focus", function(){
                                    builder.state.caret = 1;

                                }).bind("blur", function(){
                                    builder.state.caret = 0;
                                })

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
	
	