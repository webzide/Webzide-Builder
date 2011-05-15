/*
The following code/document/program is the copyrighted work of:
"Xuan Duan", 2010 - 2011
All Rights Reserved.
This document/software/program/code, or any portions of it may not be cited, reproduced or redistributed without express written consent of the Author.
*/

//---------------------------------------------------------------	

//Function for Making dimensions in an element


zid.prototype.makeDimensions = function(obj, dimType, rows, cols, styled){
	var dim=document.createElement(dimType);
	dim.setAttribute('id', obj.id + '-Table');
	this.style=styled;

	if(dimType=='table'){
		tableRows=[];
		for(r=0;r<rows;r++){
			tableRows[r]=dim.insertRow(-1);
			tableRows[r].setAttribute('row', r);
			$(tableRows[r]).height(this.style.rowHeight);


			tableRows['cols']=[];
			for(c=0;c<cols;c++){
				cells=tableRows[r].insertCell(-1);
				cells.setAttribute('col', c);
				$(cells).width(this.style.cellWidth);

			}

		}

		obj.appendChild(dim);
	}

}
//---------------------------------------------------------------

//Function determining the absolute position of element's parents
function determine(obj, direction) {
	total = 0;
	
	$(obj).parents().filter('.div').each(function () {
		total = total + parseInt($(this).css(direction));
	})
	total = total + parseInt($(obj).css(direction));

	
	return total;
}
//-----------------------------------------------------------------	
	
//Function determining the borders width to fix the margin of error on the Draw objects	
function loopBorder(obj){
	loop=-1;

	$(obj).parents().filter('.div').each(function(){
		loop+=1;
	});
	
	return loop;
}
//----------------------------------------------------------------------

//Function of webzide Drag and Draw


var draw_mousedown=function(event){

    event.preventDefault ? event.preventDefault() : event.returnValue = false;

    $(event.target).bind('selectstart', function(){
        return false;
    });

    if(event.target.nodeName == 'DIV'){
        curr = event.target;
    } else {
        curr = $(event.target).parents().filter('.div').get(0);
    }

    startX = event.clientX; // starting X
    startY = event.clientY; // starting Y

    div = document.createElement("div");

    $(div).css({
        position: 'absolute',
        left: (event.clientX - determine(curr, 'left') + document.body.parentNode.scrollLeft) + 'px',
        top: (event.clientY - determine(curr, 'top') +  document.body.parentNode.scrollTop) + 'px',
        'border-color': builder.state.propertyBox["border-color"],
        'border-style':builder.state.propertyBox["border-style"],
        'border-width':builder.state.propertyBox["border-width"],
        "background": builder.state.propertyBox["background"]
    });

    $(div).addClass('div');

    if(event.data.innerElem == true){
        var innerElem = document.createElement(event.data.elemType);

        if(event.data.elemType == 'span'){
            innerElem.innerHTML = "Insert Text Here"
        }

        if(event.data.elemType == 'img'){
            innerElem.src = drawImageLink;
          $(innerElem).css({


        })
            
        }



        $(div).append(innerElem);
    }

    $('.div').bind('mousemove', event.data,function (event) {

        var endX = event.clientX;
        var endY = event.clientY;

        difX = (endX - startX);
        difY = (endY - startY);

       if ((difX || difY) > 0){
            $(div).css({
                width: (difX - (borderwidth * 2) - loopBorder(curr)) + "px",
                height: ((difY - (borderwidth * 2)) - loopBorder(curr)) + "px"
            });
            curr.appendChild(div);

                if(event.data.innerElem == true){
                    

                    if(event.data.elemType == "img"){

                       

                        $(innerElem).css({
                            width: (difX - (borderwidth * 2) - loopBorder(curr)) + "px",
                            height: ((difY - (borderwidth * 2)) - loopBorder(curr)) + "px"
                        });
                    }
                    if(event.data.elemType == "span"){
                        $(innerElem).css("font-size", ((difX - (borderwidth * 2) - loopBorder(curr)) + ((difY - (borderwidth * 2)) - loopBorder(curr))) / 17 + "pt");
                        $(innerElem).css('padding', '0')
                    }


                }

       }



    });

    $('.div').bind('mouseup', function() {
        $('.div').unbind('mousemove');
    });

    event.stopPropagation();
}







var draw=function(event){

    $("#toaster").css("visibility", 'visible')

    $('.div').addClass('.DIV')
    $('.div, span').css('cursor', 'crosshair');

    borderwidth=1;

    if(event.data.elemType != 'img'){
    boundariesCSS.disabled=false;
    }

    
    $('.div').bind('mousedown', event.data, draw_mousedown);
}

