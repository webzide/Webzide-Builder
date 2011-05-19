Array.prototype.remove = function(name){
    for(i=0; i<this.length; i++){
        if(this[i] == name){
             this.splice(i,1);
        }
    }
    
}

function capFirst(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}


var propertiesWindow = function(id, parent, css, intent, state, func){

    if(intent == null){
        return false;
    }

    this.id = id;
    this.parent= parent;
    this.css = css;
    this.intent = intent;
    this.state = state;
    this.func = func;

    this.elem = document.createElement("div");

    $(this.elem).attr("id", this.id)

    

    $(this.elem).css(this.css)

    $(this.elem).css({
        
        "position": "absolute",
        "width": "210px",
        "height": 'auto',
        "z-index": 6
        
    })

    $(this.elem).addClass("zidebuilder")
    $(this.elem).addClass("builderDiv")

    this.elem.topBar = document.createElement("div");

    $(this.elem.topBar).text("Properties for the Initial Page")

    $(this.elem.topBar).css({
        height: "17px",
        background: "black",
        color: "white"
    })

    this.elem.appendChild(this.elem.topBar);



    this.elem.contentBar = document.createElement("div");

    $(this.elem.contentBar).css({
        "background": "#DDDDDD",
        "padding": "10px"
    })

    this.elem.appendChild(this.elem.contentBar);

    props = {
        "Left Position:": "left",
        "Top Position:": "top",
        "Element Width:": "width",
        "Element Height:": "height",
        "Background Color:": "background-color"
    }


        defaultHeight = document.body.clientHeight;
        defaultWidth = document.body.clientWidth;

    for (var key in props){
        field = document.createElement("div");

        $(field).css({
            "margin": "5px",
            "height": "23px"
        })

        field_head = document.createElement("div")
        $(field_head).css({
            "float": "left"
        })

        $(field_head).text(key)

        $(field_head).appendTo(field)

        $(field_head).css({
            
        })

        field_body = document.createElement("div")

        $(field_body).css({
            "float": "right"
        })

        field_input = document.createElement("input");

        $(field_input).css({
            "width": "60px",
            "height": "13px",
            "font-size": "8pt"
        })

        $(field_input).attr("id", props[key])


        defaultArr = {"left": "0px", "top": "0px", "width": defaultWidth + "px", "height": defaultHeight + "px", "background-color": "transparent"}

        if(builder.state.stage != "setUp"){
            $(field_input).val($(this.intent).css(props[key]));
        } else {
            $(field_input).val(defaultArr[props[key]])

        }

     

        $(field_input).bind("click", {arr: defaultArr[props[key]]},function(event){
            if($(this).val() == event.data.arr){
                $(this).val("")
            }
        })

        $(field_input).bind("blur", {arr: defaultArr[props[key]]}, function(event){
            if($(this).val() == ""){
                $(this).val(event.data.arr)
            }
        })

        $(field_input).appendTo(field_body)

        $(field_body).appendTo(field)

        if(props[key] == "width" || props[key] == "height" || props[key] == "left" || props[key] == "top"){
            var unit = document.createElement("span");
            $(unit).text("px");

            $(unit).css("float", "right")

            $(unit).appendTo(this.elem.contentBar)
        }

        $(this.elem.contentBar).append(field)



    }

    var bordersStyle = document.createElement("div");
    $(bordersStyle).text("Borders Style")

    $(bordersStyle).appendTo(this.elem.contentBar)

    $(bordersStyle).css({
        "font-weight": "bold",
        "border-top": "1px solid black"
    })

    var whichBorders = document.createElement("div");

    builder.bordersSide = ["top", "left", "bottom", "right"]

    for(i=0; i<4; i++){
        var border = document.createElement("input");
        border.type = "checkbox";

        $(border).attr("id", builder.bordersSide[i] + "-border-check")

        $(border).bind("click", {name: builder.bordersSide[i]},function(event){
            if($(this).attr("checked")){
                builder.state.activeBorders.push(event.data.name);
            } else {
                builder.state.activeBorders.remove(event.data.name)
            }

            
           
        })

        borderText = document.createElement("span");

        $(borderText).text(capFirst(builder.bordersSide[i]))

        $(borderText).appendTo(whichBorders)

        $(border).appendTo(whichBorders)

        
    }

    $(whichBorders).appendTo(this.elem.contentBar)

    builder.bordersSelectArr = ["style", "width", "color"]

    bordersSelections = new Array();

    bordersSelections["style"]=["none", "solid", "dotted", "dashed", "double"]
    bordersSelections["width"]=["0px", "1px", "2px", "3px", "4px", "5px", "10px", "15px", "20px", "25px"]
    bordersSelections["color"]=["black", "red", "green", "blue", "yellow", "orange", "maroon", "purple", "cyan"]

    for(j=0; j<builder.bordersSelectArr.length; j++){
        var bordersDiv = document.createElement("div");

        var bordersLegend = document.createElement ("span")

        $(bordersLegend).text("Border " + builder.bordersSelectArr[j])

        var bordersSelect = document.createElement("select")

        var currSelections = bordersSelections[builder.bordersSelectArr[j]]

        $(bordersSelect).attr("id", "border-" + builder.bordersSelectArr[j])

        $(bordersSelect).bind('change', function(event){

                builder.selectedProperties[$(this).attr("id")] = $(this).find(":selected").val()
            })
        

        for(k=0; k<currSelections.length; k++){
            var option = document.createElement("option");
            
            $(option).text(currSelections[k])



            $(option).appendTo(bordersSelect)
        }



        $(bordersLegend).appendTo(bordersDiv)

        $(bordersSelect).appendTo(bordersDiv)

        $(bordersDiv).appendTo(this.elem.contentBar)
    }

    submit_div = document.createElement("div")

    $(submit_div).css({
        "margin-top": "10px"
    })

    submit_field = document.createElement("button");

    submit_field.innerHTML = "Apply"

    $(submit_field).css({
       "background": "black",
       "color": "white",
       "float": "left"
    })

    $(submit_field).bind("click", {elem: this} ,function(event){
        event.data.elem.func(event.data.elem.intent, {submit: "apply"})


    })


    $(submit_field).appendTo(submit_div)


    submit_close_field = document.createElement("button");

    submit_close_field.innerHTML = "Apply and Close"

    $(submit_close_field).css({
       "background": "black",
       "color": "white",
       height: "19px",
       width: "100px"
    })

    $(submit_close_field).bind("click", {obj: this}, function(event){
        event.data.obj.func(event.data.obj.intent, {submit: "applyClose"})

        $(event.data.obj.elem).remove()

        $(builder.initialAssistantModal.elem).css("visibility", "hidden");

        builder.state.stage = "normal"

        $("#handTool").trigger("click");
        $("#handTool").children("img").trigger("click");
        
    })

    $(submit_close_field).appendTo(submit_div)

    $(this.parent).append(this.elem);

    this.centerX()
    this.centerY()

    $(this.elem.contentBar).append(submit_div)

}

propertiesWindow.prototype = new zid();

$(document).bind("ready", function(){

    applyProperties = function(curr, state){

        if(state.submit == "applyClose"){

            if($("#overlay").length > 0){
                $("#overlay").remove()
            }
        }

        var arr = {"left": "0px", "top": "0px", "width": "100%", "height": '100%', "background": "none"}

        for(p in arr){
            if($("#" + p).val() == "Default"){
                $(curr).css(p, arr[p])

                if(p == "background-color"){

                }

            } else {
                if(p == "background"){
                    $(curr).css("background", $("#background-color").val())
                } else {

                    $(curr).css(p, $("#" + p).val())
                }
            }
        }



        for(i = 0; i< builder.state.activeBorders.length; i++){
            for(j = 0; j< builder.bordersSelectArr.length; j++){
                $(curr).css("border-" +  builder.state.activeBorders[i] + "-" + builder.bordersSelectArr[j] , builder.selectedProperties["border-" + builder.bordersSelectArr[j]])

            }
        }



       
    }

    builder.state.stage = "setUp"
    builder.initialPropertyWindow = new propertiesWindow(null, "body", {height: "100px", width: "70px", "background": "#E6E6E6", "border": "1px solid black"}, "#page", {visible: true}, applyProperties)
    


    
})
