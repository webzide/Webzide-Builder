/*
The following code/document/program is the copyrighted work of:
"Xuan Duan", 2010 - 2011
All Rights Reserved.
This document/software/program/code, or any portions of it may not be cited, reproduced or redistributed without express written consent of the Author.
*/

var backColor=function(){
	builder.palette.showhide();
        builder.palette.state.intent="back";
};

$(document).bind('ready', function(){
	$('#backColorButton').bind('click', backColor);
});

