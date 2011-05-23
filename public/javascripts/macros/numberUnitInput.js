var numUnitInput = function(id, path, variable,parent, css, units, func){
    this.id = id;
    this.path = path;
    this.variable = variable;
    this.parent = parent;
    this.css = css;
    this.units=units;
    this.func = func;

    this.element = document.createElement("div");

    $(this.element).css(this.css.element)

    this.input = document.createElement("input");

    $(this.input).css(this.css.input)



    this.unit = document.createElement("select");

    $(this.unit).css(this.css.unit)

    for(i=0; i<this.units.length; i++){
        var option = document.createElement("option");
        $(option).text(this.units[i])

        $(option).appendTo(this.unit)
    }

    $(this.unit).bind("change", {obj: this, input: this.input},function(event){
        event.data.obj.path[event.data.obj.variable] = $(event.data.input).val() + $(this).find(":selected").text()

    })

    $(this.input).bind("keyup", {obj: this, unit: this.unit},function(event){
        event.data.obj.path[event.data.obj.variable] = $(event.data.obj.input).val() + $(event.data.unit).find(":selected").text()

    })

    this.apply = document.createElement("button");
    $(this.apply).css(this.css.apply)

    $(this.apply).text("Set")

    $(this.apply).bind("click", {obj: this, input: this.input},function(event){
        event.data.obj.func();
        
    })

    $(this.input).appendTo(this.element);
    $(this.unit).appendTo(this.element);
    $(this.apply).appendTo(this.element);

    $(this.element).appendTo(this.parent)
}


$(document).bind('ready', function(){
    

})
