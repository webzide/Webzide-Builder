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

var fontFamiliesArray=new Array();
fontFamiliesArray[0] = "Arial";
fontFamiliesArray[1] = "Arial Black";
fontFamiliesArray[2] = "Comic Sans MS";
fontFamiliesArray[3] = "Courier New";
fontFamiliesArray[4] = "Georgia";
fontFamiliesArray[5] = "Impact";
fontFamiliesArray[6] = "Times New Roman";
fontFamiliesArray[7] = "Trebuchet MS";
fontFamiliesArray[8] = "Verdana";

var changeFontFamily = function(family){
   document.execCommand("fontname", false, family);
}

$(document).bind("ready", function(){
    var fontFamilyButton = new selectMenu("kobe", "#butterDiv", null, {"margin": "0"}, fontFamiliesArray, changeFontFamily);

    fontFamilyButton.init()
})


