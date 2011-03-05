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

            $(rightResize).css({
                position: 'absolute',
                cursor: 'e-resize',
                'background-color': 'none',
                width: "4px",
                height: $(this).height() - 10,
                left: $(this).width() - 2,
                top: '0px'

            })

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
            }

            //vertical resize
            {
            var verticalResize = document.createElement('div');

            $(verticalResize).addClass('verticalResize')

            $(verticalResize).css({
                position: 'absolute',
                cursor: 's-resize',
                'background-color': 'none',
                height: "4px",
                width: $(this).width() - 10,
                top: $(this).height(),
                left: '0px'

            })

            $(verticalResize).bind('mousedown', function(event){
                var currPos=event.clientY;
                var currElem=event.target;
                var currTop = $(currElem).parent().height();
                var parentTop=$(currElem).parent().offset().top;

                $("#page").bind('mousemove', function(event){
                   $(currElem).parent().children('.rightResize').height($(currElem).parent().height() -10)

                   var nextPos=event.clientY;
                   var resizedLength= nextPos - currPos;

                   if($(currElem).offset().top < parentTop){

                    $(currElem).css("top", 0)
                   } else{
                    $(currElem).css("top", currTop + resizedLength)

                   }



                   var theParent=$(currElem).parent();
                   $(currElem).parent().css("height", nextPos - parentTop);

                })

                $('#page').bind('mouseup', function(){
                    if($(currElem).offset().top < parentTop){
                         $(currElem).parent().css('height', "0px")
                         $(currElem).css("top", 0)
                     }

                    $(currElem).css('top', $(currElem).parent().height())

                    $('#page').unbind('mousemove')

                })

            })

            $(this).append(verticalResize)
            }

            //corner Resize
            {
            var cornerResize = document.createElement('div');

            $(cornerResize).addClass('cornerResize')

            $(cornerResize).css({
                position: 'absolute',
                cursor: 'se-resize',
                'background-color': 'none',
                width: "10px",
                height: "10px",
                left: $(this).width() - 5,
                top: $(this).height() - 5

            })

            $(cornerResize).bind('mousedown', function(event){
                var currPosX=event.clientX;
                var currPosY=event.clientY;
                var currElem=event.target;
                var currLeft = $(currElem).parent().width();
                var currTop = $(currElem).parent().height();
                var parentTop=$(currElem).parent().offset().top;
                var parentLeft=$(currElem).parent().offset().left;

                $("#page").bind('mousemove', function(event){
                     $(currElem).parent().children('.verticalResize').css('top', $(currElem).parent().height() -2)
                     $(currElem).parent().children('.rightResize').css('left', $(currElem).parent().width() -2)
                     $(currElem).parent().children('.rightResize').height($(currElem).parent().height() - 10)
                    $(currElem).parent().children('.verticalResize').width($(currElem).parent().width() - 10)
                   var nextPosX=event.clientX;
                   var nextPosY=event.clientY
                   var resizedLengthX= nextPosX - currPosX;
                   var resizedLengthY = nextPosY - currPosY;

                   if($(currElem).offset().left < parentLeft){

                    $(currElem).css("left", 0)
                   } else{
                    $(currElem).css("left", currLeft + resizedLengthX)

                   }

                   if($(currElem).offset().top < parentTop){

                    $(currElem).css("top", 0)
                   } else{
                    $(currElem).css("top", currTop + resizedLengthY)

                   }

                   var theParent=$(currElem).parent();
                   $(currElem).parent().css("width", nextPosX - parentLeft);
                   $(currElem).parent().css("height", nextPosY - parentTop);

                })

                $('#page').bind('mouseup', function(){
                    if($(currElem).offset().left < parentLeft){
                         $(currElem).parent().css('width', "0px")
                         $(currElem).css("left", 0)
                     }
                     $(currElem).css('left', $(currElem).parent().width() -5)
                     $(currElem).css('top', $(currElem).parent().height() -5)

                     $(currElem).parent().children('.verticalResize').css('top', $(currElem).parent().height() -2)
                     $(currElem).parent().children('.rightResize').css('left', $(currElem).parent().width() -2)
                     $(currElem).parent().children('.rightResize').height($(currElem).parent().height() - 10)
                    $(currElem).parent().children('.verticalResize').width($(currElem).parent().width() - 10)
                    $('#page').unbind('mousemove')

                })

            })

            $(this).append(cornerResize)
            }



        })

    });
});