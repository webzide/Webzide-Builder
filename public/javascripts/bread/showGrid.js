$(document).bind('ready', function(){
	gridSwitch=0;
	
	$('#showGrid').bind('click', function(event){
		if(gridSwitch==0){
			gridSwitch=1;

                        $('.div').css({
                            "filter":"alpha(opacity=70)",
                            "-moz-opacity":"0.7",
                            "-khtml-opacity": "0.7",
                            "opacity": "0.7"

                        })

			$(document.body).css({
				'background': 'url(../images/zidgrid.gif)',
				'background-repeat': 'no-repeat'
			})
		} else if(gridSwitch==1){
			gridSwitch=0;
			
			$(document.body).css({
				'background': 'none'
			})

                        $('.div').css({
                            "filter":"alpha(opacity=100)",
                            "-moz-opacity":"1",
                            "-khtml-opacity": "1",
                            "opacity": "1"

                        })
		}
	

	});
});