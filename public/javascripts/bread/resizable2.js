$(document).bind('ready', function(){
    $('#divisionResize').bind('click', function(){

        if($('.rightResize')){
            $('.rightResize').remove();
            $('.verticalResize').remove();
            $('.cornerResize').remove();

        }

        $('.div').each(function(){
            //right resize
            {
            var rightResize = document.createElement('div');

            $(rightResize).addClass('rightResize')



            $(rightResize).bind('mousedown', function(event){
                var currPos=event.clientX;
                var currElem=event.target;
                var currLeft = $(currElem).parent().width();
                var parentLeft=$(currElem).parent().offset().left;

                $("#page").bind('mousemove', function(event){
                    $(currElem).parent().children('.verticalResize').width($(currElem).parent().width() - 10)

                   var nextPos=event.clientX;
                   var resizedLength= nextPos - currPos;

                   if($(currElem).offset().left < parentLeft){

                    $(currElem).css("left", 0)
                   } else{
                    $(currElem).css("left", currLeft + resizedLength)

                   }

                   $(currElem).parent().css("width", nextPos - parentLeft);

                })

                $('#page').bind('mouseup', function(){
                    if($(currElem).offset().left < parentLeft){
                         $(currElem).parent().css('width', "0px")
                         $(currElem).css("left", 0)
                     }
                     $(currElem).css('left', $(currElem).parent().width())
                    $('#page').unbind('mousemove')

                })

            })

                $(this).append(rightResize)

                $('.rightResize').css({
                    position: 'absolute',
                    cursor: 'e-resize',
                    'background-color': 'none',
                    width: "4px",
                    height: $(this).height() - 10,
                    left: $(this).width() - 2,
                    top: '0px'

                })
            }

            //vertical resize
            

            //corner Resize
            



        })

    });
});