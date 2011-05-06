/*
The following code/document/program is the copyrighted work of:
"Xuan Duan", 2010 - 2011
All Rights Reserved.
This document/software/program/code, or any portions of it may not be cited, reproduced or redistributed without express written consent of the Author.
*/

textColor=function(){
	zide.palette.showhide();
        zide.palette.state.intent="fore";
};

$(document).bind('ready', function(){
	$('#textColorButton').bind('click', textColor)
});