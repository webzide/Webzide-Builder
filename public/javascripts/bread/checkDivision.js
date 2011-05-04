    global.showCheckPrompt = function(){
        var onmousestop = function(event){
            var checkPrompt = document.createElement("div");
            $(checkPrompt).css({
                "background": "#FFFFCC",
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

    global.state.activeTool = "handTool"





    //$('.div').bind("mousemove", global.showCheckPrompt());

	$('.div').css({
		'cursor': 'pointer'
	});

        $('.div').bind('click', function(event){
                        $('#propertyWindow').remove();

                        propertyWindow=document.createElement('div');

			$(propertyWindow).attr('id', 'propertyWindow');

			$(propertyWindow).css({
				position: 'absolute',
				width: '100px',
				height: '160px',
				background: 'rgb(255, 255, 225)',
                                visibility: 'visible',
				border: '1px solid black'
			});

			pwHTML='<div style="padding: 6px;">';
			pwHTML+='<b>Properties</b><br/>ID:' + event.target.id;
			pwHTML+='<br/>Left:' + $(event.target).css('left');
			pwHTML+='<br/>Top:' + $(event.target).css('top');
			pwHTML+='<br/>Width:' + $(event.target).width() + 'px';
			pwHTML+= '<br/>Height:' + $(event.target).height() + 'px';
			pwHTML+= '<br/>Background:' + $(event.target).css('background');
			pwHTML+='</div>';

			$(propertyWindow).html(pwHTML)

                        $(propertyWindow).offset({
                            left: event.pageX - 1,
                            top: event.pageY - 1

                        })

			document.body.appendChild(propertyWindow);

                        $(propertyWindow).bind("mouseleave", function(){
                            $('#propertyWindow').remove();

                        })

        });		
};

$(document).bind('ready', function(){
    $('#handTool').bind('click', checkDivision);




});