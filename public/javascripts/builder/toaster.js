var makeToaster=function(){
	toaster=document.createElement('div');
	
	toaster.setAttribute('id', 'toaster')
	
	$(toaster).css({
		position: 'fixed',
		'right': '6px',
		'bottom': '6px',
		'background': '#E1E1E1',
		'border-right': '2px solid #999999',
		'border-bottom': '2px solid #999999'
	});
	document.body.appendChild(toaster);
}

$(document).bind('ready', makeToaster)