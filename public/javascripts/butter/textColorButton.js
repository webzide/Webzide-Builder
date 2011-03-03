var textColor=function(){
	colorPicker({style: "butter", type: "text"});
	
};

$(document).bind('ready', function(){
	$('#textColorButton').bind('click', textColor)
});