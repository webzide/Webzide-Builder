$(document).bind('ready', function(){
  $('#elementSelect').bind('click', function(){	
        $('.sel').remove();
        $('.div').unbind();
        $('span').unbind();

        $('.div, span').css('cursor', 'pointer');

		
        $('.div').not('.sel, .tools').bind('mouseenter', function(event){
				
            $('.sel').not('[state="selected"]').remove();

            selDiv=document.createElement('div');
            $(selDiv).addClass('sel');
            $(selDiv).attr('id', $(this).attr('id') + '_sel');


            $(event.target).prepend(function(){
                width=$(this).outerWidth();
                height=$(this).outerHeight();

                borderWidth=((parseInt($(this).innerWidth())-parseInt($(this).outerWidth())) / 2);
                borderHeight=((parseInt($(this).innerHeight())-parseInt($(this).outerHeight())) / 2);

                $(selDiv).css({
                    left: borderWidth,
                    top: borderHeight,
                    position: 'absolute',
                     width: width,
                     height: height,
                     background: 'black',
                     opacity:'0.2',
                     filter: 'alpha(opacity=20)'

                });

                return selDiv;
            })

            $('.sel').unbind('click')
				
            $('.sel').bind('click', function(){
                    $('div').removeClass('selectedElem')

                    $('.sel').parent().addClass('selectedElem');

                    $('.sel').filter('[state="selected"]').remove();

                    currentElement=this.parentNode;

                    $(this).css({
                            background: 'none',
                        border: '5px solid black',
                        opacity:'0.6',
                            width: (parseInt($(this).width()) - 10),
                            height: (parseInt($(this).height()) - 10),
                            filter: 'alpha(opacity=20)'

                    });


                    $(this).attr('state', 'selected');
            });
			
        });
		
		    $('.div').not('.tools').bind('mouseleave', function(event){
			  $('.sel').not('[state="selected"]').remove();
                    });



  });


})