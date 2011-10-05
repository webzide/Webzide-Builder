$(document).bind('ready', function(){
	$('#drawText').bind('click', {innerElem: true, elemType: "span"},draw);

        $('#drawText').bind('click', function(){builder.methods.enableButtons()});

});