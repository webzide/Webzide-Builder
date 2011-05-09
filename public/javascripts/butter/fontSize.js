/*
The following code/document/program is the copyrighted work of:
"Xuan Duan", 2010 - 2011
All Rights Reserved.
This document/software/program/code, or any portions of it may not be cited, reproduced or redistributed without express written consent of the Author.
*/

var fontSizeArray = ["8pt", "10pt", "12pt" ,"15pt", "18pt", "20pt", "25pt", "30pt", "35pt", "40pt", "50pt"];

changeFontSize = function(size){

$('.selectedElem span').css('font-size', size);

document.execCommand("fontsize", false, size);
    


}

var fontsizeFunc = function(obj){
                        
    var sizeArray = [8, 10, 12 ,15, 18, 20, 25, 30, 35, 40, 50];

    for(i=0; i<sizeArray.length; i++){
                     cur = document.createElement("option")

                     cur.innerHTML = sizeArray[i];
                     cur.innerHTML += 'pt';

                     $(cur).bind('click', function(){
                         $('.selectedElem span').css('font-size', this.innerHTML);
                     })

                     obj.elem.appendChild(cur);

    }
    

			
}
