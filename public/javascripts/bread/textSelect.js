	$(document).bind('ready', function(){	
	  $('#textSelect').bind('click', function(){
                $(document).bind("mouseup", builder.handlers.butterMouseUp)
                $("span").each(function(){
                    $(this).css({
                        "-moz-user-select": "text",
                        '-webkit-user-select': 'text',
                        "user-select" : 'text'
                    })
                })

                $("span").each(function(){
                    $(this).css({
                        "-moz-user-select": "text",
                        '-webkit-user-select': 'text'
                    })
                })





		$('span').each(function(){

                $(this).attr("unselectable", 'off')


                this.contentEditable=true;

                $(this).bind("focus", function(){
                    builder.state.caret = 1;

                }).bind("blur", function(){
                    builder.state.caret = 0;
                })

                if(navigator.product == 'Gecko'){
                    document.execCommand("enableObjectResizing", false, false);
                }

                $(this).css({
                    "outline": "0px solid transparent"
                })
                });

                $('body').css({
                        '-moz-user-select':'text',
                        '-webkit-user-select': 'text'
                })
			     
		$('#toolDiv').bind('mouseenter', function(){
		
		})
		
	  });

	});
	
	