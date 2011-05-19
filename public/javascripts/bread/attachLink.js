var attachingLink=function(){
    $('.div').bind('click', function(event){
        var links = document.createElement('a')
        $(links).attr("href", builder.state.linkURL);

        $(links).bind('click', function(event){
            event.preventDefault ? event.preventDefault() : event.returnValue = false;
        })

        if(event.target.parentNode.nodeName == "A"){
            $(event.target).parent().attr("href", builder.state.linkURL);
        } else {
            $(event.target).wrap(links)
        }

        event.stopPropagation();
    })

    $('.div').css('cursor', 'url(../images/cursors/linkCurr.gif), default')

}


$(document).bind('ready', function(){
    $('#attachLink').bind('click', attachingLink);
    $('#attachLink').bind('click', showImageLinkDiv);

    var attachLinkDiv = document.createElement("div");


    var attachLinkInput=document.createElement("input");

    $(attachLinkDiv).attr("id", "attachLinkDiv")

    var linkHeading = document.createElement("div");
    $(linkHeading).text("Link URL:")

    $(linkHeading).appendTo(attachLinkDiv)

    $(attachLinkInput).attr("id", "attachLinkInput");

    $(attachLinkInput).bind("mouseout", function(){
        builder.state.linkURL = $(this).val()
    })

    $(attachLinkInput).appendTo(attachLinkDiv)

    $(attachLinkDiv).css("display", "none")

    $(attachLinkDiv).appendTo("#toaster")
});