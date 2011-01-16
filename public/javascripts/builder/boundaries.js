$(document).bind('ready', function(){

	boundariesSwitch=0;
	
	if(document.all){
		boundariesCSS=document.createStyleSheet();
		boundariesCSS.addRule('.div', 'border: 1px solid #000000;')
		boundariesCSS.disabled=true;
	}else{
		boundariesCSS=document.createElement('style');
		$(boundariesCSS).attr('type', 'text/css');
		$(boundariesCSS).attr('id', 'boundariesTag');
		
		boundariesCSS.innerHTML=".div{border: 1px solid #000000;} #page{border: none}"
		document.getElementsByTagName('head')[0].appendChild(boundariesCSS);

		document.getElementById('boundariesTag').disabled=true;
	}
	

});