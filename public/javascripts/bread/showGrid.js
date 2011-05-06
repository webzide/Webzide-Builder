$(document).bind('ready', function(){

	
	$('#showGrid').bind('click', function(event){
    

		if(builder.state.gridSwitch==0){
			builder.state.gridSwitch=1;

                        if (!document.all){

                            $('.div').css({
                                "filter":"alpha(opacity=70)",
                                "-moz-opacity":"0.7",
                                "-khtml-opacity": "0.7",
                                "opacity": "0.7"

                            })
                        }

			$(document.body).css({
				'background': 'url(../images/zidgrid.gif)',
				'background-repeat': 'no-repeat'
			})

		} else if(builder.state.gridSwitch==1){
			builder.state.gridSwitch=0;

			$(document.body).css({
				'background': "url('images/ps-grid.png')"
			})

                        if(!document.all){
                            $('.div').css({
                                "filter":"alpha(opacity=100)",
                                "-moz-opacity":"1",
                                "-khtml-opacity": "1",
                                "opacity": "1"

                            })
                        }
		}
	

	});
});