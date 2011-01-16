$(document).bind('ready', function(){
   $('#centredButton').bind('click', function(event){
	  
	  if($('.sel').parent().css('text-align')!='center'){
		$('.sel').parent().css('text-align', 'center')
	  } else{
		$('.sel').parent().css('text-align', 'none')
	  }
	  
	  document.execCommand('justifyCenter', false, null)
   });
});