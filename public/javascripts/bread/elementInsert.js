var insertElement=function(){
	var dialogModal=document.createElement('div');
	dialogModal.setAttribute('id', 'dialogModal')
	
	$(dialogModal).css({
	   position:'fixed',
	   width: '350px',
	   height: '450px',
	   left: '200px',
	   top: '50px',
	   'background-color': '#DDDDDD',
	   border: '1px solid black'
	});
	

	
	dialogModal.innerHTML='<div id="topbar">Create Element on Page</div><div id="modal-main"><fieldset><legend>Dimensions</legend> <label for="element-left">Left:</label> <input name="element-left" type="text" id="element-left" size="5" maxlength="5"> px<div id="element-top-div"><label for="element-top">Top:</label> <input name="element-top" type="text" id="element-top" size="5" maxlength="5"> px</div><div id="element-width-div"><label for="element-width">Width:</label> <input name="element-width" type="text" id="element-width" size="5" maxlength="5"> px</div><div id="element-height-div"><label for="element-height">Height:</label> <input name="element-height" type="text" id="element-height" size="5" maxlength="5"> px</div></fieldset><fieldset><legend>Colors</legend> <label for="element-back-color">Foreground (Text) Color:</label> <input name="element-back-color" type="text" id="element-back-color" size="12" maxlength="12"><div id="element-forecolor-div"><label for="element-forecolor">Background Color:</label> <input name="element-forecolor" type="text" id="element-forecolor" size="12" maxlength="12"></div></fieldset><fieldset><legend>Borders</legend><div id="element-bordersize-div"><label for="element-bordersize">Border Size:</label> <input name="element-bordersize" type="text" id="element-bordersize" size="5" maxlength="5"> px</div><div id="element-borderStyle-div"><label for="element-borderStyle">Border Style:</label> <select id="element-borderStyle"><option selected="true">solid</option><option value="double">double</option><option value="dotted">dotted</option><option value="dashed">dashed</option><option value="groove">groove</option><option value="ridge">ridge</option><option value="inset">inset</option><option value="outset">outset</option></select></div><div id="element-bordercolor-div"><label for="element-bordercolor">Border Color:</label> <input name="element-bordercolor" type="text" id="element-bordercolor" size="12" maxlength="12"></div></fieldset><button id="createElement">Create</button></div>';
	
	document.body.appendChild(dialogModal);
	
	$(dialogModal).draggable({handle: '#topbar'});
	
	$('#topbar').css({
		background: 'black',
		color: 'white',
		cursor: 'move'
	});
	
	closeButton=document.createElement('div')
	closeButton.icon=new Image();
	closeButton.icon.src='../../images/closeButton.gif';
	closeButton.appendChild(closeButton.icon);
	
	$(closeButton).bind('click', function(){
		$('#dialogModal').remove();
	});
	
	$(closeButton).css({
		'float': 'right',
		'cursor': 'default'
	});
	
	$('#topbar').append(closeButton);
	
	$('#createElement').bind('click', function(){
		generatedDiv=document.createElement('div');
		$(generatedDiv).css({
			position: 'absolute',
			left: $('#element-left').val() + 'px',
			top: $('#element-top').val() + 'px',
			width: $('#element-width').val() + 'px',
			height: $('#element-height').val() + 'px',
			'background-color': $('#element-back-color').val()
			
		});
		
		$('#page').append(generatedDiv);
	
		$('#dialogModal').remove();
	});
}


$(document).bind('ready', function(){
	$('#elementInsert').bind('click', insertElement);
});