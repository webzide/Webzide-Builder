$(document).bind("contextmenu", function(event){
	  event.preventDefault();
});

$(".colors").bind("onselectstart", function(event){
    event.preventDefault();
})

var prelim=function(event){

	//Make body elements unselectable and unhighlightable
	$('body').css({
		'-moz-user-select':'none',
		'-webkit-user-select': 'none',
                "background": "url('images/ps-grid.png')"
	})

        $('body').attr("unselectable", "on")

	//Precaching Images

	pageElement = document.createElement("div")
        $(pageElement).attr("id", "page")

        $(pageElement).addClass("div")

        $(pageElement).css({
            "position": 'absolute'
        })

        $(document.body).prepend(pageElement)

        //create initial overlay.

        
        disableSelection(document.body)

        var overlay = $("<div></div>")

        $(overlay).attr("id", "overlay")

        $(overlay).css({
            "background": "url('http://col.stc.s-msn.com/br/sc/i/09/4ebdf19a1ce03cce12e11926256422.gif') repeat scroll 0 0 transparent",
            "position": "fixed",
            "width": "100%",
            "height": "100%",
            "z-index": 3
        })



        $("body").append(overlay)
	//Set page height
	//$('#page').height("100%")
	//$('#page').width("100%")

        //$('#page').css("background", "url('http://col.stc.s-msn.com/br/sc/i/09/4ebdf19a1ce03cce12e11926256422.gif') repeat scroll 0 0 transparent")
        //$('#page').css("z-index", "10")
};

$(document).bind('ready', prelim);