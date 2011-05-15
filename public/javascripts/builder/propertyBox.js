var propertyBox = function(id, tool, intent){
    this.id = id;
    this.tool=tool;
    this.intent = intent;

    this.element = document.createElement('div');

    $(this.element).attr("id", this.id);

    $(this.element).css({
        'padding': '5px'
    })

    fieldArr = {"Border Style": "border-style", "Border Width": "border-width", "Border Color": "border-color", "Background": "background"}

    optionsArr = {
        "Border Style": ["dotted", "dashed", "solid", "none"],
        "Border Width": ["1px", "2px", "5px", "10px", "15px"],
        "Border Color": ["black", "red", "green", "blue", "yellow"],
        "Background": ["black", "red", "green", "blue", "yellow"]

}

    for(k in fieldArr){

        borderStyleField = document.createElement("div");

        borderStyleLabel = document.createElement("label")

        $(borderStyleLabel).text(k)

        borderStyleSelect = document.createElement("select")



        for(i=0; i<optionsArr[k].length; i++){
            bordersOption = document.createElement("option");
            $(bordersOption).text(optionsArr[k][i])

            $(bordersOption).appendTo(borderStyleSelect)

        }

        $(borderStyleSelect).bind('change', {option: fieldArr[k], obj: this},function(event){
            builder.state[event.data.obj.id][event.data.option] = $(this).find(":selected").val();
        })

        $(borderStyleLabel).appendTo(borderStyleField);

        $(borderStyleSelect).appendTo(borderStyleField)

        $(borderStyleField).appendTo(this.element)

        }

        $(this.element).appendTo("#toaster")


}

$(document).bind("ready", function(){
    pbox = new propertyBox("propertyBox", "b", "c")
    $(pbox.element).css({
        "display": 'none'
    })
})