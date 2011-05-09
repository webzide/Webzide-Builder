$(document).bind('ready', function(){


        dividerH=function(event){

			if(!$(event.target).hasClass('div')){

			}


			currentDiv=event.target;





			$(divider).css({
                "position": 'absolute',
                "width": $(event.target).width(),
                'border-top': '1px dotted black',
				'top': event.clientY,
				'left': determine(event.target, "left")


            })


			event.stopPropagation();
		}




	});


$(document).bind('ready', function(){

    $('#insertElement').bind('click', function(){
                                divider=document.createElement('div');
		$(document.body).append(divider)

                $(divider).addClass('divider')
			$('.builderDiv').bind('mouseleave', function(){
			   $('.divider').css('display', 'block')
			})

			$('.builderDiv').bind('mouseenter', function(){
			   $('.divider').css('display', 'none')
			})

			$('.div').bind('mousemove', dividerH)

    })
})
