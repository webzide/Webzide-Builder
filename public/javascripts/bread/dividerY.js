function determineBorder(obj, direction) {
	total = 0;

	$(obj).parents().filter('.div').each(function () {
		total = total + parseInt(document.defaultView.getComputedStyle(this, "").getPropertyValue("border-top-width"));
	})
	total = total +parseInt(document.defaultView.getComputedStyle(obj, "").getPropertyValue("border-top-width"));


	return total;
}

$(document).bind('ready', function(){


    dividerV=function(event){
        var temp = determineBorder(event.target, "left")

        $(event.data.divider).css({
            "position": 'absolute',
            "height": $(event.target).height(),
            'border-left': '1px dotted black',
            'left': (event.clientX - determine(event.target, 'left') +  document.body.parentNode.scrollLeft) - temp,
            'top': "0px"
        })

        try{
            $(event.data.divider).prependTo(event.target)
        } catch (e){

        }
        event.stopPropagation();
    }

});

var splitV = function(event){


                     parentElem = window.getComputedStyle(this.parentNode, null)

                     var rightDiv = document.createElement("div");

                     $(rightDiv).addClass('div');

                     if(builder.state.secondProp["border-style"] == "none"){
                         BottomBorderWidth = 0
                     } else {
                         BottomBorderWidth = parseInt(builder.state.secondProp["border-width"]) * 2
                     }

                     $(rightDiv).css({
                        "position": "absolute",
                        "height": $(this).parent().height() + (parseInt(parentElem.getPropertyValue("border-top-width")) * 2) - (parseInt(builder.state.firstProp["border-width"]) * 2),
                        "left": parseInt($(this).parent().css('left')) + parseInt(event.clientX) - determine(this.parentNode, 'left') + document.body.parentNode.scrollLeft + "px",
                        'top': parseInt($(this).parent().css('top')) + document.body.parentNode.scrollTop,
                        "width": parseInt($(this).parent().width())+ parseInt(parentElem.getPropertyValue("border-left-width")) + parseInt(parentElem.getPropertyValue("border-right-width")) - BottomBorderWidth - (parseInt(event.clientX) - determine(this.parentNode, 'left'))  - document.body.parentNode.scrollLeft + "px",
                        "background": builder.state.secondProp["background"],
                        'border-color': builder.state.secondProp["border-color"],
                        'border-style':builder.state.secondProp["border-style"],
                        'border-width':builder.state.secondProp["border-width"]

                     });



                      $(rightDiv).bind('mousemove', {divider: ddivider},dividerV)

                     $(rightDiv).prependTo(this.parentNode);

                     var leftDiv=document.createElement("div");

                     $(leftDiv).addClass('div');

                     if(builder.state.firstProp["border-style"] == "none"){
                         topBorderWidth = 0
                     } else {
                         topBorderWidth = parseInt(builder.state.firstProp["border-width"]) * 2
                     }

                     $(leftDiv).css({
                        "position": "absolute",
                        "height": $(this).parent().height() + (parseInt(parentElem.getPropertyValue("border-top-width")) * 2) - (parseInt(builder.state.firstProp["border-width"]) * 2),
                        "top": $(this).parent().css('top'),
                        'left': $(this).parent().css('left'),
                        "width": parseInt(event.clientX) - topBorderWidth - determine(this.parentNode, 'left') + document.body.parentNode.scrollLeft  + "px",
                        "background": builder.state.firstProp["background"],
                        'border-color': builder.state.firstProp["border-color"],
                        'border-style':builder.state.firstProp["border-style"],
                        'border-width':builder.state.firstProp["border-width"]
                     })

                    $(leftDiv).bind('mousemove', {divider: ddivider},dividerV)

                     $(leftDiv).prependTo(this.parentNode)

                     $(rightDiv, leftDiv).unwrap()

                     $(this).appendTo(leftDiv)

                }

$(document).bind('ready', function(){

    $('#dividerX').bind('click', function(){
                ddivider=document.createElement('div');
		$(document.body).append(ddivider)

                $(ddivider).addClass('divider')


                $('.div').bind('mousemove', {divider: ddivider},dividerV)

                $('.div').bind('mouseenter', {divider: ddivider}, function(event){

                })

                $('.divider').bind('click', splitV)
    })
})
