/*
The following code/document/program is the copyrighted work of:
"Xuan Duan", 2010 - 2011
All Rights Reserved.
This document/software/program/code, or any portions of it may not be cited, reproduced or redistributed without express written consent of the Author.
*/

textColor=function(){
	global.palette.showhide();
        global.palette.state.intent="fore";
};

$(document).bind('ready', function(){



    $('.colorpicker').bind('mousedown', function(event){
        event.preventDefault();
    })

    $("#textColorButton").ColorPicker({

        onSubmit: function(hsb, hex, rgb, el) {
            document.execCommand("forecolor", false, "#" + hex);
            $(el).ColorPickerHide();
        }
    })

    $(".colorpicker").children().each(function(event){
        this.style.MozUserSelect="none"
    })

    $(".colorpicker").css({
        '-moz-user-select':'none',
        '-webkit-user-select': 'none'
    })
});