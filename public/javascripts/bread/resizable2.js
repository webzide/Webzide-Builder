$(document).bind('ready', function(){
    $('#divisionResize').bind('click', function(){

        if($('.rightResize')){
            $('.rightResize').remove();
            $('.verticalResize').remove();
            $('.cornerResize').remove();

        }

        $('.div').not('#page').each(function(){
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

                

            })

            $(this).append(rightResize)
            }

        })

    });
});