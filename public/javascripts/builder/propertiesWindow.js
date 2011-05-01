var propertiesWindow = function(id, parent, css, intent, state, func){
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
        "width": "270px",
        "height": '252px',
        "border": '1px solid black',
        "z-index": 6
        
    })



    this.elem.topBar = document.createElement("div");

    $(this.elem.topBar).css({
        height: "17px",
        background: "black"
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

    intent = document.createElement("div")

    $(intent).css({
        "font-size": "11pt",
        "margin-bottom": "10px"
    })

    $(intent).appendTo(this.elem.contentBar)

    intentText = "Setting Initial Properties for the " + this.intent + " Element";

    $(intent).text(intentText)

    for (var key in props){
        field = document.createElement("div");

        $(field).css({
            "height": "28px"
        })

        field_head = document.createElement("div")
        $(field_head).css({
            "float": "left"
        })

        $(field_head).text(key)

        $(field_head).appendTo(field)

        field_body = document.createElement("div")

        $(field_body).css({
            "float": "right"
        })

        field_input = document.createElement("input");

        $(field_input).attr("id", props[key])

        $(field_input).val("Default")

        $(field_input).bind("click", function(){
            if($(this).val() == "Default"){
                $(this).val("")
            }
        })

        $(field_input).bind("blur", function(){
            if($(this).val() == ""){
                $(this).val("Default")
            }
        })

        $(field_input).appendTo(field_body)

        $(field_body).appendTo(field)

        $(this.elem.contentBar).append(field)

    }
    
    submit_field = document.createElement("button");

    submit_field.innerHTML = "Apply"

    $(submit_field).css({
       "background": "black",
       "color": "white"
    })

    $(submit_field).bind("click", {elem: this} ,function(event){
        event.data.elem.func(event.data.elem.intent, {submit: "apply"})
    })

    $(this.elem.contentBar).append(submit_field)



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
        event.data.obj.showhide();

        global.initialAssistantModal.showhide()
        
    })

    $(this.parent).append(this.elem);

    this.centerX()
    this.centerY()

    $(this.elem.contentBar).append(submit_field, submit_close_field)

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
                $(curr).css(p, $("#" + p).val())
            }
        }



       
    }

    global.initialPropertyWindow = new propertiesWindow(null, "body", {height: "100px", width: "70px"}, "#page", {visible: true}, applyProperties)


    
    
})
