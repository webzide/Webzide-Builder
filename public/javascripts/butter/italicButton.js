$(document).bind('ready', function(){
   $('#italicButton').bind('click', function(event){
      
	  if($('.sel').parent().css('font-style')=='italic'){
		$('.sel').parent().css('font-style', 'normal')
	  } else{
		$('.sel').parent().css('font-style', 'italic')
	  }
	  
	  document.execCommand('italic', false, null)
   });
});