/*
The following code/document/program is the copyrighted work of:
"Xuan Duan", 2010 - 2011
All Rights Reserved.
This document/software/program/code, or any portions of it may not be cited, reproduced or redistributed without express written consent of the Author.
*/

palettes = function(id, type, parent, css, dim, state, func){
    this.id= id;
    this.parent=parent;
    this.css = css;
    this.dim = dim;
    this.func = func;
    this.state = state;

    this.init=function(){

        zidElem = document.createElement(type);
        this.elem = zidElem;

        $(this.elem).css(this.css);

        this.elem.setAttribute("id", "palette")

        $(this.elem).bind('click', function(){
           // alert(window.getSelection());
        })

        $(parent).append(this.elem);


    }
}

palettes.prototype = new zid();

palettes.prototype.fillColors= function(parent){

            var colors=new Array(
                "#FFFFFF", "#EEEEEE", "#FFFF88", "#FF7400", "#CDEB8B", "#6BBA70",
                "#006E2E", "#C3D9FF", "#4096EE", "#356AA0", "#FF0096", "#B02B2C",
                "#000000"
            );

            for(i=0; i<colors.length;i++){


                currentColor=document.createElement('div');

                currentColor.setAttribute("value", colors[i])

                $(currentColor).css({
                    "float": "left",
                    "margin-right": "2px",
                    width: '15px',
                    height: '15px',
                    'border': '1px solid #666666',
                    "background-color": colors[i],
                    'margin-bottom': "2px",
                    'cursor': 'pointer'


                })

                $(currentColor).addClass("colors")

                $(currentColor).attr("unselectable", "on")

                $(currentColor).bind('click', {obj: this}, function(event){
                     var intent = event.data.obj.state.intent;

                     if(navigator.product == 'Gecko'){



                         if(window.getSelection() != ''){

                            switch (intent){
                                case "fore":
                                    document.execCommand("forecolor", false, this.getAttribute("value"));
                                    break;
                                case "back":
                                    document.execCommand("backcolor", false, this.getAttribute("value"));
                                    break;
                                case "hilite":
                                     document.execCommand("hilitecolor", false, this.getAttribute("value"));
                                     break;
                            }
                       
                         }

                     } else {
                         // IE case
                         document.execCommand("forecolor", false, this.getAttribute("value"))
                     }

                     

                     parent.showhide();

                })

                $(parent.elem).append(currentColor);
            }
}

palettes.prototype.changePosn = function(css){
    $(this.elem).css({

    })
}


$(document).bind('ready', function(){
    var paletteButterCSS = {
                    position: 'fixed',
                    "left": $("#butterDiv").offset().left - $(document).scrollLeft(),
                    "bottom": (parseInt($("#butterDiv").css("bottom")) + $("#butterDiv").height() - $(document).scrollTop()),
                    width: 'auto',
                    border: "1px solid #DDDDDD",
                    padding: '2px',
                    "background-color": '#FFFFFF',
                    "visibility": "hidden"
                    };
    builder.palette = new palettes("p2", 'div', document.getElementById("butterDiv"), paletteButterCSS,null,{visible: false, intent: "fore", belongs: "butter"},  null);
    builder.palette.init();
    builder.palette.fillColors(builder.palette);
    builder.palette.unSelectable();

    builder.palette.changePosn(null)
})


