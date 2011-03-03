$(document).bind('ready', function(){
    $('#divBackground').bind('click', function(){
        colorPicker({style: "bread"});
        $(".div").bind('click', function(event){
            $(event.target).css('background-color', colorVar);
        })
    })
})