var backColor=function(){
	colorPicker({style: "butter", type: "back"});

};

$(document).bind('ready', function(){
	$('#backColorButton').bind('click', backColor);
});

