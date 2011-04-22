/*
The following code/document/program is the copyrighted work of:
"Xuan Duan", 2010 - 2011
All Rights Reserved.
This document/software/program/code, or any portions of it may not be cited, reproduced or redistributed without express written consent of the Author.
 */

$(document).bind('ready', function(){
    	
        butterDivCss={
    		'position': 'fixed',
    		'background': 'rgb(240, 235, 226)',
    		'height': '20px',
    		'width': '466px',
                'left': '366px',
    		'bottom': '6px',
                "border": "1px solid rgb(131, 118, 99)"
    	}
    	
		butterDiv=new tools('div', 'butterDiv', document.body, ['bread'], null, butterDivCss, null, null)
		butterDiv.init();
   
                boldButton=new tools('div', 'boldButton', 'butterDiv', ['typo'], 'butter/boldButton.gif', {float: 'left'}, null, null)
		boldButton.init();
		
		italicButton=new tools('div', 'italicButton', 'butterDiv', ['typo'], 'butter/italicButton.gif', {float: 'left'}, null, null)
		italicButton.init();
		
		underlineButton=new tools('div', 'underlineButton', 'butterDiv', ['typo'], 'butter/underlineButton.gif', {float: 'left'}, null, null)
		underlineButton.init();
		
		strikethroughButton=new tools('div', 'strikethroughButton', 'butterDiv', ['typo'], 'butter/strikethroughButton.gif', {float: 'left'}, null, null)
		strikethroughButton.init();
		
		leftAlignedButton=new tools('div', 'leftAlignedButton', 'butterDiv', ['typo'], 'butter/leftAlignedButton.gif', {float: 'left'}, null, null)
		leftAlignedButton.init();
		
		centredButton=new tools('div', 'centredButton', 'butterDiv', ['typo'], 'butter/centredButton.gif', {float: 'left'}, null, null)
		centredButton.init();
		
		rightAlignedButton=new tools('div', 'rightAlignedButton', 'butterDiv', ['typo'], 'butter/rightAlignedButton.gif', {float: 'left'}, null, null)
		rightAlignedButton.init();
		
		textColorButton=new tools('div', 'textColorButton', 'butterDiv', ['typo'], 'butter/textColorButton.gif', {float: 'left'}, null, null)
		textColorButton.init();
		
		backColorButton=new tools('div', 'backColorButton', 'butterDiv', ['typo'], 'butter/backColorButton.gif', {float: 'left'}, null, null)
                backColorButton.init();

                HiLiteButton=new tools('div', 'HiLiteButton', 'butterDiv', ['typo'], 'butter/button_highlight.gif', {float: 'left'}, null, null)
                HiLiteButton.init();

                fontSizeButton=new tools('select', 'fontSizeButton', 'butterDiv', ['typo'], null, {float: 'left', margin: 0}, null, fontsizeFunc)
		fontSizeButton.init();

		
	})
