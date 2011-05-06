disabledIconSrc = {
    "boldButton": "bold",
    "italicButton": "italic",
    "underlineButton": "underline",
    "strikethroughButton": "strikethrough",
    "leftAlignedButton": "leftAligned",
    "centredButton": "centred",
    "rightAlignedButton": "rightAligned",
    "cutButton": "cut",
    "copyButton": "copy",
    "pasteButton": "paste",
    "numListButton": "numlist",
    "bulListButton": "bulist",
    "imageAddButton": "image",
    "linkButton": "link",
    "indentButton": "indent",
    "textColorButton": "textcolor",
    "backColorButton": "backcolor",
    "hiLiteButton": "hilite"
}

enabledIconSrc = {
    "boldButton": "boldButton",
    "italicButton": "italicButton",
    "underlineButton": "underlineButton",
    "strikethroughButton": "strikethroughButton",
    "leftAlignedButton": "leftAlignedButton",
    "centredButton": "centredButton",
    "rightAlignedButton": "rightAlignedButton",
    "cutButton": "icon_cut",
    "copyButton": "icon_copy",
    "pasteButton": "icon_paste",
    "numListButton": "icon_numlist",
    "bulListButton": "icon_bullist",
    "linkButton": "icon_ins_link",
    "imageAddButton": "icon_ins_image",
    "indentButton": "icon_indent",
    "textColorButton": "textColorButton",
    "backColorButton": "backColorButton",
    "hiLiteButton": "button_highlight"
}

preDisabled = [];

for(p in disabledIconSrc){
    preImage = new Image();
    preImage.src = "images/butter/disabled/" + disabledIconSrc[p] + ".png";
    preDisabled[p] = preImage;

}

preEnabled = [];

for(p in enabledIconSrc){
    preImage = new Image();
    preImage.src = "images/butter/" + enabledIconSrc[p] + ".gif";
    preEnabled[p] = preImage;

}

$(document).bind("ready", function(){
   
})