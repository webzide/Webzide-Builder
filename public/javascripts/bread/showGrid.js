$(document).bind('ready', function(){
	gridSwitch=0;
	
	$('#showGrid').bind('click', function(event){
		if(gridSwitch==0){
			gridSwitch=1;
			
			$(document.body).css({
				'background': 'url(../images/zidgrid.gif)',
				'background-repeat': 'no-repeat'
			})
		} else if(gridSwitch==1){
			gridSwitch=0;
			
			$(document.body).css({
				'background': 'none'
			})
		}
	

	});
});