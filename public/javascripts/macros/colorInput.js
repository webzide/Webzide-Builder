var colorMacro = function(variable){
    var colorInput = document.createElement('input');

    $(colorInput).addClass("colorInput")

    $(colorInput).ColorPicker({
            onShow: function(colorpkr){
                $(colorpkr).css({
                    "z-index": 7
                })
            },
            onSubmit: function(hsb, hex, rgb, el) {
                    $(el).val("#" + hex);
                    $(el).ColorPickerHide();


            },
            onBeforeShow: function () {
                    $(this).ColorPickerSetColor(this.value);
                    
            }
    })
    .bind('keyup', function(){
            $(this).ColorPickerSetColor(this.value);
    });

    return colorInput;

}

$(document).bind('ready', function(){

})
