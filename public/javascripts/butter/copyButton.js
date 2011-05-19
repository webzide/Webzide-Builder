$(document).bind("ready", function(){


    $("#copyButton").bind("click", function(){
        builder.state.cutText = window.getSelection().getRangeAt(0).cloneContents().textContent;
    })

})