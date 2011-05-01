/*
The following code/document/program is the copyrighted work of:
"Xuan Duan", 2010 - 2011
All Rights Reserved.
This document/software/program/code, or any portions of it may not be cited, reproduced or redistributed without express written consent of the Author.
*/

$(document).bind('ready', function(){

	
	
	if(document.all){
		boundariesCSS=document.createStyleSheet();
		boundariesCSS.addRule('.div', 'border: 1px solid #000000;')
                boundariesCSS.addRule('#page', 'border: 0px')
		boundariesCSS.disabled=true;
	}else{
		boundariesCSS=document.createElement('style');
		$(boundariesCSS).attr('type', 'text/css');
		$(boundariesCSS).attr('id', 'boundariesTag');
		
		boundariesCSS.innerHTML=".div:not(#page){border: 1px solid #000000};"
		document.getElementsByTagName('head')[0].appendChild(boundariesCSS);

		document.getElementById('boundariesTag').disabled=true;
	}
	

});