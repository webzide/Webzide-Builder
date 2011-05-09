//type, id, parent, classes, css, dim, state, func


$(document).bind('ready', function(){

    toasterCss= {
		"position": 'fixed',
		'right': '6px',
		'bottom': '6px',
                'width': 'auto',
		'background': '#F0EBE2'

	}

    builder.divisions.toaster = {}

    builder.divisions.toaster.object = new zid("div", "toaster", "body", ["builderDiv", "zidebuilder"], toasterCss, null, null, null)

    builder.divisions.toaster.object.init();
})