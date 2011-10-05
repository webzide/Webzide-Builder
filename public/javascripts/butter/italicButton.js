$(document).bind('ready', function(){
   $('#italicButton').bind('click', function(event){
      
	  if($('.sel').parent().css('font-style')=='italic'){
		$('.sel').parent().css('font-style', 'normal')
	  } else{
		$('.sel').parent().css('font-style', 'italic')
	  }
	  
                var range = window.getSelection().getRangeAt(0);
		temp = range.extractContents()

		for(i=0; i< temp.childNodes.length; i++){
			if(temp.childNodes[i].nodeType == 3){
				var container = document.createElement("span");
				var tNode = temp.childNodes[i].cloneNode(true)
				container.appendChild(tNode);
				$(container).css("font-style", "italic");
				temp.replaceChild(container, temp.childNodes[i]);
			} else if (temp.childNodes[i].nodeType == 1){
					if(temp.childNodes[i].nodeName == "SPAN"){
						$(temp.childNodes[i]).css("font-style", "italic");
					}
			}
		}


		range.insertNode(temp);
                builder.state.caret = 1;
   });
});