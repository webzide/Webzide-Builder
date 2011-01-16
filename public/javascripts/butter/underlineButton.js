$(document).bind('ready', function(){
   $('#underlineButton').bind('click', function(event){
      
	  if($('.sel').parent().css('text-decoration')=='underline'){
		$('.sel').parent().css('text-decoration', 'none')
	  } else{
		$('.sel').parent().css('text-decoration', 'underline')
	  }
	  
	  document.execCommand('underline', false, null)
   });
});