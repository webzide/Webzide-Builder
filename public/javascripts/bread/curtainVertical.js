  $(document).bind('ready', function(){

    height=299;

    var curtainPull=function(event){
        endX=event.clientX;
        endY=event.clientY;

        $(div).css({
            'border': '1px groove black',
            width: endX - startX
        });

        $(curr).append(div)
    }

    var curtainEnter = function(event){
        followDiv=document.createElement('div');

        curr=event.target;

        $(event.target).append(followDiv);

        var curtainFollow=function(event){

            $(followDiv).css({
                'position': 'absolute',
                'border-left': '1px dotted #666666',
                'height': height + 'px',
                'top': ((event.clientY - (height/2)) + + document.body.parentNode.scrollTop) + 'px',
                'left': event.clientX
            })



            $(followDiv).attr('id', 'followDiv');

            $(this).unbind('click')
            $(this).bind('click', function(event){
                if(clickSwitch==0){
                    clickSwitch=1;



                    $(this).bind('mousemove', curtainPull)
                    $('.div').unbind('mouseenter', curtainEnter)
                    $('#followDiv').css('display', 'none')


                    $(document.body).css(
                        'cursor', 'e-resize'
                    )


                    div=document.createElement('div');
                    height=299;

                    startX=event.clientX;
                    startY=event.clientY;

                    $(div).css({
                        position: 'absolute',
                        top: (startY - (height/2) + + document.body.parentNode.scrollTop) + 'px',
                        left: (startX + document.body.parentNode.scrollLeft) + 'px',
                        height: height + 'px',
                        'border-top': '1px groove black',
                        'border-right': '1px groove black',
                        'border-left': '1px groove black'
                    });

                    $(this).append(div)
                }
                else{
                    clickSwitch=0;
                    $('.div').unbind('mousemove', curtainPull).bind('mousemove', curtainFollow)
                    $(document.body).css(
                        'cursor', 'default'
                    )

                    $('#followDiv').css('display', 'block')
                    $('.div').bind('mouseenter', curtainEnter)
                    $(this).bind('mousemove', curtainFollow)
                }
            })
        }

        $(curr).bind('mousemove', curtainFollow)

        event.stopPropagation();
    }

    clickSwitch=0;

    $('#curtainV').bind('click', function(){
        $('.div').unbind()	
		$('span').unbind()
        $('.div').bind('mouseenter', curtainEnter)
        $('.div').bind('mouseleave', curtainLeave)
    })



    var curtainLeave=function(){
          $('#followDiv').remove()
    }



});