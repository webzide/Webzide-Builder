

function determineBorder(obj, direction) {
	total = 0;

	$(obj).parents().filter('.div').each(function () {
		total = total + parseInt(document.defaultView.getComputedStyle(this, "").getPropertyValue("border-top-width"));
	})
	total = total +parseInt(document.defaultView.getComputedStyle(obj, "").getPropertyValue("border-top-width"));


	return total;
}
$(document).bind('ready', function(){


    dividerH=function(event){
        var temp = determineBorder(event.target, "top")

        $(event.data.divider).css({
            "position": 'absolute',
            "width": $(event.target).width(),
            'border-top': '1px dotted black',
             top: (event.clientY - determine(event.target, 'top') +  document.body.parentNode.scrollTop) - temp,
            'left': "0px"


        })

        try{
            $(event.data.divider).prependTo(event.target)
        } catch (e){
            
        }


        event.stopPropagation();


        
    }




});

var split = function(event){



                     var bottomDiv = document.createElement("div");

                     $(bottomDiv).addClass('div');

                     

                     $(bottomDiv).css({
                        "position": "absolute",
                        "width": $(this).parent().width(),
                        "top": parseInt($(this).parent().css('top')) + parseInt(event.clientY) - determine(this.parentNode, 'top') + document.body.parentNode.scrollTop + "px",
                        'left': parseInt($(this).parent().css('left')) + document.body.parentNode.scrollLeft,
                        "height": parseInt($(this).parent().height()) - (parseInt(event.clientY) - determine(this.parentNode, 'top')) - document.body.parentNode.scrollTop + "px",
                        "background": builder.state.secondProp["background"],
                        'border-color': builder.state.secondProp["border-color"],
                        'border-style':builder.state.secondProp["border-style"],
                        'border-width':builder.state.secondProp["border-width"]

                     });

                      $(bottomDiv).bind('mousemove', {divider: ddivider},dividerH)

                     $(bottomDiv).prependTo(this.parentNode);

                     var topDiv=document.createElement("div");

                     $(topDiv).addClass('div');

                     $(topDiv).css({
                        "position": "absolute",
                        "width": $(this).parent().width(),
                        "top": $(this).parent().css('top'),
                        'left': $(this).parent().css('left'),
                        "height": parseInt(event.clientY) - determine(this.parentNode, 'top') + document.body.parentNode.scrollTop  -  (parseInt(builder.state.firstProp["border-width"]) *2) + "px",
                        "background": builder.state.firstProp["background"],
                        'border-color': builder.state.firstProp["border-color"],
                        'border-style':builder.state.firstProp["border-style"],
                        'border-width':builder.state.firstProp["border-width"]
                     })

                    $(topDiv).bind('mousemove', {divider: ddivider},dividerH)

                     $(topDiv).prependTo(this.parentNode)

                     $(bottomDiv, topDiv).unwrap()

                     $(this).appendTo(topDiv)
                    
                }

$(document).bind('ready', function(){

    $('#dividerY').bind('click', function(){
                ddivider=document.createElement('div');
		$(document.body).append(ddivider)

                $(ddivider).addClass('divider')


                $('.div').bind('mousemove', {divider: ddivider},dividerH)

                $('.div').bind('mouseenter', {divider: ddivider}, function(event){
                    
                })

                $('.divider').bind('click', split)
    })
})

$(document).bind('ready', function(){
    var firstProp = new propertyBox("firstProp", "b", "c");

    var secondProp = new propertyBox("secondProp", "b", "c")
})
