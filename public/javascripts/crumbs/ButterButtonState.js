$(document).bind("ready", function(){
    butterMouseUp = function(event){

        alert("")

        if(document.selection){
            //IE < 9 route;
        } else {

            if(builder.state.caret == 1){

                /* if($(window.getSelection().getRangeAt(0).startContainer.parentNode).css("font-weight") > 400){

                    $("#boldButton").children("img").css({
                        "border-left": "1px solid black",
                        "border-top": "1px solid black"
                    })
                } else {
                    $("#boldButton").children("img").css({
                        "border-left": "none",
                        "border-top": "none"
                    })
                }
                */


                if(window.getSelection() == '' && builder.state.selectedOn != 1 && builder.state.butterDisabled){
                    builder.state.caret = 1;
                    builder.methods.enableButtons();
                    builder.state.butterDisabled = 0;
                }
            }


            else if(window.getSelection() == '' && builder.state.selectedOn != 1){
                builder.methods.disableButtons();
                builder.state.butterDisabled = 1;
                builder.state.textSelection = 0
            }


           else if(window.getSelection() != '' && builder.state.textSelection != 1){

                builder.state.textSelection = 1
               builder.methods.enableButtons();
               builder.state.butterDisabled = 0;
            }

            else {

                return false;

            }

        }


    }

})



