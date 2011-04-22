/*
The following code/document/program is the copyrighted work of:
"Xuan Duan", 2010 - 2011
All Rights Reserved.
This document/software/program/code, or any portions of it may not be cited, reproduced or redistributed without express written consent of the Author.
*/

var HiLiteColor=function(){
	global.palette.showhide();
        global.palette.state.intent="hilite";
};

$(document).bind('ready', function(){
	$('#HiLiteButton').bind('click', HiLiteColor);
});

