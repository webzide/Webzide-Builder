$(document).bind('ready', function(){
  $('#elementSelect').bind('click', function(){


        $('.div, span').not(".zidebuilder").css('cursor', 'pointer');


        $('.div').not('.sel, .tools').bind('mouseenter mouseleave', function(event){



            $('.sel').not('[state="selected"]').remove();

            selDiv=document.createElement('div');
            $(selDiv).addClass('sel');
            $(selDiv).attr('id', $(this).attr('id') + '_sel');

            if(event.target.nodeName == "DIV"){
                var tar = event.target;

            } else {
                tar = $(event.target).parents("div").get(0)
            }



            $(tar).prepend(function(){
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

                    for(i=0; i<zide.state.selectedElems.length; i++){
                        if(zide.state.selectedElems[i] == this.parentNode){
                            zide.state.selectedElems.remove(this.parentNode)
                        }
                    }

                    if(i == zide.state.selectedElems.length){
                        zide.state.selectedElems.push(this.parentNode)
                    }






            });

        });

		    $('.div').not('.tools').bind('mouseleave', function(event){
			  $('.sel').not('[state="selected"]').remove();
                    });



  });


})