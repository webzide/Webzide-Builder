$(document).bind("contextmenu", function(event){
	  event.preventDefault();
});

$(".colors").bind("onselectstart", function(event){
    event.preventDefault();
})

var prelim=function(event){

	//Make body elements unselectable and unhighlightable
	$('body').css({
		'-moz-user-select':'none',
		'-webkit-user-select': 'none'
	})
	
	//Precaching Images

	
	//Set page height
	$('#page').height(document.body.clientHeight)
	$('#page').width(document.body.clientWidth)
};

$(document).bind('ready', prelim);