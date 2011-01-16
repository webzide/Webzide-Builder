	$(document).bind('ready', function(){
		
		function determine(obj){
            total=0;

            $(obj).parents().filter('.div').each(function(){
              totaltop = totaltop + parseInt($(this).css('left'));
            })

			total+= parseInt($(obj).css('left'));
			
            return total;
        }

        $('#dividerY').bind('click', function(){
		
		$('.div').unbind()	
		$('span').unbind()

        $('.div').bind('mouseenter', function(event){
        	divider=document.createElement('div');
			
			currentDiv=event.target;
			
			$(divider).addClass('divider')
			
			$(divider).css({
                position: 'absolute',
                height: $(currentDiv).height(),
                'border-left': '1px dotted black',
                top: '0px'
            })
			
			$(divider).attr('id', 'divider')
		
			$(currentDiv).unbind('mousemove')	
			
			$(currentDiv).bind('mousemove', function(event){					
				
    			$(divider).css({
                    left: (parseInt(event.clientX) - determine(currentDiv)) + 'px'
                })
				
				$(currentDiv).unbind('click')
				
				$(currentDiv).bind('click', function(event){
					left=document.createElement('div');
                    right=document.createElement('div');

                    $(left).addClass('div')
                    $(right).addClass('div')

                    leftWidth=parseInt(event.clientX) - determine(currentDiv);

                    $(left).css({
                        position: 'absolute',
                        top: '0px',
                        left: '0px',
                        width: leftWidth + 'px',
                        height: $(event.target).height()
                    })

                    $(right).css({
                        position: 'absolute',
                        left: $(left).css('width'),
                        top: '0px',
                        height: $(event.target).height(),
                        width: (parseInt($(currentDiv).width()) - leftWidth) + 'px',
                        'border-left': '1px solid red'
                    })
					
					$(currentDiv).append($(left))
					$(currentDiv).append($(right))
				})
    			
			});
			event.target.appendChild(divider)
			event.stopPropagation();						 
		})

        $('.div').bind('mouseleave', function(event){
            $('.divider').remove()
        })

        });

	});