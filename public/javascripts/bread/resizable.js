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
                    width: "8px",
                    height: $(this).height() - 10,
                    right: "0px",
                    top: '0px',
                    background: "url(../images/misc/rightResize.png)"

                })

            $(rightResize).bind('mousedown', function(event){
                event.preventDefault();

                var currPos=event.clientX;
                var currElem=event.target;
                var currLeft = $(currElem).parent().width();
                var parentLeft=$(currElem).parent().offset().left;

                var innerElem;
                  if($(currElem).parent().children("img").length>0){
                       innerElem = $(currElem).parent().children("img")
                   } else {
                       innerElem = null;
                   }




                $(document).bind('mousemove', {innerElem:innerElem}, function(event){
                    $(currElem).parent().children('.verticalResize').width($(currElem).parent().width() - 10)

                   var nextPos=event.clientX;
                   var resizedLength= nextPos - currPos;


                   $(currElem).parent().css("width", nextPos - parentLeft);

                   if(event.data.innerElem != null){
                       $(innerElem).css("width", nextPos - parentLeft);
                   }

                })

                $(document).bind('mouseup', function(){
                    
                    if($(currElem).offset().left < parentLeft){
                         $(currElem).parent().css('width', "0px")
                    }
                    $(currElem).css('right', "0px")
                    $(document).unbind('mousemove')

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
                height: "8px",
                width: $(this).width() - 10,
                bottom: "0px",
                left: '0px',
                background: "url(../images/misc/verticalResize.png)"

            })

            $(verticalResize).bind('mousedown', function(event){
                event.preventDefault();

                var currPos=event.clientY;
                var currElem=event.target;
                var currTop = $(currElem).parent().height();
                var parentTop=$(currElem).parent().offset().top;

                var innerElem;
                  if($(currElem).parent().children("img").length>0){
                       innerElem = $(currElem).parent().children("img")
                   } else {
                       innerElem = null;
                   }

                $(document).bind('mousemove', {innerElem: innerElem},function(event){
                   $(currElem).parent().children('.rightResize').height($(currElem).parent().height() -10)

                   var nextPos=event.clientY;
                   var resizedLength= nextPos - currPos;


                   var theParent=$(currElem).parent();
                   $(currElem).parent().css("height", nextPos - parentTop);

                   if(event.data.innerElem != null){
                       $(innerElem).css("height", nextPos - parentTop);
                   }

                })

                $(document).bind('mouseup', function(){
                    if($(currElem).offset().top < parentTop){
                         $(currElem).parent().css('height', "0px")
                     }

                    

                    $(document).unbind('mousemove')

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
                width: "10px",
                height: "10px",
                right: 0,
                bottom: 0,
                background: "url(../images/misc/cornerResize.png)"
            })

            $(cornerResize).bind('mousedown', function(event){
                event.preventDefault();

                var currPosX=event.clientX;
                var currPosY=event.clientY;
                var currElem=event.target;
                var currLeft = $(currElem).parent().width();
                var currTop = $(currElem).parent().height();
                var parentTop=$(currElem).parent().offset().top;
                var parentLeft=$(currElem).parent().offset().left;

                var innerElem;
                  if($(currElem).parent().children("img").length>0){
                       innerElem = $(currElem).parent().children("img")
                   } else {
                       innerElem = null;
                   }

                $(document).bind('mousemove', {innerElem: innerElem},function(event){
                     $(currElem).parent().children('.verticalResize').css('bottom', 0)
                     $(currElem).parent().children('.rightResize').css('right', 0)
                     $(currElem).parent().children('.rightResize').height($(currElem).parent().height() - 10)
                    $(currElem).parent().children('.verticalResize').width($(currElem).parent().width() - 10)
                   var nextPosX=event.clientX;
                   var nextPosY=event.clientY
                   var resizedLengthX= nextPosX - currPosX;
                   var resizedLengthY = nextPosY - currPosY;



                   var theParent=$(currElem).parent();
                   $(currElem).parent().css("width", nextPosX - parentLeft);
                   $(currElem).parent().css("height", nextPosY - parentTop);

                   if(event.data.innerElem != null){
                       $(innerElem).css("width", nextPosX - parentLeft);
                       $(innerElem).css("height", nextPosY - parentTop);
                   }


                })

                $(document).bind('mouseup', function(){
                    if($(currElem).offset().left < parentLeft){
                         $(currElem).parent().css('width', "0px")
                     }


                     $(currElem).parent().children('.verticalResize').css('bottom', 0)
                     $(currElem).parent().children('.rightResize').css('right', 0)
                     $(currElem).parent().children('.rightResize').height($(currElem).parent().height() - 10)
                    $(currElem).parent().children('.verticalResize').width($(currElem).parent().width() - 10)
                    $(document).unbind('mousemove')

                })

            })

            $(this).append(cornerResize)


            }



        })

    });
});