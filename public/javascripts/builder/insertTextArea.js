$(document).bind('ready', function(){
    var textArea = function(id, parent, css){
        this.id = id;
        this.parent = parent;
        this.css = css;

        var textAreaDiv = document.createElement("div");
        $(textAreaDiv).attr("id", this.id);

        $(textAreaDiv).css(this.css.outter)

        var tArea = document.createElement("textarea");

        $(tArea).css(this.css.inner)

        $(tArea).attr("id", "textareaDIV")

        $(tArea).bind("keyup", function(){
            builder.state.insertedText = $(this).val();
        })

        $(tArea).appendTo(textAreaDiv)


        $(textAreaDiv).appendTo($(parent));



    }

    insertTextAreaCSS = {
        outter: {

            "position": "fixed",
            "right": "6px",
            "top": "370px"
        },
        inner:{
            width: "130px",
            "height": "100px"
        }
    }

    var insertTextArea = new textArea("textarea", "#toaster", insertTextAreaCSS);

    
    

});