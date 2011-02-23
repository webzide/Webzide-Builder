var resetit=function(){
    $('.sel').remove();
    $('.div').unbind();
    $('span').unbind();
    clickSwitch=0;
    $("#page").unbind();
    $(document.body).css(
        'cursor', 'default'
    )

    $('.div').not("#page").each(function(){
            $(this).removeAttr("contenteditable")

    });
    $('*').unbind('mousedown', DragHandler._dragBegin);

}

$(document).bind('ready', function(){
    $(".tools").bind("click", resetit)
})
