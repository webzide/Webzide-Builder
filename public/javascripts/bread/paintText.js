$(document).bind('ready', function(){
    $('#paintText').bind('click', function(){
        colorPicker({style: "bread"});
        $(".div").bind('click', function(event){
            $(event.target).css('color', colorVar);
        })
    })
})
