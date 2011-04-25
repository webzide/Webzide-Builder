/*
The following code/document/program is the copyrighted work of:
"Xuan Duan", 2010 - 2011
All Rights Reserved.
This document/software/program/code, or any portions of it may not be cited, reproduced or redistributed without express written consent of the Author.
*/

fontFamiliesArray=new Array();
fontFamiliesArray[0] = "Arial";
fontFamiliesArray[1] = "Arial Black";
fontFamiliesArray[2] = "Comic Sans MS";
fontFamiliesArray[3] = "Courier New";
fontFamiliesArray[4] = "Georgia";
fontFamiliesArray[5] = "Impact";
fontFamiliesArray[6] = "Times New Roman";
fontFamiliesArray[7] = "Trebuchet MS";
fontFamiliesArray[8] = "Verdana";

var changeFontFamily = function(family){
   document.execCommand("fontname", false, family);
}

$(document).bind("ready", function(){
    var fontFamilyButton = new selectMenu("kobe", "#butterDiv", null, {"margin": "0", "float": "left"}, fontFamiliesArray, changeFontFamily);

    fontFamilyButton.init()
})