var makeToaster=function(){
	toaster=document.createElement('div');
	
	toaster.setAttribute('id', 'toaster')

        $(toaster).addClass("builderDiv")

	$(toaster).css({
		position: 'fixed',
		'right': '6px',
		'bottom': '6px',
                'width': '50px',
		'background': '#F0EBE2',
                'visibility': 'hidden'

	});
	document.body.appendChild(toaster);
}

$(document).bind('ready', makeToaster)