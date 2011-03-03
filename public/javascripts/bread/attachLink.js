var attachingLink=function(){
    $('.div').bind('click', function(event){
        var links = document.createElement('a')
        $(links).attr("href", drawImageLink);

        $(links).bind('click', function(event){
            event.preventDefault ? event.preventDefault() : event.returnValue = false;
        })

        if(event.target.parentNode.nodeName == "A"){
            $(event.target).parent().attr("href", drawImageLink);
        } else {
            $(event.target).wrap(links)
        }

        $(event).stopPropagation();
    })

    $('.div').css('cursor', "pointer")

}


$(document).bind('ready', function(){
    $('#attachLink').bind('click', attachingLink);
    $('#attachLink').bind('click', showImageLinkDiv);

});