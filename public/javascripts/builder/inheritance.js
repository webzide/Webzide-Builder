// Top level Object

global = {
    "initialPropertyWindow": null,
    "initialAssitantModal": null,
    "helpDesk": null
}

global.methods = {
    "toggleBoundaries": new Function(),
    "switchTool": new Function()
}

global.info = {

}

global.info.breadToolsArray = [];
global.info.breadToolsArray[0]= "handTool";
global.info.breadToolsArray[1]= "divisionDelete";
global.info.breadToolsArray[2]= "elementSelect";
global.info.breadToolsArray[3]= "textSelect";
global.info.breadToolsArray[4]= "drawDiv";
global.info.breadToolsArray[5]= "drawText";
global.info.breadToolsArray[6]= "curtainH";
global.info.breadToolsArray[7]= "curtainV";
global.info.breadToolsArray[8]= "divisionDrag";
global.info.breadToolsArray[9]= "divisionResize";
global.info.breadToolsArray[10]= "divBackground";
global.info.breadToolsArray[11]= "paintText";
global.info.breadToolsArray[12]= "imageInsert";
global.info.breadToolsArray[13]= "attachLink";

global.methods.switchTool = function(tools){
    $('.sel').remove();
    $('.div').unbind();
    $('span').unbind();


    global.helpDesk.icon.src = $("#" + global.state.activeTool).children("img").attr("src");
    $(global.helpDesk.helpText).text(helpTextArray[global.state.activeTool])

    for(i=0; i< global.info.breadToolsArray.length; i++){
        $("#" + global.info.breadToolsArray[i]).children("img").css({
                                "border-left": "none",
                                "border-top": "none"
        })
    }

    $("#" + tools.id).children("img").css({

                                "border-left": "2px solid #333333",
                                "border-top": "2px solid #333333"
    })
}




global.state = {
    "gridSwitch": 0,
    "borderSwitch": 0,
    "legendSwitch": 0,
    "activeTool": null,
    "stage": null,
    "activeBorders": []
}

global.bordersChecked = []
global.bordersChecked["top"] = 0;
global.bordersChecked["left"] = 0;
global.bordersChecked["bottom"] = 0;
global.bordersChecked["right"] = 0;

global.selectedProperties = {
    "border-width": "black",
    "border-color": "0px",
    "border-style": "none"
}


global.event = {
    "drag": 0
}

var zid = function(id, type, parent, css, dim, state, func){
    this.id= id;
    this.parent=parent;
    this.css = css;
    this.dim = dim;
    this.func = func;
    this.state = state;
}



zid.prototype.showhide=function(){
    if(this.state.visible == true){
        $(this.elem).css("visibility", "hidden")
        this.state.visible = false;
    } else {
        $(this.elem).css("visibility", "visible")
        this.state.visible = true;
    }
}

zid.prototype.unSelectable = function(element){
    $(this.elem).css({
        "-moz-user-select": "-moz-none",
        "-khtml-user-select": "none",
        "-webkit-user-select": "none",
        "-o-user-select": "none",
        "user-select": "none"
    })
}

//Tools Class for bread/butter tools button objects

