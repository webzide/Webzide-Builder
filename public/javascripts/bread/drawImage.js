var drawImageLink="../../images/bread/imageReplacement.png";

var showImageLinkDiv = function(){
    drawImageLink="../../images/bread/imageReplacement.png"
    var imageLinkDiv=document.createElement('div');
    var imageLinkInput=document.createElement('input');
    imageLinkInput.type="text";
    imageLinkInput.length="7"
    imageLinkInput.size = "30"

    $(imageLinkInput).bind("mouseout", function(){
        if(this.value == null || this.value == ""){
            drawImageLink = "../../images/bread/imageReplacement.png";

        } else {
            drawImageLink = this.value;
        }
    });

    

    $(imageLinkDiv).append(imageLinkInput)

    $('#toaster').empty()
    $('#toaster').append(imageLinkDiv)
}

$(document).bind('ready', function(){
    $('#imageInsert').bind('click', {innerElem: true, elemType: "img"},draw);
    $('#imageInsert').bind('click', showImageLinkDiv);
});