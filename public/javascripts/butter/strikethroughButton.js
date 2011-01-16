$(document).bind('ready', function(){
   $('#strikethroughButton').bind('click', function(event){
	  
	  if($('.sel').parent().css('text-decoration')=='line-through'){
		$('.sel').parent().css('text-decoration', 'none')
	  } else{
		$('.sel').parent().css('text-decoration', 'line-through')
	  }
	  
	  document.execCommand('strikethrough', false, null)
   });
});