$(document).bind('ready', function(){
   $('#leftAlignedButton').bind('click', function(event){
	  
	  if($('.sel').parent().css('text-align')!='left'){
		$('.sel').parent().css('text-align', 'left')
	  } else{
		$('.sel').parent().css('text-align', 'none')
	  }
	  
	  document.execCommand('justifyLeft', false, null)
   });
});