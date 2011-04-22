
var fontsizeFunc = function(elem){
                        
    var sizeArray = [8, 10, 12 ,15, 18, 20, 25, 30, 35, 40, 50];

    for(i=0; i<sizeArray.length; i++){
                     cur = document.createElement("option")

                     cur.innerHTML = sizeArray[i];
                     cur.innerHTML += 'pt';

                     $(cur).bind('click', function(){
                         $('.selectedElem span').css('font-size', this.innerHTML);
                     })

                     elem.obj.appendChild(cur);




    }
    

			
}
