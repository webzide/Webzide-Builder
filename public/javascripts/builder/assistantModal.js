zid.prototype.centerX = function(){
    var windowWidth = document.body.clientWidth;
    var elemWidth = $(this.elem).width();
    var elemLeft = (windowWidth - elemWidth) / 2;

    $(this.elem).css("left", elemLeft);
}
zid.prototype.centerY = function(){
    var windowHeight = document.body.clientHeight;
    var elemHeight= $(this.elem).height();
    var elemTop = (windowHeight - elemHeight) / 2

    $(this.elem).css("top", elemTop);
}


var assistantModal = function(id, parent, css, state, func, heading, text){
    this.id = id;
    this.parent = parent;
    this.css = css;
    this.state = state;
    this.func = func;
    this.heading = heading;
    this.text = text;

    this.elem= document.createElement("div");

    $(this.elem).css({
        "background": "#FFFFCC",
        "position": "absolute",
        "display": "none",
        "border": "1px solid black",
        "padding": "5px",
        "z-index": 5,
        "width": "400px",
        "height": "100px",
        "top": "30px"
    })

    this.elem.heading = document.createElement("h3");

    $(this.elem.heading).css({
        "font-size": "10pt"
    })

    $(this.elem.heading).text(this.heading);

    this.elem.content = document.createElement("p")

    $(this.elem.content).text(this.text)


    $(this.elem).append(this.elem.heading);
    $(this.elem).append(this.elem.content)

    $(this.elem).appendTo(this.parent);

    
}

assistantModal.prototype = new zid();


$(document).bind("ready", function(){
    var welcomeHeading = "Welcome to the Webzide Builder";

    var welcomeMessage = "In order to get started, please set up Your initial page settings in the Box below."
    welcomeMessage += "You may also choose to leave it as default which creates a elements that spans the whole page."

    global.initialAssistantModal = new assistantModal(null, "body", null, {"visible": true}, null, welcomeHeading, welcomeMessage);

    var fadeit = function(){
        $(global.initialAssistantModal.elem).fadeIn('slow')
    }

    setTimeout(fadeit, 1000)

    global.initialAssistantModal.centerX();

})
