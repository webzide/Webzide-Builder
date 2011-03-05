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



            $(this).append(rightResize)
            }

        })

    });
});