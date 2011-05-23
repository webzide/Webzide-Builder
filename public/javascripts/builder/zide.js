/*
The following code/document/program is the copyrighted work of:
"Xuan Duan", 2010 - 2011
All Rights Reserved.
This document/software/program/code, or any portions of it may not be cited, reproduced or redistributed without express written consent of the Author.
*/

builder = {
    "initialPropertyWindow": new Object(),
    "initialAssitantModal": new Object(),
    "helpDesk": new Object(),
    "bread": new Object(),
    "butter": {},
    "toaster": new Object(),
    "propertyWindow": new Object()
}

builder.methods = {
    "toggleBoundaries": new Function(),
    "switchTool": new Function()
}

builder.propertyWindow.props = {
    "left": null,
    "top": null,
    "width": null,
    "height": null,
    "background": null

}

builder.info = {

}

builder.divisions ={}

builder.info.breadToolsArray = [];
builder.info.breadToolsArray[0]= "handTool";
builder.info.breadToolsArray[1]= "divisionDelete";
builder.info.breadToolsArray[2]= "elementSelect";
builder.info.breadToolsArray[3]= "textSelect";
builder.info.breadToolsArray[4]= "eyeDropper";
builder.info.breadToolsArray[5]= "insertText";
builder.info.breadToolsArray[6]= "drawDiv";
builder.info.breadToolsArray[7]= "drawText";
builder.info.breadToolsArray[8]= "curtainH";
builder.info.breadToolsArray[9]= "curtainV";
builder.info.breadToolsArray[10]= "dividerY";
builder.info.breadToolsArray[11]= "dividerX";
builder.info.breadToolsArray[12]= "divisionDrag";
builder.info.breadToolsArray[13]= "divisionResize";
builder.info.breadToolsArray[14]= "divBackground";
builder.info.breadToolsArray[15]= "paintText";
builder.info.breadToolsArray[16]= "imageInsert";
builder.info.breadToolsArray[17]= "attachLink";

builder.methods.switchTool = function(tools){

    $(".div").css("cursor", "default")

    builder.state.selectedOn = 0;
    builder.methods.disableButtons();
    builder.state.butterDisabled = 1;
    builder.state.caret = 0;

    if(window.getSelection().rangeCount){
        window.getSelection().getRangeAt(0).collapse(false)
    }


    builder.state.selectedElem = null;

    $('.sel').remove();
    $('.div').unbind();
    $('span').unbind();

    builder.helpDesk.icon.src = $("#" + builder.state.activeTool).children("img").attr("src");
    $(builder.helpDesk.helpText).text(helpTextArray[builder.state.activeTool])

    for(i=0; i< builder.info.breadToolsArray.length; i++){
        $("#" + builder.info.breadToolsArray[i]).children("img").css({
                                "border-left": "none",
                                "border-top": "none"
        })
    }

    $("#" + tools.id).children("img").css({

                                "border-left": "2px solid #333333",
                                "border-top": "2px solid #333333"
    })
}

var toasterToolsMatch = {
    "drawDiv": ["propertyBox"],
    "drawText": ["propertyBox"],
    "curtainH": ["propertyBox","curtainToast"],
    "curtainV": ["propertyBox","curtainToast"],
    "imageInsert": ["imageLinkDiv"],
    "dividerX": ["firstProp", "secondProp"],
    "dividerY": ["firstProp", "secondProp"],
    "insertText": ["textDiv"],
    "attachLink": ["attachLinkDiv"]

}

builder.methods.toast = function(tool){
    $("#toaster").children().each(function(){
        $(this).css({
            "display": "none"
        })
    })

    if(toasterToolsMatch[tool]){
        for(i=0; i< toasterToolsMatch[tool].length; i++){
            $("#toaster").children("#" + toasterToolsMatch[tool][i]).css("display", "block")
        }
    }
}

builder.methods.enableButtons = function(){

    $(".butterButton").each(function(){

        tempImg = $(preEnabled[$(this).attr("id")]).clone();
        
        $(tempImg).css({
            				'-moz-user-select':'none',
				'-webkit-user-select': 'none'
        })

        $(tempImg).attr("unselectable", "on")

        $(tempImg).bind("mousedown click", function(event){
            event.preventDefault();
        })

        $(this).empty();


        $(this).append(tempImg)
    })

}

builder.methods.disableButtons = function(){
    $(".butterButton").each(function(){

        tempImg = $(preDisabled[$(this).attr("id")]).clone();

                $(tempImg).css({
            				'-moz-user-select':'none',
				'-webkit-user-select': 'none'
        })

        $(tempImg).bind("mousedown click", function(event){
            event.preventDefault();
        })

        $(tempImg).attr("unselectable", "on")
        $(this).empty();
        $(this).append(tempImg)
    })

}


builder.state = {
    "gridSwitch": 0,
    "borderSwitch": 0,
    "legendSwitch": 0,
    "activeTool": null,
    "stage": null,
    "activeBorders": [],
    "selectedElem": null,
    "selectedOn": 0,
    "buttonDisabled": 1,
    "boundaryStyle": "grooveBorders",
    "textSelection": 0,
    "backColor": null,
    "foreColor": null,
    "eyeColor": null,
    "caret": 0,
    "cutText": '',
    "propertyBox": {},
    "firstProp": {},
    "secondProp": {},
    "linkURL": "#",
    "butterState": {}
}

builder.state.butterState = {
    "bold": 0,
    "italic": 0,
    "underline": 0,
    "strikethrough": 0,
}

builder.butter.typo = {
    "boldButton": "bold",
    "italicButton": "italic",
    "underlineButton": "underline",
    "strikethroughButton": "strikethrough",
    "fontsize": "12pt"
}

builder.state.propertyBox={
    "border-style": 'dotted',
    "border-width": '1px',
    "border-color": 'black',
    "background": "transparent"
}

builder.state.firstProp={
    "border-style": 'dotted',
    "border-width": '1px',
    "border-color": 'black',
    "background": "transparent"
}

builder.state.secondProp={
    "border-style": 'dotted',
    "border-width": '1px',
    "border-color": 'black',
    "background": "transparent"
}


builder.bordersChecked = []
builder.bordersChecked["top"] = 0;
builder.bordersChecked["left"] = 0;
builder.bordersChecked["bottom"] = 0;
builder.bordersChecked["right"] = 0;

builder.selectedProperties = {
    "border-width": "black",
    "border-color": "0px",
    "border-style": "none"
}


builder.event = {
    "drag": 0
}

builder.handlers = {
    "butterMouseUp": new Function()
}