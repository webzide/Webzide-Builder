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