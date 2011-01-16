	$(document).bind('ready', function(){

        var dividerH=function(event){
        	divider=document.createElement('div');

			currentDiv=event.target;

			$(divider).addClass('divider')

			$(divider).css({
                position: 'absolute',
                width: $(event.target).width(),
                'border-top': '1px dotted black',
                left: '0px'
            })

			$(divider).attr('id', 'divider')

			$(currentDiv).unbind('mousemove')

			$(currentDiv).bind('mousemove', function(event){
    			$(divider).css({
                    top: (parseInt(event.clientY) - determine(currentDiv, 'top') + document.body.parentNode.scrollTop) + 'px'
                })
			});
			
			event.target.appendChild(divider)
			event.stopPropagation();
		}

		divideHorizontal=function(event){
					if(event.target.nodeName == 'DIV' && $(event.target).hasClass('div')){
						curr = event.target;
					} else {
						curr = $(event.target).parents().filter('.div').get(0);
					}
					
					
					top=document.createElement('div');
                    bottom=document.createElement('div');
					
                    $(top).addClass('div')
                    $(bottom).addClass('div')

                    topHeight=(event.clientY - determine(curr, 'top') + document.body.parentNode.scrollTop) + 'px'

                    $(top).css({
                        position: 'absolute',
                        top: '0px',
                        left: '0px',
                        height: (event.clientY - determine(curr, 'top') + document.body.parentNode.scrollTop) + 'px',
                        width: $(curr).width() + 'px'
                    })
								
                    $(bottom).css({
                        position: 'absolute',
                        top: (event.clientY - determine(curr, 'top') + document.body.parentNode.scrollTop) + 'px',
                        left: '0px',
                        width: $(curr).width() + 'px',
                        height: (parseInt($(curr).height()) - parseInt(topHeight)) + 'px'
                    })

					$(curr).append(top)
					$(curr).append(bottom)
					
					event.stopPropagation();
				}
			
		
        $('#dividerX').bind('click', function(){
			boundariesCSS.disabled=false;
            $('.div').bind('mouseenter', dividerH)

            $('.div').bind('mouseleave', function(event){
                $('.divider').remove()
            })
			
			$('.div').bind('click', divideHorizontal)
        })



	});