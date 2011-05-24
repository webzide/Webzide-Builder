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
        this.element=document.createElement("select");

        $(this.element).css(this.css);

        $(this.element).attr("id", this.id);

        var items = this.options.length;

        for(i=0; i<items; i++){
            var option = document.createElement("option");
            option.innerHTML = this.options[i];


            $(this.element).append(option);
        }

            $(this.element).bind("change", {element: this}, function(event){

                fal = $(this).find(":selected").text()


                 event.data.element.behavior(fal)
            })

        $(this.parent).append(this.element);
    }
}

selectMenu.prototype = new tools();




