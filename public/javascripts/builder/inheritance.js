/*
The following code/document/program is the copyrighted work of:
"Xuan Duan", 2010 - 2011
All Rights Reserved.
This document/software/program/code, or any portions of it may not be cited, reproduced or redistributed without express written consent of the Author.
*/

// Top level Object

var zid = function(type, id, parent, classes, css, dim, state, func){
    this.id= id;
    this.parent=parent;
    this.css = css;
    this.classes = classes;
    this.dim = dim;
    this.func = func;
    this.type = type;
    this.state = state;

    this.init = function(){
        this.elem = document.createElement(this.type);
        $(this.elem).css(this.css)

        $(this.elem).attr("id", this.id);

        for(i=0; i<this.css.length; i++){
            $(this).addClass(this.css[i]);
        }

        $(this.elem).appendTo(this.parent.elem);
    }
}



zid.prototype.showhide=function(){
    if(this.state.visible == true){
        $(this.elem).css("visibility", "hidden")
        this.state.visible = false;
    } else {
        $(this.elem).css("visibility", "visible")
        this.state.visible = true;
    }
}

zid.prototype.unSelectable = function(element){
    $(this.elem).css({
        "-moz-user-select": "-moz-none",
        "-khtml-user-select": "none",
        "-webkit-user-select": "none",
        "-o-user-select": "none",
        "user-select": "none"
    })
}

//Tools Class for bread/butter tools button objects

