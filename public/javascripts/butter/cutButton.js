$(document).bind("ready", function(){


    $("#cutButton").bind("click", function(){
        builder.state.cutText = window.getSelection().getRangeAt(0).cloneContents().textContent;

        
        var sel, range;
        if (window.getSelection) {
            sel = window.getSelection();
            if (sel.rangeCount) {
                range = sel.getRangeAt(0);
                range.deleteContents();
            }
        } else if (document.selection && document.selection.createRange) {
            range = document.selection.createRange();
            range.text = '';
        }


    })

})