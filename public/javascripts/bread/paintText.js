$(document).bind('ready', function(){

    theTop = document.defaultView.getComputedStyle(document.getElementById("paintText"), null).getPropertyValue("top");

    $("#paintText").ColorPicker({
        onShow: function(colorpkr){
          $(colorpkr).css({
              "top": parseInt($(colorpkr).css('top')) - 27 + 'px'
          })
        },
	onSubmit: function(hsb, hex, rgb, el) {
            builder.state.foreColor = hex;
            $(el).ColorPickerHide();
	}
    })


    $('#paintText').bind('click', function(){

        $(".div").bind('click', function(event){
            $(event.target).css('color', "#" + builder.state.foreColor);
        })
    })
})
