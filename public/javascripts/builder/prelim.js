$(document).bind("contextmenu", function(event){
	  event.preventDefault();
});

var prelim=function(event){

	//Make body elements unselectable and unhighlightable
	$('body').css({
		'-moz-user-select':'none',
		'-webkit-user-select': 'none'
	})
	
	//Precaching Images
	imageReplacement=new Image();
	imageReplacement.src="http://img227.imageshack.us/img227/7902/insertimage.png"
	
	//Set page height
	$('#page').height("1400px")
	$('#page').width("1200px")
};

$(document).bind('ready', prelim);