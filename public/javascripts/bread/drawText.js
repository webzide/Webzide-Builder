  var divisionSpanDraw=function (){
boundariesCSS.disabled=false;
    $('.div, span').css('cursor', 'crosshair');
	
	borderwidth=1;
	
		drawingBorders=document.createElement('div');
	$(drawingBorders).css({
		height: '100px',
		width: '52px',
		'background': '#E1E1E1',
		'border-right': '2px solid #999999',
		'border-bottom': '2px solid #999999'
	});
	{
		var grooveBorders=document.createElement('div');
		grooveBorders.icon=new Image();
		grooveBorders.icon.src="../images/toaster/grooved.jpg"
		
		$(grooveBorders).css({
			'margin-left': 'auto',
			'margin-right': 'auto',
			'width': '30px'
		});
		
		grooveBorders.appendChild(grooveBorders.icon)
		
		$(grooveBorders).bind('click', function(){
			boundariesCSS.innerHTML='.div{border: 1px ridge black;} #page{border: none}'
		});
		
		drawingBorders.appendChild(grooveBorders);
	}	
	
	{
		var dashedBorders=document.createElement('div');
		dashedBorders.icon=new Image();
		dashedBorders.icon.src="../images/toaster/dashed.png"
		
		$(dashedBorders).css({
			'margin-left': 'auto',
			'margin-right': 'auto',
			'width': '30px'
		});
		
		dashedBorders.appendChild(dashedBorders.icon)
		
		$(dashedBorders).bind('click', function(){
			boundariesCSS.innerHTML='.div{border: 1px dashed #666666;} #page{border: none}'
		});
		
		drawingBorders.appendChild(dashedBorders);

	}
		var dottedBorders=document.createElement('div');
		dottedBorders.icon=new Image();
		dottedBorders.icon.src="../images/toaster/dotted.png"
		
		$(dottedBorders).css({
			'margin-left': 'auto',
			'margin-right': 'auto',
			'width': '30px'
		});
		
		dottedBorders.appendChild(dottedBorders.icon)
		
		$(dottedBorders).bind('click', function(){
			boundariesCSS.innerHTML='.div{border: 1px dotted #555555;} #page{border: none}'
		});
		
		drawingBorders.appendChild(dottedBorders);
	
	$('#toaster').append(drawingBorders);

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

		legendSwitch=0;
		
		
		
		
		
        div = document.createElement("div");
		span=document.createElement('span');
		span.innerHTML='TEXT HERE'
		div.appendChild(span)

		
		if(legendSwitch==1){
			widthBox=document.createElement('div');
			heightBox=document.createElement('div');
			$(widthBox).attr('id', 'widthBox')
			$(heightBox).attr('id', 'heightBox')
			
			$(widthBox).css({
				position: 'absolute',
				right: '0',
				top: '-18px',
				width: '30px',
				height: '14px',
				border: '1px solid #666666',
				'font-size': '10px',
				'text-align': 'center',
				'background': 'rgb(255, 255, 225)'
			});
			
			$(heightBox).css({
				position: 'absolute',
				right: '38px',
				top: '-18px',
				width: '30px',
				height: '14px',
				border: '1px solid #666666',
				'font-size': '10px',
				'text-align': 'center',
				'background': 'rgb(255, 255, 225)'
			});
			
			div.appendChild(widthBox);
			div.appendChild(heightBox);
		}
		
        $(div).css({
            position: 'absolute',
            left: (event.clientX - determine(curr, 'left') + document.body.parentNode.scrollLeft) + 'px',
            top: (event.clientY - determine(curr, 'top') +  document.body.parentNode.scrollTop) + 'px'
        });

        $(div).addClass('div');
		$(div).addClass('text');

        $('.div').bind('mousemove', function (event) {

            var endX = event.clientX;
            var endY = event.clientY;

            difX = (endX - startX);
            difY = (endY - startY);
			
            if ((difX || difY) > 0) {

                $(div).css({
					width: (difX - (borderwidth * 2) - loopBorder(curr)) + "px",
					height: ((difY - (borderwidth * 2)) - loopBorder(curr)) + "px"
				});
				
				curr.appendChild(div);
				
				if(legendSwitch==1){
					$('#widthBox').text(((difX - (borderwidth * 2)) - loopBorder(curr)) + "px");
					$('#heightBox').text(((difY - (borderwidth * 2)) - loopBorder(curr)) + "px");
				}
            }

        });
        $('.div').bind('mouseup', function(event) {
			$('span').unbind()
            $('.div').unbind('mousemove');
			$('#widthBox').remove();
			$('#heightBox').remove();
        });
    })
}
  
$(document).bind('ready', function(){
	$('#drawText').bind('click', divisionSpanDraw);
});