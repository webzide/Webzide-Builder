checkDivision=function(){

    $('.sel').remove();
    $('.div').unbind()
    $('span').unbind()
	
	$('.div').css({
		'cursor': 'pointer'
	});
	
	$('.div').bind('click', function(event){
		
		$('#propertyWindow').remove();
		
		showProperties=function(){
			propertyWindow=document.createElement('div');
			
			$(propertyWindow).attr('id', 'propertyWindow');
			
			$(propertyWindow).css({
				position: 'absolute',
				width: '100px',
				height: '160px',
				background: 'rgb(255, 255, 225)',
				left: event.clientX + 'px',
				top: event.clientY + 'px',
				border: '1px solid black'
			});
			
			pwHTML='<div style="padding: 6px;">';
			pwHTML+='Properties<br/>ID:' + event.target.id;
			pwHTML+='<br/>Left:' + $(event.target).css('left');
			pwHTML+='<br/>Top:' + $(event.target).css('top');
			pwHTML+='<br/>Width:' + $(event.target).width() + 'px';
			pwHTML+= '<br/>Height:' + $(event.target).height() + 'px';
			pwHTML+= '<br/>Background:' + $(event.target).css('background');
			pwHTML+='</div>';
			
			$(propertyWindow).html(pwHTML)
			
			document.body.appendChild(propertyWindow);
		}
		
		if(!document.getElementById('propertyWindow')){
			setTimeout(showProperties, 0);
		}
		event.stopPropagation();
	});
};

$(document).bind('ready', function(){
	$('#handTool').bind('click', checkDivision);
});