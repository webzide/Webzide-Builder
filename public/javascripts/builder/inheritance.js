// Top level Object

global = {

}

var zid = function(id, type, parent, css, dim, state, func){
    this.id= id;
    this.parent=parent;
    this.css = css;
    this.dim = dim;
    this.func = func;
    this.state = state;
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

