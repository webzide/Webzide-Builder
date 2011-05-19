    builder.showCheckPrompt = function(){
        var onmousestop = function(event){
            var checkPrompt = document.createElement("div");
            $(checkPrompt).css({
                "background": "#E6E6E6",
                "position": "absolute",
                "left": event.clientX,
                "top": parseInt(event.clientY) - 20,
                "border": "1px solid black"
            })

            $(checkPrompt).addClass("checkPrompt")

            $(checkPrompt).text("Click on the Element Show Properties")

            $("body").append(checkPrompt)
        }

        var threat;

        return function(event){
            $(".checkPrompt").remove();
            clearTimeout(threat);



            threat = setTimeout(function(){
                onmousestop(event);
            }, 1000)
        }
    }

checkDivision=function(){

    builder.state.activeTool = "handTool"

    //$('.div').bind("mousemove", builder.showCheckPrompt());

	$('.div').css({
		'cursor': 'pointer'
	});

        $('.div').bind('click', function(event){
                        $('#propertyWindow').remove();

                        propertyWindow=document.createElement('div');

			$(propertyWindow).attr('id', 'showPropertyWindow');

			$(propertyWindow).css({
				position: 'absolute',
				width: 'auto',
				height: 'auto',
				background: '#E6E6E6',
                                visibility: 'visible'
			});

                        var topbar = document.createElement("div");

                        $(topbar).css({
                            "background": "black",
                            "color": "white"
                        })

                        $(topbar).text("Element Properties")

                        $(topbar).appendTo(propertyWindow)


                        $(propertyWindow).offset({
                            left: event.pageX,
                            top: event.pageY

                        })

                        var contentBar = document.createElement("div");

                        var propertiesTab = document.createElement("table");

                        $(propertiesTab).css({
                            "border-collapse": "collapse",
                            "padding": "3px"
                        })

                        var propsObj = {
                            "left": "Left: ",
                            "top": "Top: ",
                            "width": "Width: ",
                            "height": "Height: ",
                            "background-color": "Background: ",
                            "border-left-style": "Border Style:",
                            "border-left-width": "Border Width:",
                            "border-left-color": "Border Color: "

                        };

                        for(p in propsObj){
                            var tr = document.createElement("tr");

                            var td1 = document.createElement("td");

                            $(td1).text(propsObj[p]);

                            $(td1).appendTo(tr);

                            var td2 = document.createElement("td");

                            $(td2).text($(event.target).css(p))

                            $(td1).css({
                                "border": "1px solid black",
                                "padding": "2px",
                                "font-weight": "bold"
                            })

                            $(td2).css({
                                "border": "1px solid black",
                                "padding": "2px"
                            })

                            $(td2).appendTo(tr);

                            $(tr).appendTo(propertiesTab);


                        }

                        $(propertiesTab).appendTo(propertyWindow);


			document.body.appendChild(propertyWindow);

                        $('.div').bind("mousemove", function(){
                            $('#showPropertyWindow').remove();

                        })

                        event.stopPropagation()

        });		
};

$(document).bind('ready', function(){
    $('#handTool').bind('click', checkDivision);




});