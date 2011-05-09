var drawImageLink="../../images/bread/imageReplacement.png";

var showImageLinkDiv = function(){

}

$(document).bind('ready', function(){
    drawImageLink="../../images/bread/imageReplacement.png"
    var imageLinkDiv=document.createElement('div');

    var imageLinkText= document.createElement("div")

    $(imageLinkText).text("Image URL:")

    $(imageLinkText).css({
         "margin": "5px"
    })

    $(imageLinkText).appendTo(imageLinkDiv)

    var imageLinkInput=document.createElement('input');
    imageLinkInput.type="text";
    imageLinkInput.length="7"
    imageLinkInput.size = "30"

    $(imageLinkInput).css({
        "margin": "5px"
    })

    $(imageLinkDiv).attr("id", "imageLinkDiv")

    $(imageLinkDiv).css({
        "display": "none"
    })

    $(imageLinkInput).bind("mouseout", function(){
        if(this.value == null || this.value == ""){
            drawImageLink = "../../images/bread/imageReplacement.png";

        } else {
            drawImageLink = this.value;
        }
    });



    $(imageLinkDiv).append(imageLinkInput)


    $('#toaster').append(imageLinkDiv)


    $('#imageInsert').bind('click', {innerElem: true, elemType: "img"},draw);

});