$(document).bind('ready', function(){
   $('#boldButton').bind('click', function(event){

        



	  if($('.sel').parent().css('font-weight')=='bold'){
		$('.sel').parent().css('font-weight', 'normal')
	  } else{
		$('.sel').parent().css('font-weight', 'bold')
	  }
	  
          if(window.getSelection()!= ''){
              document.execCommand('bold', false, null)
          }
   });
});