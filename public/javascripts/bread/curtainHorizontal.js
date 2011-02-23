$(document).bind('ready', function(){
    curtainwidth=0;
    clickSwitch=0;

    var curtainPull=function(event){
        endX=event.clientX;
        endY=event.clientY;
        $(div).css({
            height: endY - startY
        });
        $('.div').css(
            'cursor', 's-resize'
        )
        event.stopPropagation();
    }
    var curtainFollow=function(event){
        curtainwidth=document.getElementById('curtainSize').value;
        if($("#followDiv").length==0){
            var followDiv=document.createElement('div');
            $(followDiv).attr('id', 'followDiv');
            $("#page").append(followDiv);
        }
        $("#followDiv").css({
                'position': 'absolute',
                'border-top': '1px dotted #666666',
                'width': curtainwidth + 'px',
                left: event.pageX - (curtainwidth/2),
                top: event.pageY
        })
        event.stopPropagation();
    }

    var curtainClick=function(event){
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
            $('.div, span').css(
                'cursor', 's-resize'
            )
            div=document.createElement('div');

            $(div).addClass('div');

            $(div).css({
                position: 'absolute',
                left: (startX - (curtainwidth/2) - determine(current, 'left') + document.body.parentNode.scrollLeft) + 'px',
                top: (startY - determine(current, 'top') +  document.body.parentNode.scrollTop) + 'px',
                width: curtainwidth + 'px'
            });

            $(current).append(div)
            
            $("#page").bind("mousemove", curtainPull)

            
        }
        else{
            clickSwitch=0;
            $("#page").unbind("mousemove", curtainPull)
            $('.div, .span').css(
                'cursor', 'default'
            )
            $('#followDiv').css('display', 'block')
        }
    }

    $('#curtainH').bind('click', function(){
        clickSwitch=0;
        $('.div').unbind('mousemove', curtainFollow);


        $("#page").unbind();

        $('#page').bind('mousemove', curtainFollow);
        $('#page').bind('click', curtainClick);

        boundariesCSS.disabled=false;

        curtainSize=document.createElement('div');
        curtainSize.innerHTML='Curtain Size:<input type="text" id="curtainSize" onchange="curtainwidth=this.value;" size="5" value="0">';

        $('#toaster').append(curtainSize)

        var followDiv=document.createElement('div');
        $(followDiv).attr('id', 'followDiv');

        $("#page").append(followDiv);
    })

});