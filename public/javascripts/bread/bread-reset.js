var resetit=function(){
    $('.sel').remove();
    $('.div').unbind();
    $('span').unbind();
    clickSwitch=0;
    $("#page").unbind();
    $(document.body).css(
        'cursor', 'default'
    )

    $('.div').css(
        'cursor', 'default'
    )

    $('.div').not("#page").each(function(){
            $(this).removeAttr("contenteditable")

    });
    $('*').unbind('mousedown', DragHandler._dragBegin);

            $('.rightResize').remove();
            $('.verticalResize').remove();
            $('.cornerResize').remove();

    $(".paletteBox").remove();

    $('.div a').bind('click', function(event){
        event.preventDefault ? event.preventDefault() : event.returnValue = false;
    })
}

$(document).bind('ready', function(){
    $(".tools").bind("click", resetit)
})
