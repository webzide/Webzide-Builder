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
    	
		butterDiv=new tools('div', 'butterDiv', document.body, ['bread', 'zidebuilder'], null, null, butterDivCss, null, null)
		butterDiv.init();
   
                boldButton=new tools('div', 'boldButton', 'butterDiv', ['typo'], null, 'butter/boldButton.gif', {float: 'left'}, null, null)
		boldButton.init();
		
		italicButton=new tools('div', 'italicButton', 'butterDiv', ['typo'], null, 'butter/italicButton.gif', {float: 'left'}, null, null)
		italicButton.init();
		
		underlineButton=new tools('div', 'underlineButton', 'butterDiv', ['typo'], null, 'butter/underlineButton.gif', {float: 'left'}, null, null)
		underlineButton.init();
		
		strikethroughButton=new tools('div', 'strikethroughButton', 'butterDiv', ['typo'], null, 'butter/strikethroughButton.gif', {float: 'left'}, null, null)
		strikethroughButton.init();
		
		leftAlignedButton=new tools('div', 'leftAlignedButton', 'butterDiv', ['typo'], null, 'butter/leftAlignedButton.gif', {float: 'left'}, null, null)
		leftAlignedButton.init();
		
		centredButton=new tools('div', 'centredButton', 'butterDiv', ['typo'], null, 'butter/centredButton.gif', {float: 'left'}, null, null)
		centredButton.init();
		
		rightAlignedButton=new tools('div', 'rightAlignedButton', 'butterDiv', ['typo'], null, 'butter/rightAlignedButton.gif', {float: 'left'}, null, null)
		rightAlignedButton.init();
		
		textColorButton=new tools('div', 'textColorButton', 'butterDiv', ['typo'], null, 'butter/textColorButton.gif', {float: 'left'}, null, null)
		textColorButton.init();
		
		backColorButton=new tools('div', 'backColorButton', 'butterDiv', ['typo'], null, 'butter/backColorButton.gif', {float: 'left'}, null, null)
                backColorButton.init();

                HiLiteButton=new tools('div', 'HiLiteButton', 'butterDiv', ['typo'], null, 'butter/button_highlight.gif', {float: 'left'}, null, null)
                HiLiteButton.init();

                fontSizeButton=new tools('select', 'fontSizeButton', 'butterDiv', ['typo'], null, null, {float: 'left', margin: 0}, null, fontsizeFunc)
		fontSizeButton.init();

		
	})
