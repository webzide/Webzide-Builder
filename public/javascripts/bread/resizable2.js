$(document).bind('ready', function(){
    $('#divisionResize').bind('click', function(){
       

        $('.div').each(function(index){
            var rightResize = document.createElement('div');
            
            $(rightResize).css({
                position: 'absolute',
                cursor: 'e-resize',
                'background-color': 'red',
                width: "1px",
                height: $(this).height(),
                left: $(this).width(),
                top: '0px'

            })

            $(rightResize).bind('mousedown', function(event){
                var currPos=event.pageX;
                var currElem=event.target;
                var currLeft = $(currElem).parent().width();
                var parentLeft=$(currElem).parent().offset().left;

                $("#page").bind('mousemove', function(event){
                   var nextPos=event.pageX;
                   var resizedLength= nextPos - currPos;

                   if($(currElem).offset().left < parentLeft){
                    
                    $(currElem).css("left", 0)
                   } else{
                    $(currElem).css("left", currLeft + resizedLength)

                   }

                   

                   var theParent=$(currElem).parent();
                   $(currElem).parent().css("width", nextPos - parentLeft);

                })

                $('#page').bind('mouseup', function(){
                    if($(currElem).offset().left < parentLeft){
                         $(currElem).parent().css('width', "0px")
                         $(currElem).css("left", 0)
                     }

                    $('#page').unbind('mousemove')
                    
                })

            })



            $(this).append(rightResize)

            
        })

    });
});