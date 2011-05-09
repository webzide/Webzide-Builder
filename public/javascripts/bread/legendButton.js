$(document).bind("ready", function(){
    $("#legendSwitch").bind("click", function(){

        if(builder.state.legendSwitch == 1){
            
            $(".div").not("#page").showLegend();
        } else if (builder.state.legendSwitch == 0){
            
            $(".legendBox").remove();
        }
    })
})