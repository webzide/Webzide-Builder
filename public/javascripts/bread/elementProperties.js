

$(document).bind('ready', function(){
	$('#elementProperties').bind('click', function(){
                builder.elementPropertyWindow = new propertiesWindow(null, "body", {height: "100px", width: "70px", "background": "#E6E6E6", "border": "1px solid black"}, builder.state.selectedElem, {visible: true}, applyProperties)

        });

        
        

});