$(document).bind('ready', function(){
   $('#rightAlignedButton').bind('click', function(event){
	  
	  if($('.sel').parent().css('text-align')!='right'){
		$('.sel').parent().css('text-align', 'right')
	  } else{
		$('.sel').parent().css('text-align', 'none')
	  }
	  
	  document.execCommand('justifyRight', false, null)
   });
});