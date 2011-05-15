$(document).bind('ready', function(){

     $("#divBackground").ColorPicker({
        onShow: function(colorpkr){
          $(colorpkr).css({
              "top": parseInt($(colorpkr).css('top')) - 27 + 'px'
          })
        },
	onSubmit: function(hsb, hex, rgb, el) {
            builder.state.backColor = hex;
            $(el).ColorPickerHide();
            $("#divBackground").children("img").css("background", "#"+ hex)
	}
    })

    $('#divBackground').bind('click', function(){

        $(".div").css('cursor', 'url(../images/cursors/bucket.gif), pointer')

        $(".div").bind('click', function(event){
            $(event.target).css('background-color', "#" + builder.state.backColor);


        })
    })


})