var insertImage=function(){
    $('.sel').remove();
    $('.div').unbind()
    $('span').unbind()
	
    $('.div, span').css('cursor', 'crosshair');

	boundariesSwitch=1
	boundariesSheet.disabled=false;
	
	borderwidth=2;
	
	if(!document.getElementById('imageLinkDiv')){ 
		imageLinkDiv=document.createElement('div');
		imageLinkDiv.setAttribute('id', 'imageLinkDiv')
		
		$(imageLinkDiv).css({
			'position': 'fixed',
			'right': '6px',
			'bottom': '30px'
		});
		
		imageLinkDiv.input=document.createElement('input');
		imageLinkDiv.input.setAttribute('id', 'imageInsertSrc');
		imageLinkDiv.input.type='text';
		imageLinkDiv.input.size=30
		imageLinkDiv.appendChild(imageLinkDiv.input)
		$('#toaster').append(imageLinkDiv);
	}
	

    function determine(obj, direction) {
        total = 0;

        $(obj).parents().filter('.div').each(function () {
            total = total + parseInt($(this).css(direction));

        })
        total = total + parseInt($(obj).css(direction));

        return total;
    }

    $('.div').bind('mousedown', function (event) {
		
		event.preventDefault ? event.preventDefault() : event.returnValue = false;

		$(event.target).bind('selectstart', function(){
			return false; 
		});
		
		if(event.target.nodeName == 'DIV'){
			curr = event.target;
		} else {
			curr = $(event.target).parents().filter('.div').get(0);
		}

        startX = event.clientX;
        startY = event.clientY;	
		
        div = document.createElement("div");
		div.img=new Image();
		
		imageInsertSrc=document.getElementById('imageInsertSrc').value
		
		div.img.src=imageInsertSrc;
		div.img.title='Please Click to Insert URL'
		
		$(div.img).css({
			'position': 'absolute',
			'left': '0px',
			'top': '0px'
		});
		
		if(div.img.complete && div.img.naturalWidth!=0 && div.img.naturalHeight!=0){
					
		} else{
			div.img.src=imageReplacement.src
			
		}	
		
        $(div).css({
            position: 'absolute',
            left: (event.clientX - determine(curr, 'left') + document.body.parentNode.scrollLeft) + 'px',
            top: (event.clientY - determine(curr, 'top') +  document.body.parentNode.scrollTop) + 'px'
        });

        $(div).addClass('div');

        $('.div').bind('mousemove', function (event) {

            var endX = event.clientX;
            var endY = event.clientY;

            difX = (endX - startX);
            difY = (endY - startY);


			
            if ((difX || difY) > 0) {
                div.style.width = ((difX - (borderwidth * 2)) - loopBorder(curr)) + "px";
                div.style.height = ((difY - (borderwidth * 2)) - loopBorder(curr)) + "px";
				
				div.img.style.width= ((difX - (borderwidth * 2)) - loopBorder(curr)) + "px";;
				div.img.style.height= ((difY - (borderwidth * 2)) - loopBorder(curr)) + "px";
				
				
                curr.appendChild(div);
				div.appendChild(div.img)
            }

        });
        $('.div').bind('mouseup', function(event) {
			$('span').unbind()
            $('.div').unbind('mousemove');
        });
    })
}

$(document).bind('ready', function(){
	$('#imageInsert').bind('click', insertImage)
});





