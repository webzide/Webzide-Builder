$(document).bind("ready", function(){
    $("#legendButton").bind("click", function(){

        if(global.state.legendSwitch == 0){
            global.state.legendSwitch = 1;
            $(".div").not("#page").showLegend();
        } else if (global.state.legendSwitch == 1){
            global.state.legendSwitch = 0;
            $(".legendBox").remove();
        }
    })
})