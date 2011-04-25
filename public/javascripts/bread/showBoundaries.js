/*
The following code/document/program is the copyrighted work of:
"Xuan Duan", 2010 - 2011
All Rights Reserved.
This document/software/program/code, or any portions of it may not be cited, reproduced or redistributed without express written consent of the Author.
*/

boundaries=function(){
	boundariesTag=document.getElementById('boundariesTag');

	if(boundariesSwitch==0){
		boundariesSwitch=1;
		
		if(document.all){
			boundariesCSS.disabled=false;
		} else{
			boundariesTag.disabled=false;
		}
		
		
	} else if(boundariesSwitch==1){
		boundariesSwitch=0;
		if(document.all){
			boundariesCSS.disabled=true;
		} else{
			boundariesTag.disabled=true;
		}
		
	}

}



$(document).bind('ready', function(){
	$('#showBoundaries').bind('click', boundaries)
});