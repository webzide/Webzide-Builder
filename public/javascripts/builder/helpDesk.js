var helpTextArray = [];
helpTextArray["handTool"] = "The Hand tool is used to view a element property. Simply right click on any element on the page to view its property"
helpTextArray["divisionDelete"] = "Delete elements on the Fly. Simply click on the element to Delete and confirm. Note, the action not currently reversable."
helpTextArray["elementSelect"] = "Select an Element you want to work with. After that you may be able to use the Typography Box"
helpTextArray["textSelect"] = "Dynamically edit text contents. Click on the text in which you want to edit."
helpTextArray["drawDiv"] = "Click and draw feature. Simply click on the content area to draw rectangular content boxes."
helpTextArray["drawText"] = "Click and draw Text. Similar to Draw Division, It creates rectangular content boxes for texts"
helpTextArray["curtainH"] = "Creates an division pulling a curtain horizontally. Simply select the the height of the division"
helpTextArray["curtainV"] = "Creates an division pulling a curtain Vertically. Simply select the the Width of the division"
helpTextArray["divisionDrag"] = "Move elements by the mechanism of drag and drop."
helpTextArray["divisionResize"] = "Resizes an element"
helpTextArray["divBackground"] = "Fill the background color of an element. Simply set the color and click on the element you want to fill."
helpTextArray["paintText"] = "Set the font color of the texts in an element. Used in an similar fashion as the background filler"

$(document).bind("ready", function(){
    global.helpDesk = document.createElement("div")
    $(global.helpDesk).text(global.state.activeTool);

    $(global.helpDesk).addClass("zidebuilder")

    global.helpDesk.heading = document.createElement("div");

    $(global.helpDesk.heading).text("Webzide Builder Help Desk")

    $(global.helpDesk.heading).appendTo(global.helpDesk)

    $(global.helpDesk.heading).css({
        "border-bottom": "1px solid black"
    })

    $(global.helpDesk).appendTo("body")

    global.helpDesk.icon = document.createElement("img");

    $(global.helpDesk.icon).appendTo(global.helpDesk)

    $(global.helpDesk.icon).css({
        "margin-top": "4px",
        "margin-left": "4px",
        "margin-right": "4px"
    })

    global.helpDesk.helpText = document.createElement("span");

    if(global.state.activeTool==null){
        $(global.helpDesk.helpText).text("You may use the tools on the toolbox. If you click on it, information is shown here")
    }

    $(global.helpDesk.helpText).appendTo(global.helpDesk);

    $(global.helpDesk).css({
        "position": "absolute",
        "background": "#E6E6E6",
        "border": "1px solid black",
        "width": "230px",
        "height": "100px",
        "bottom": "6px",
        "left": "10px",
        "padding": "4px"
    })
})