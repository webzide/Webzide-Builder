$.fn.showLegend = function(){



    $(this).each(function(){        
        legend("widthLegend", this, this, 'width' ,null, widthLegendCss, "Width");

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
    $(div).appendTo(parent);
    $(div).text(content)

    $(div).css("right", "0px")
    $(div).css("top", 0 - parseInt(css.height))

    
}

$(document).bind("ready", function(){

    widthLegendCss = {
        "position": "absolute",
        "width": "30px",
        "height": "20px",
        "background": "#FFFFCC",
        "filter":"alpha(opacity=140)",
        "-moz-opacity":"1.4",
        "-khtml-opacity": "1.4",
        "opacity": "1.4"

    }

    


})