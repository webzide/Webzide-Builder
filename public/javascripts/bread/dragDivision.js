$(document).bind('ready', function(){

    $('#divisionDrag').bind('click', function(){
        $('.div').each(function(){
            $(this).drag();

            $(this).css("cursor", "move");
        })


    })

})