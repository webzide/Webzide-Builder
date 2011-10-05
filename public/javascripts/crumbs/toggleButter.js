$(document).bind('ready', function(){
	$('.butterButton').bind('click', function(){
            if(builder.state.butterState[$(this).data("type")] == 0){
                $(this).css({
                    "border-top": "2px solid black",
                    "border-left": "2px solid black"
                })

                builder.state.butterState[$(this).data("type")] = 1;
            } else if(builder.state.butterState[$(this).data("type")] == 1){
                $(this).css({
                    "border-top": "none",
                    "border-left": "none"
                })

                builder.state.butterState[$(this).data("type")] = 0;
            }
        })



});