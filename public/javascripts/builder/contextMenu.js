var showContextMenu=function(){

	$('.div').bind("contextmenu", function(event){

		  alert(event.target.id)
		  
		  event.stopPropagation();
		  event.preventDefault();
	});
}
$(document).bind('ready', showContextMenu)