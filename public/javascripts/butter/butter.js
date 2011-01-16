$(document).ready(function(){
    	

		    	butterDivCss={
    		'position': 'fixed',
    		'background': '#DDDDDD',
    		'height': '20px',
    		'width': '266px',
			'left': '566px',
    		'bottom': '6px'	
    	}
    	
		butterDiv=new tools('div', 'butterDiv', document.body, ['bread'], null, butterDivCss)
		butterDiv.init();
   
        boldButton=new tools('div', 'boldButton', 'butterDiv', ['typo'], 'butter/boldButton.gif', {float: 'left'})
		boldButton.init();
		
		italicButton=new tools('div', 'italicButton', 'butterDiv', ['typo'], 'butter/italicButton.gif', {float: 'left'})
		italicButton.init();
		
		underlineButton=new tools('div', 'underlineButton', 'butterDiv', ['typo'], 'butter/underlineButton.gif', {float: 'left'})
		underlineButton.init();
		
		strikethroughButton=new tools('div', 'strikethroughButton', 'butterDiv', ['typo'], 'butter/strikethroughButton.gif', {float: 'left'})
		strikethroughButton.init();
		
		leftAlignedButton=new tools('div', 'leftAlignedButton', 'butterDiv', ['typo'], 'butter/leftAlignedButton.gif', {float: 'left'})
		leftAlignedButton.init();
		
		centredButton=new tools('div', 'centredButton', 'butterDiv', ['typo'], 'butter/centredButton.gif', {float: 'left'})
		centredButton.init();
		
		rightAlignedButton=new tools('div', 'rightAlignedButton', 'butterDiv', ['typo'], 'butter/rightAlignedButton.gif', {float: 'left'})
		rightAlignedButton.init();
		
		textColorButton=new tools('div', 'textColorButton', 'butterDiv', ['typo'], 'butter/textColorButton.gif', {float: 'left'})
		textColorButton.init();
		
		backColorButton=new tools('div', 'backColorButton', 'butterDiv', ['typo'], 'butter/backColorButton.gif', {float: 'left'})
		backColorButton.init();
		
	})
