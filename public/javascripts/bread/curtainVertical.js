$(document).bind('ready', function(){
    curtainwidth=0;
    clickSwitch=0;



    var curtainPull2=function(event){
        endX=event.clientX;
        endY=event.clientY;
        $(div).css({
            width: endX - startX
        });
        $('.div').css(
            'cursor', 'e-resize'
        )
        event.stopPropagation();
    }
    var curtainFollow2=function(event){
        curtainHeight=document.getElementById('curtainSize').value;
        if($("#followDiv").length==0){
            var followDiv=document.createElement('div');
            $(followDiv).attr('id', 'followDiv');
            $("#page").append(followDiv);
        }
        $("#followDiv").css({
                'position': 'absolute',
                'border-left': '1px dotted #666666',
                'height': curtainHeight + 'px',
                left: event.pageX,
                top: event.pageY - (curtainHeight/2)
        })
        event.stopPropagation();
    }

    var curtainClick2=function(event){
	if(event.target.nodeName == 'DIV' && $(event.target).hasClass('div')){
            current = event.target;
	} else {
            current = $(event.target).parents().filter('.div').get(0);
        }


        if(clickSwitch==0){
            clickSwitch=1;
            startX=event.clientX;
            startY=event.clientY;
            $('#followDiv').css('display', 'none')
            $('.div').css(
                'cursor', 'e-resize'
            )
            div=document.createElement('div');

            $(div).addClass('div');

            $(div).css({
                position: 'absolute',
                left: (startX - determine(current, 'left') +  document.body.parentNode.scrollLeft) + 'px',
                top: (startY - determine(current, 'top') - (curtainHeight/2) +  document.body.parentNode.scrollTop) + 'px',
                height: curtainHeight + 'px',
                        'border-color': builder.state.propertyBox["border-color"],
        'border-style':builder.state.propertyBox["border-style"],
        'border-width':builder.state.propertyBox["border-width"],
        "background": builder.state.propertyBox["background"]
            });

            $(current).append(div)

            $("#page").bind("mousemove", curtainPull2)


        }
        else{
            clickSwitch=0;
            $("#page").unbind("mousemove", curtainPull2)
            $('.div, .span').css(
                'cursor', 'default'
            )
            $('#followDiv').css('display', 'block')
        }
    }

    $('#curtainV').bind('click', function(){
        clickSwitch=0;
        $('.div').unbind('mousemove', curtainFollow2);


        $("#page").unbind();

        $('#page').bind('mousemove', curtainFollow2);
        $('#page').bind('click', curtainClick2);


        var followDiv=document.createElement('div');
        $(followDiv).attr('id', 'followDiv');

        $("#page").append(followDiv);
    })

});

$(document).bind('ready', function(){
            curtainSize=document.createElement('div');
        curtainSize.innerHTML='Curtain Size:<input type="text" id="curtainSize" onchange="curtainHeight=this.value; curtainWidth = this.value" size="5" value="0">';

        $(curtainSize).attr("id", "curtainToast")

        $(curtainSize).css({"display": "none",
            "padding": "5px"
    })

        $('#toaster').append(curtainSize)
})