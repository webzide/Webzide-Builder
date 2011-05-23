/*
The following code/document/program is the copyrighted work of:
"Xuan Duan", 2010 - 2011
All Rights Reserved.
This document/software/program/code, or any portions of it may not be cited, reproduced or redistributed without express written consent of the Author.
*/



$(document).bind('ready', function(){
   fontsizeCSS = {
        element: {
            "float": "left",
            "height": "20px",
            "margin": "0px",
            "padding": "0px"
        },
        input: {
            height: "18px",
            "margin": "0px",
            "padding": "0px",
            "width": "40px"
        },
        unit:{
            height: "20px",
            "margin": "0px",
            "padding": "0px",
            "width": "40px"
        },
        apply: {
            "width": "25px",
            "height": "20px",
            "margin": "0px",
            "padding": "0px"
        }
    }

setFontSize = function(){
    sel=window.getSelection();
    range = sel.getRangeAt(0);
    
    fontSizeSpan = document.createElement("span")
    
    $(fontSizeSpan).css("font-size", builder.butter.typo.fontsize)

    
    range.surroundContents(fontSizeSpan)
}


    fontsize = new numUnitInput("fontSize", builder.butter.typo, "fontsize",builder.butter.object.elem, fontsizeCSS, ["pt", "px", "em"], setFontSize)    



})























