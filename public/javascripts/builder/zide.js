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
    "butter": new Object(),
    "toaster": new Object(),
    "elementPropertyWindow": new Object()
}

builder.methods = {
    "toggleBoundaries": new Function(),
    "switchTool": new Function()
}

builder.info = {

}

builder.divisions ={}

builder.info.breadToolsArray = [];
builder.info.breadToolsArray[0]= "handTool";
builder.info.breadToolsArray[1]= "divisionDelete";
builder.info.breadToolsArray[2]= "elementSelect";
builder.info.breadToolsArray[3]= "textSelect";
builder.info.breadToolsArray[4]= "drawDiv";
builder.info.breadToolsArray[5]= "drawText";
builder.info.breadToolsArray[6]= "curtainH";
builder.info.breadToolsArray[7]= "curtainV";
builder.info.breadToolsArray[8]= "divisionDrag";
builder.info.breadToolsArray[9]= "divisionResize";
builder.info.breadToolsArray[10]= "divBackground";
builder.info.breadToolsArray[11]= "paintText";
builder.info.breadToolsArray[12]= "imageInsert";
builder.info.breadToolsArray[13]= "attachLink";

builder.methods.switchTool = function(tools){

    builder.state.selectedOn = 0;
    builder.methods.disableButtons();
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
    "drawDiv": "boundariesStyle",
    "drawText": "boundariesStyle",
    "curtainH": "curtainToast",
    "curtainV": "curtainToast",
    "imageInsert": "imageLinkDiv",
    "attachLink": ""

}

builder.methods.toast = function(tool){
    $("#toaster").children().each(function(){
        $(this).css({
            "display": "none"
        })
    })

    $("#toaster").children("#" + toasterToolsMatch[tool]).css("display", "block")
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
    "selectedElems": [],
    "selectedOn": 0,
    "boundaryStyle": "grooveBorders",
    "textSelection": 0
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