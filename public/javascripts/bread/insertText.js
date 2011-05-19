$(document).bind("ready", function(){

    $("#insertText").bind("click", function(){

        $(document).bind("mouseup", builder.handlers.butterMouseUp)

        $(".div, span").css("cursor", "text")

        $(".textSpan").attr("contenteditable", "true")

        $(".textSpan").css({
            "-moz-user-select": "text"
        })

        $(".textSpan").bind("mousedown", function(){
            builder.state.caret = 1;
        })

        $("span").css({
            "-moz-user-select": "text"
        })

        $(".div").bind("click", function(event){

            if($("#textString").val() == ''){
                return false;
            }

            if(event.target.nodeName != "DIV"){
                return false;
            }

            var newElem = document.createElement('div');

            $(newElem).addClass('div')

            var innerElem = document.createElement('span');

            $(innerElem).text($("#textString").val())

            $(innerElem).addClass("textSpan")

            $(innerElem).appendTo(newElem)

            $(newElem).css({
                "position": "absolute",
                "left": event.clientX,
                "top": event.clientY,
                "padding": "0px",
                "margin": "0px"
            })

            $(newElem).appendTo(event.target)

            $(innerElem).css({

                "padding": "0px",
                "margin": "0px"

            })

            $('body').css({
                    '-moz-user-select':'text',
                    '-webkit-user-select': 'text'
            })

            $(innerElem).attr("unselectable", 'off')

            $(innerElem).bind('mouseover', function(){
                $(this).attr("contentEditable", "true")

                $(this).css({
                    "outline": "0px solid transparent"
                })
                 document.execCommand("enableObjectResizing", false, false);
            })

            $(innerElem).bind('click', function(){
                builder.state.caret = 1;
            })



            $(innerElem).bind('focus', function(){
                builder.state.caret = 1;
            })

            $(innerElem).bind('blur', function(){
                builder.state.caret = 0;
            })

            $(innerElem).attr("id", "text1")

            

        })

    })



    textDiv = document.createElement('div');
    $(textDiv).attr("id", "textDiv");

    $(textDiv).css("display", "none")

    var heading = document.createElement("div");
    $(heading).text("Text:")

    $(heading).appendTo(textDiv)

    textString = document.createElement("input");

    $(textString).attr("id", "textString");

    $(textString).appendTo(textDiv)


    $(textDiv).appendTo("#toaster")


    
})