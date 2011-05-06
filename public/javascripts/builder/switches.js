switches  = function(id, parent, classes, props, src, css, func){
    this.id=id;
    this.parent=parent;
    this.classes= classes;
    this.src=src;
    this.css = css;
    this.func = func;

    this.init = function(){
        this.elem = document.createElement("div");
        $(this.elem).css({
                        '-moz-user-select':'none',
                        '-webkit-user-select': 'none'
        });

        for(i=0;i<this.classes.length; i++){
                $(this.elem).addClass(this.classes[i])
        }        
    }




}