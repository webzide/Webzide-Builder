/*
The following code/document/program is the copyrighted work of:
"Xuan Duan", 2010 - 2011
All Rights Reserved.
This document/software/program/code, or any portions of it may not be cited, reproduced or redistributed without express written consent of the Author.
*/

builder.methods.toggleBoundaries=function(){

        

	boundariesTag=document.getElementById('boundariesTag');

	if(builder.state.borderSwitch==0){
		builder.state.borderSwitch=1;
		
		if(document.all){
			boundariesCSS.disabled=false;
		} else{
			boundariesTag.disabled=false;
		}
		
		
	} else if(builder.state.borderSwitch==1){
		builder.state.borderSwitch=0;
		if(document.all){
			boundariesCSS.disabled=true;
		} else{
			boundariesTag.disabled=true;
		}
		
	}

}



$(document).bind('ready', function(){
	$('#showBoundaries').bind('click', builder.methods.toggleBoundaries)
});