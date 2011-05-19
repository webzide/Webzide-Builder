$(document).bind("ready", function(){


    $("#bulListButton").bind("click", function(event){
        var ol = document.createElement("ul");
        var li = document.createElement("li");

        ol.appendChild(li)

        var sel, range;
        if (window.getSelection) {
            sel = window.getSelection();
            if (sel.rangeCount) {
                range = sel.getRangeAt(0);
                range.insertNode(ol)
            }
        } else if (document.selection && document.selection.createRange) {
            range = document.selection.createRange();
            range.pasteHTML("kobe bryant");
        }
    })

})