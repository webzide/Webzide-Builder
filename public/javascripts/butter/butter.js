/*
The following code/document/program is the copyrighted work of:
"Xuan Duan", 2010 - 2011
All Rights Reserved.
This document/software/program/code, or any portions of it may not be cited, reproduced or redistributed without express written consent of the Author.
*/



builder.butter.css={
        'position': 'fixed',
        'background': 'rgb(240, 235, 226)',
        'height': '20px',
        'width': 'auto',
        'left': '316px',
        'bottom': '6px',
        "border": "1px solid rgb(131, 118, 99)"
}

$(document).bind('ready', function(){

    builder.butter.object=new tools('butterDiv', document.body, builder.butter, ['bread', 'zidebuilder', "builderDiv"], null,null, builder.butter.css, null, null)
    builder.butter.object.init();

    builder.butter.object.boldButton = {}
    builder.butter.object.boldButton.object=new tools('boldButton', 'butterDiv', null, ['typo', "butterButton"], null, 'butter/boldButton.gif', {float: 'left'}, null, null)
    builder.butter.object.boldButton.object.init();

    builder.butter.object.italicButton = {}
    builder.butter.object.italicButton.object=new tools('italicButton', 'butterDiv', null, ['typo', "butterButton"], null, 'butter/italicButton.gif', {float: 'left'}, null, null)
    builder.butter.object.italicButton.object.init();


    builder.butter.object.underlineButton=new tools('underlineButton', 'butterDiv', null, ['typo', "butterButton"], null, 'butter/underlineButton.gif', {float: 'left'}, null, null)
    builder.butter.object.underlineButton.init();

    builder.butter.object.strikethroughButton=new tools('strikethroughButton', 'butterDiv', null, ['typo', "butterButton"], null, 'butter/strikethroughButton.gif', {float: 'left'}, null, null)
    builder.butter.object.strikethroughButton.init();

    builder.butter.object.leftAlignedButton=new tools( 'leftAlignedButton', 'butterDiv', null , ['typo', "butterButton"], null, 'butter/leftAlignedButton.gif', {float: 'left'}, null, null)
    builder.butter.object.leftAlignedButton.init();

    builder.butter.object.centredButton=new tools( 'centredButton', 'butterDiv', null, ['typo', "butterButton"], null, 'butter/centredButton.gif', {float: 'left'}, null, null)
    builder.butter.object.centredButton.init();

    builder.butter.object.rightAlignedButton=new tools( 'rightAlignedButton', 'butterDiv', null, ['typo', "butterButton"], null, 'butter/rightAlignedButton.gif', {float: 'left'}, null, null)
    builder.butter.object.rightAlignedButton.init();

    builder.butter.object.cutButton=new tools( 'cutButton', 'butterDiv', null, ['typo', "butterButton"], null, 'butter/icon_cut.gif', {float: 'left'}, null, null)
    builder.butter.object.cutButton.init();

    builder.butter.object.copyButton=new tools( 'copyButton', 'butterDiv', null, ['typo', "butterButton"], null, 'butter/icon_copy.gif', {float: 'left'}, null, null)
    builder.butter.object.copyButton.init();

    builder.butter.object.pasteButton=new tools( 'pasteButton', 'butterDiv', null, ['typo', "butterButton"], null, 'butter/icon_paste.gif', {float: 'left'}, null, null)
    builder.butter.object.pasteButton.init();

    builder.butter.object.numListButton=new tools( 'numListButton', 'butterDiv', null, ['typo', "butterButton"], null, 'butter/icon_numlist.gif', {float: 'left'}, null, null)
    builder.butter.object.numListButton.init();

    builder.butter.object.bulListButton=new tools( 'bulListButton', 'butterDiv', null, ['typo', "butterButton"], null, 'butter/icon_bullist.gif', {float: 'left'}, null, null)
    builder.butter.object.bulListButton.init();

    //builder.butter.object.linkButton=new tools( 'linkButton', 'butterDiv', null, ['typo', "butterButton"], null, 'butter/icon_ins_link.gif', {float: 'left'}, null, null)
    //builder.butter.object.linkButton.init();

    //builder.butter.object.imageAddButton=new tools( 'imageAddButton', 'butterDiv', null, ['typo', "butterButton"], null, 'butter/icon_ins_image.gif', {float: 'left'}, null, null)
    //builder.butter.object.imageAddButton.init();

    //builder.butter.object.indentButton=new tools( 'linkButton', 'butterDiv', null, ['typo', "butterButton"], null, 'butter/icon_indent.gif', {float: 'left'}, null, null)
    //builder.butter.object.indentButton.init();

    builder.butter.object.textColorButton=new tools( 'textColorButton', 'butterDiv', null, ['typo', "butterButton"], null, 'butter/textColorButton.gif', {float: 'left'}, null, null)
    builder.butter.object.textColorButton.init();

    builder.butter.object.backColorButton=new tools( 'backColorButton', 'butterDiv', null, ['typo', "butterButton"], null, 'butter/backColorButton.gif', {float: 'left'}, null, null)
    builder.butter.object.backColorButton.init();

    builder.butter.object.hiLiteButton=new tools( 'hiLiteButton', 'butterDiv', null, ['typo', "butterButton"], null, 'butter/button_highlight.gif', {float: 'left'}, null, null)
    builder.butter.object.hiLiteButton.init();

    //fontSizeMenu = new selectMenu("fontSizeMenu", "#butterDiv", null, {"margin": "0", "float": "left"}, fontSizeArray, changeFontSize)
    //fontSizeMenu.init();

 
    builder.butter.object.fontFamilyButton = new selectMenu("fontFamilyMenu", "#butterDiv", null, {"margin": "0", "float": "left", 'width': "100px"}, fontFamiliesArray, changeFontFamily);
    builder.butter.object.fontFamilyButton.init()


})
