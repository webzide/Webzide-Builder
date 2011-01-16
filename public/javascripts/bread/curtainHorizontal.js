  $(document).bind('ready', function(){

	curtainwidth=0;
    clickSwitch=0;
	
    var curtainPull=function(event){
        endX=event.clientX;
        endY=event.clientY;

        $(div).css({
            height: endY - startY
        });
					
        $(current).append(div)
		
		event.stopPropagation;
    }
        
	var curtainFollow=function(event){
					
		curtainwidth=document.getElementById('curtainSize').value;
	
		$(followDiv).css({
			'position': 'absolute',
			'border-top': '1px dotted #666666',
			'width': curtainwidth + 'px',
			left: (event.clientX - (curtainwidth/2) - determine(current, 'left') + document.body.parentNode.scrollLeft) + 'px',
			top: (event.clientY - determine(current, 'top') +  document.body.parentNode.scrollTop) + 'px'
		})
		
		event.stopPropagation();
		
	}
		
    var curtainEnter = function(event){
	if(event.target.nodeName == 'DIV' && $(event.target).hasClass('div')){
						current = event.target;
					} else {
						current = $(event.target).parents().filter('.div').get(0);
					}
					
		$('#followDiv').remove();
		
        followDiv=document.createElement('div');
		$(followDiv).attr('id', 'followDiv');

        $(current).append(followDiv);

        $('.div').bind('mousemove', curtainFollow)

        event.stopPropagation();
    }


	curtainClick=function(event){
					if(event.target.nodeName == 'DIV' && $(event.target).hasClass('div')){
						current = event.target;
					} else {
						current = $(event.target).parents().filter('.div').get(0);
					}
					                    startX=event.clientX;
                    startY=event.clientY;
                if(clickSwitch==0){
                    clickSwitch=1;
					
					$('.div').unbind('mouseenter', curtainEnter)
					$('.div').unbind('mouseleave', curtainLeave)
					
                    $('.div').bind('mousemove', curtainPull)
					
                    $('#followDiv').css('display', 'none')


                    $(document.body).css(
                        'cursor', 's-resize'
                    )


                    div=document.createElement('div');
					
					$(div).addClass('div');


					
					
					
                    $(div).css({
                        position: 'absolute',
                        left: (startX - (curtainwidth/2) - determine(current, 'left') + document.body.parentNode.scrollLeft) + 'px',
                        top: (startY - determine(current, 'top') +  document.body.parentNode.scrollTop) + 'px',
                        width: curtainwidth + 'px',
                    });

                    $(current).append(div)
                }
                else{
                    clickSwitch=0;
                    $('.div').unbind('mousemove', curtainPull).bind('mousemove', curtainFollow)
                    $(document.body).css(
                        'cursor', 'default'
                    )

                    $('#followDiv').css('display', 'block')
                    $('.div').bind('mouseenter', curtainEnter)
                    $('.div').bind('mousemove', curtainFollow)
                }
            }
	
    $('#curtainH').bind('click', function(){
        $('.div').bind('mouseenter', curtainEnter)
        $('.div').bind('mouseleave', curtainLeave)
		$('.div').bind('click', curtainClick);
		
		boundariesCSS.disabled=false;
		
		curtainSize=document.createElement('div');
		curtainSize.innerHTML='Curtain Size:<input type="text" id="curtainSize" onchange="curtainwidth=this.value;" size="5" value="0">';
		
		
		$('#toaster').append(curtainSize)
    })



    var curtainLeave=function(){
          $('#followDiv').remove()
    }



});