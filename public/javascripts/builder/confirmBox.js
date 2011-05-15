var confirmBox = function(id, parent, intent, func){
    this.id = id;
    this.parent= parent;
    this.intent=intent;
    this.func = func;

    this.elem = document.createElement("div");

    $(this.elem).css({
        "position": "absolute",
        "width": "250px",
        "height": "100px",
        "background": "#E6E6E6",
        "z-index": 3,
        "border": "1px solid black"

    })

    var titleBar = document.createElement("div");

    $(titleBar).css({
        "height": "20px",
        "width": "100%",
        "background": "black",
        "color": "white",
        "border-bottom": '1px solid black'
    })

    $(titleBar).text("Confirmation")

    $(titleBar).appendTo(this.elem)

    contentBar = document.createElement("div");

    $(contentBar).css({
        "text-align": "center"
    })

    $(contentBar).text("Are you sure you want to delete this Division? Action cannot currently be reversed")

    $(contentBar).append($("<br />"))

    var confirmButton = document.createElement("button");
    
    $(confirmButton).css({
        "background": "black",
        "color": "white"
    })

    $(confirmButton).text("Confirm")

    $(confirmButton).appendTo(contentBar)

    $(confirmButton).bind("click", {obj: this.elem, action: func}, function(event){
       $(event.data.obj).remove();
       event.data.action();
      
    })

    cancelButton=document.createElement("button");

    $(cancelButton).text("Cancel")

    $(cancelButton).css({
        "background": "black",
        "color": "white"
    })

    $(cancelButton).bind('click',{obj: this.elem}, function(event){
        $(event.data.obj).remove();
    })

    $(cancelButton).appendTo(contentBar)


    $(contentBar).appendTo(this.elem);

    $(this.elem).appendTo(parent)

}

confirmBox.prototype = new zid();



$(document).bind('ready', function(){


})