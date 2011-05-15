/*
The following code/document/program is the copyrighted work of:
"Xuan Duan", 2010 - 2011
All Rights Reserved.
This document/software/program/code, or any portions of it may not be cited, reproduced or redistributed without express written consent of the Author.
*/



builder.methods.toggleBoundaries=function(){

        $('.div').each(function(){
            boundariesDiv = document.createElement('div');

            $(boundariesDiv).css({
                'position': 'absolute',

                "width": $(this).width(),


                "height": $(this).height(),
                "border": "1px dotted red"
            })

            $(boundariesDiv).addClass("boundaries")

            $(this).prepend(boundariesDiv)


        })



}



$(document).bind('ready', function(){
	$('#borderSwitch').bind('click', builder.methods.toggleBoundaries)



});