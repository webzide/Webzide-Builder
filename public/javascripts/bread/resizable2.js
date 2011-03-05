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





                $(this).append(rightResize)

                $('.rightResize').css({
                    position: 'absolute',
                    cursor: 'e-resize',
                    'background-color': 'none',
                    width: "4px",

                    top: '0px'

                })
            }

            //vertical resize
            

            //corner Resize
            



        })

    });
});