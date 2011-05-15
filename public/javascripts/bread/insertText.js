$(document).bind("ready", function(){

    $("#insertText").bind("click", function(){

        $(".div").css("cursor", "text")

        $(".div").bind("click", function(event){

            if(event.target.nodeName != "DIV"){
                return false;
            }

            var newElem = document.createElement('div');



            var innerElem = document.createElement('span');

            $(innerElem).text($("#textString").val())

            $(innerElem).appendTo(event.target)

            $(newElem).css({
                "position": "absolute",
                "left": event.clientX,
                "top": event.clientY,
                "padding": "0px",
                "margin": "0px"
            })

            $(newElem).appendTo(event.target)

            $(innerElem).css({
                "position": "absolute",
                "left": event.clientX,
                "top": event.clientY,
                "padding": "0px",
                "margin": "0px"

            })

            $('body').css({
                    '-moz-user-select':'text',
                    '-webkit-user-select': 'text'
            })

            $(innerElem).attr("unselectable", 'off')

            $(innerElem).attr("contentEditable", "true")

            $(innerElem).attr("id", "text1")

            $(innerElem).trigger("change")

        })

    })



    textDiv = document.createElement('div');
    $(textDiv).attr("id", "textDiv");

    textString = document.createElement("input");

    $(textString).attr("id", "textString");

    $(textString).appendTo(textDiv)


    $(textDiv).appendTo("#toaster")


    
})