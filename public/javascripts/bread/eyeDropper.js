$(document).bind("click", function(){
    $("#eyeDropper").bind('click', function(){

        $('.div').css('cursor', 'url(../images/cursors/eyeDropper.gif), default')



        $('.div').bind('click', function(event){
            var bg=$(event.target).css("background")

            $("#eyeDropper").children("img").css("background", bg)

            builder.state.eyeColor = bg;
        })









    })









    
})