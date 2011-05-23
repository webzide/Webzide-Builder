$(document).bind("ready", function(){
    var stoveDiv = document.createElement("div");

    $(stoveDiv).css({
        "position": "fixed",
        "left": "6px",
        "bottom": "6px"
    })

    var previewButton = document.createElement("button");

    $(previewButton).css({
        "background": "black",
        "color": "white",
        "display": "block"

    })

    $(previewButton).text("Preview")

    $(previewButton).bind("click", function(){
        $("#handTool").trigger("click");

        var newWindow = window.open("", "subwindow", "status, menubar,fullscreen, scrollbars")
        newWindow.document.write(document.getElementById("page").innerHTML)
    })

    $(previewButton).appendTo(stoveDiv);

    var clearButton = document.createElement("button")

    $(clearButton).css({
        "background": "black",
        "color": "white",
        "display": "block"

    })

    $(clearButton).text("Clear")

    $(clearButton).bind("click", function(){
        window.location.reload()
    })

    $(clearButton).appendTo(stoveDiv);

    var resetButton = document.createElement("button")

    $(resetButton).css({
        "background": "black",
        "color": "white"

    })
    
    $(resetButton).text("Reset")

    $(resetButton).bind("click", function(){
        window.location.reload()
    })

    $(resetButton).appendTo(stoveDiv);


    $(stoveDiv).appendTo(document.body)
})