$(document).bind('ready', function(){
    $('#drawDiv').bind('click', {innerElem: false},draw);
    $('#drawDiv').bind('click', function(){
        

        if(builder.state.activeTool != "drawDiv"){
            builder.methods.toggleBoundaries()
            builder.state.activeTool = "drawDiv"
        }

        
        
    });
});