$(document).bind("ready", function(){
    $("#legendButton").bind("click", function(){

        if(builder.state.legendSwitch == 0){
            builder.state.legendSwitch = 1;
            $(".div").not("#page").showLegend();
        } else if (builder.state.legendSwitch == 1){
            builder.state.legendSwitch = 0;
            $(".legendBox").remove();
        }
    })
})