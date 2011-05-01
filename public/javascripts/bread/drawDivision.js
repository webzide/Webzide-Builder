$(document).bind('ready', function(){
    $('#drawDiv').bind('click', {innerElem: false},draw);
    $('#drawDiv').bind('click', function(){
        

        if(global.state.activeTool != "drawDiv"){
            global.methods.toggleBoundaries()
            global.state.activeTool = "drawDiv"
        }

        
        
    });
});