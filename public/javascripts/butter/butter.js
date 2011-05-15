/*
The following code/document/program is the copyrighted work of:
"Xuan Duan", 2010 - 2011
All Rights Reserved.
This document/software/program/code, or any portions of it may not be cited, reproduced or redistributed without express written consent of the Author.
*/

builder.divisions.butter = {}

builder.divisions.butter.css={
        'position': 'fixed',
        'background': 'rgb(240, 235, 226)',
        'height': '20px',
        'width': 'auto',
        'left': '260px',
        'bottom': '6px',
        "border": "1px solid rgb(131, 118, 99)"
}

$(document).bind('ready', function(){

    builder.divisions.butter.object=new tools('butterDiv', document.body, builder.divisions.butter, ['bread', 'zidebuilder', "builderDiv"], null,null, builder.divisions.butter.css, null, null)
    builder.divisions.butter.object.init();

    builder.divisions.butter.object.children = {}

    builder.divisions.butter.object.children.boldButton = {}
    builder.divisions.butter.object.children.boldButton.object=new tools('boldButton', 'butterDiv', null, ['typo', "butterButton"], null, 'butter/boldButton.gif', {float: 'left'}, null, null)
    builder.divisions.butter.object.children.boldButton.object.init();

    builder.divisions.butter.object.children.italicButton = {}
    builder.divisions.butter.object.children.italicButton.object=new tools('italicButton', 'butterDiv', null, ['typo', "butterButton"], null, 'butter/italicButton.gif', {float: 'left'}, null, null)
    builder.divisions.butter.object.children.italicButton.object.init();


    builder.divisions.butter.object.children.underlineButton=new tools('underlineButton', 'butterDiv', null, ['typo', "butterButton"], null, 'butter/underlineButton.gif', {float: 'left'}, null, null)
    builder.divisions.butter.object.children.underlineButton.init();

    builder.divisions.butter.object.children.strikethroughButton=new tools('strikethroughButton', 'butterDiv', null, ['typo', "butterButton"], null, 'butter/strikethroughButton.gif', {float: 'left'}, null, null)
    builder.divisions.butter.object.children.strikethroughButton.init();

    builder.divisions.butter.object.children.leftAlignedButton=new tools( 'leftAlignedButton', 'butterDiv', null , ['typo', "butterButton"], null, 'butter/leftAlignedButton.gif', {float: 'left'}, null, null)
    builder.divisions.butter.object.children.leftAlignedButton.init();

    builder.divisions.butter.object.children.centredButton=new tools( 'centredButton', 'butterDiv', null, ['typo', "butterButton"], null, 'butter/centredButton.gif', {float: 'left'}, null, null)
    builder.divisions.butter.object.children.centredButton.init();

    builder.divisions.butter.object.children.rightAlignedButton=new tools( 'rightAlignedButton', 'butterDiv', null, ['typo', "butterButton"], null, 'butter/rightAlignedButton.gif', {float: 'left'}, null, null)
    builder.divisions.butter.object.children.rightAlignedButton.init();

    builder.divisions.butter.object.children.cutButton=new tools( 'cutButton', 'butterDiv', null, ['typo', "butterButton"], null, 'butter/icon_cut.gif', {float: 'left'}, null, null)
    builder.divisions.butter.object.children.cutButton.init();

    builder.divisions.butter.object.children.copyButton=new tools( 'copyButton', 'butterDiv', null, ['typo', "butterButton"], null, 'butter/icon_copy.gif', {float: 'left'}, null, null)
    builder.divisions.butter.object.children.copyButton.init();

    builder.divisions.butter.object.children.pasteButton=new tools( 'pasteButton', 'butterDiv', null, ['typo', "butterButton"], null, 'butter/icon_paste.gif', {float: 'left'}, null, null)
    builder.divisions.butter.object.children.pasteButton.init();

    builder.divisions.butter.object.children.numListButton=new tools( 'numListButton', 'butterDiv', null, ['typo', "butterButton"], null, 'butter/icon_numlist.gif', {float: 'left'}, null, null)
    builder.divisions.butter.object.children.numListButton.init();

    builder.divisions.butter.object.children.bulListButton=new tools( 'bulListButton', 'butterDiv', null, ['typo', "butterButton"], null, 'butter/icon_bullist.gif', {float: 'left'}, null, null)
    builder.divisions.butter.object.children.bulListButton.init();

    builder.divisions.butter.object.children.linkButton=new tools( 'linkButton', 'butterDiv', null, ['typo', "butterButton"], null, 'butter/icon_ins_link.gif', {float: 'left'}, null, null)
    builder.divisions.butter.object.children.linkButton.init();

    builder.divisions.butter.object.children.imageAddButton=new tools( 'imageAddButton', 'butterDiv', null, ['typo', "butterButton"], null, 'butter/icon_ins_image.gif', {float: 'left'}, null, null)
    builder.divisions.butter.object.children.imageAddButton.init();

    builder.divisions.butter.object.children.indentButton=new tools( 'linkButton', 'butterDiv', null, ['typo', "butterButton"], null, 'butter/icon_indent.gif', {float: 'left'}, null, null)
    builder.divisions.butter.object.children.indentButton.init();

    builder.divisions.butter.object.children.textColorButton=new tools( 'textColorButton', 'butterDiv', null, ['typo', "butterButton"], null, 'butter/textColorButton.gif', {float: 'left'}, null, null)
    builder.divisions.butter.object.children.textColorButton.init();

    builder.divisions.butter.object.children.backColorButton=new tools( 'backColorButton', 'butterDiv', null, ['typo', "butterButton"], null, 'butter/backColorButton.gif', {float: 'left'}, null, null)
    builder.divisions.butter.object.children.backColorButton.init();

    builder.divisions.butter.object.children.hiLiteButton=new tools( 'hiLiteButton', 'butterDiv', null, ['typo', "butterButton"], null, 'butter/button_highlight.gif', {float: 'left'}, null, null)
    builder.divisions.butter.object.children.hiLiteButton.init();

    fontSizeMenu = new selectMenu("fontSizeMenu", "#butterDiv", null, {"margin": "0", "float": "left"}, fontSizeArray, changeFontSize)
    fontSizeMenu.init();

    builder.divisions.butter.object.children.fontFamilyButton = new selectMenu("fontFamilyMenu", "#butterDiv", null, {"margin": "0", "float": "left", 'width': "100px"}, fontFamiliesArray, changeFontFamily);
    builder.divisions.butter.object.children.fontFamilyButton.init()

    $(document).bind("mouseup", function(event){

        if(document.selection){
            

        } else {

            if(window.getSelection() == '' && builder.state.selectedOn != 1){
                builder.methods.disableButtons();
                builder.state.textSelection = 0
            }


           else if(window.getSelection() != '' && builder.state.textSelection != 1){

                builder.state.textSelection = 1
               builder.methods.enableButtons();
            } else {

                return false;

            }

        }


    })



})
