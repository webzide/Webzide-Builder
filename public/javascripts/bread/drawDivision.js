$(document).bind('ready', function(){
    $('#drawDiv').bind('click', {innerElem: false},draw);
    $('#drawDiv').bind('click', function(){
        

        builder.bread.showBoundaries.trigger();
        

    });
});

boundariesArray = {
    "grooveBorders": "../images/toaster/solid.gif",
    "dashedBorders": "../images/toaster/dashed.gif",
    "dottedBorders": "../images/toaster/dotted.gif"
}

$(document).bind("ready", function(){
    drawToaster = document.createElement("div");
    $(drawToaster).css({
        "width": "50px",
        "height": "auto",
        "display": 'none'
    })

    $(drawToaster).attr("id", "boundariesStyle")

    for(i in boundariesArray){
        var currBorder= document.createElement('div');
        currBorder.icon = new Image();
        currBorder.icon.src= boundariesArray[i];

        $(currBorder).attr("id", i)

        $(currBorder).css({
                 'width': 'auto',
                 "height": 'auto'
        })



        $(currBorder.icon).appendTo(currBorder)

        $(currBorder).appendTo(drawToaster);

        $(currBorder).bind("click", {id: i},function(event){

            builder.state.boundaryStyle = event.data.id;



            for(k in boundariesArray){
                $("#" + k).children("img").css({
                    "border": "none"
                })
            }

            $(this).children("img").css({
                                        "border-left": "2px solid black",
                                        "border-top": "2px solid black"
            })


            if(event.data.id == "grooveBorders"){                


                boundariesCSS.innerHTML='.div{border: 1px ridge black;} #page{border: none}'
            } else if (event.data.id == "dashedBorders"){
                boundariesCSS.innerHTML='.div{border: 1px dashed #666666;} #page{border: none}'
            } else {
                boundariesCSS.innerHTML='.div{border: 1px dotted #555555;} #page{border: none}'
            }
        })

    }
    $(drawToaster).appendTo("#toaster")
})