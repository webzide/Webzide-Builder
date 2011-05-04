$.fn.showLegend = function(){



    $(this).each(function(){        
        legend("widthLegend", this, this, 'width' ,null, widthLegendCss, "Width:");
        legend("heightLegend", this, this, 'height' ,null, widthLegendCss, "Height:");

    })
    



}

$.fn.al = function(){

}

var legend = function(id, parent, intent, prop, classes, css, content){
    this.id=id;

    this.intent = intent;
    this.prop = prop;
    this.classes= classes;
    this.css = css;
    this.content = content;

    var div = document.createElement("div");
    $(div).css(css);

    $(div).attr("id", prop + "Box")

    $(div).text(content)

    $(div).addClass("legendBox")

    

    if (prop == "width"){
        div.widthLegend = document.createElement("span");
        $(div.widthLegend).attr("id", id)
        $(div.widthLegend).text($(parent).width())

        $(div.widthLegend).appendTo(div)

    } else if (prop == "height"){
         div.heightLegend = document.createElement("span");
        $(div.heightLegend).attr("id", id)
        $(div.heightLegend).text($(parent).height())

        $(div.heightLegend).appendTo(div)

    }

    $(div).appendTo(parent)

    $(div).css({
        "font-size": "8pt",
        "border": "1px solid #555555"
    })

    

    if (prop == "width"){
        if(div.currentStyle){
            div.divHeight =  16
            div.divWidth = 49
        } else {

            div.divHeight = document.defaultView.getComputedStyle(div,null).getPropertyValue("height");
            div.divWidth = document.defaultView.getComputedStyle(div, null).getPropertyValue("width");
        }


        $(div).css("right", 0 - parseInt(div.divWidth) - 4)
        $(div).css("top", 0)

    } else if( prop == "height"){
        if(div.currentStyle){
            div.divHeight =  16
            div.divWidth = 53
        } else {

            div.divHeight = document.defaultView.getComputedStyle(div,null).getPropertyValue("height");
            div.divWidth = document.defaultView.getComputedStyle(div, null).getPropertyValue("width")
        }

        $(div).css("right", 0)
        $(div).css("bottom", 0 - parseInt(div.divHeight) - 4)
    }

   
    
}

$(document).bind("ready", function(){

    widthLegendCss = {
        "position": "absolute",

        "background": "#FFFFCC",
        "filter":"alpha(opacity=140)",
        "-moz-opacity":"1.4",
        "-khtml-opacity": "1.4",
        "opacity": "1.4"

    }

    


})