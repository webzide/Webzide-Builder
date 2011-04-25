/*
The following code/document/program is the copyrighted work of:
"Xuan Duan", 2010 - 2011
All Rights Reserved.
This document/software/program/code, or any portions of it may not be cited, reproduced or redistributed without express written consent of the Author.
*/

var selectMenu = function(id, parent, classes, css, options, behavior){
    this.id=id;
    this.parent=parent;
    this.classes = classes;
    this.css = css;
    this.options = options;
    this.behavior = behavior;

    this.init = function(){
        this.obj=document.createElement("select");

        $(this.obj).css(this.css);

        var items = this.options.length;

        for(i=0; i<items; i++){
            var option = document.createElement("option");
            option.innerHTML = this.options[i];

            $(option).bind("click", {element: this, family: this.options[i]}, function(event){
                 event.data.element.behavior(event.data.family)
            })

            $(this.obj).append(option);
        }

        $(this.parent).append(this.obj);
    }
}

selectMenu.prototype = new tools();




