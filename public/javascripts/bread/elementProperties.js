var applyProperties=function(){
    if($('#left').val()){
        $(currentElement).css('left', parseInt($('#left').val()));
    }
    if($('#top').val()){
        $(currentElement).css('top', parseInt($('#top').val()));
    }
    if($('#width').val()){
        $(currentElement).css('width', parseInt($('#width').val()));
    }
    if($('#height').val()){
        $(currentElement).css('height', parseInt($('#height').val()));
    }
    if($('#bgcolor').val()){
        $(currentElement).css('background-color', $('#bgcolor').val());
    }
    if($('#textcolor').val()){
        $(currentElement).css('color', $('#textcolor').val());
    }
    if($('#border-top-style').val()){
        $(currentElement).css('border-style', $('#border-top-style').val());
    }
        if($('#border-top-color').val()){
        $(currentElement).css('border-color', $('#border-top-color').val());
    }
        if($('#border-top-thickness').val()){
        $(currentElement).css('border-width', parseInt($('#border-top-thickness').val()));
    }


    $('#dialogModal').remove();
}

var insertElement=function(){
    if(currentElement != null){
       
    
	var dialogModal=document.createElement('div');
	dialogModal.setAttribute('id', 'dialogModal')

	$(dialogModal).css({
	   position:'fixed',
	   width: '250px',
	   height: '300px',
	   left: '20%',
	   top: '50px',
	   'background-color': '#DDDDDD',
	   border: '1px solid black'
	});

        var topbar=document.createElement('div');
        $(topbar).css({
            height: "15px",
            width: "100%",
            "background-color": "#000000"
        })
        
        var closeButton=new Image();
        closeButton.src="../images/bread/closeButton.gif";

        $(closeButton).css({
            'float': 'right'
        })

        $(closeButton).addClass('closeButton')


        topbar.appendChild(closeButton);

        $(dialogModal).append($(topbar));
        var dSection="<div class='dsection'>"
        
        dSection+="<label>Left:</label>"
        dSection+="<input type='text' id='left' size='5' />"
        dSection+="<label>Top:</label>"
        dSection+="<input type='text' id='top' size='5' />"
        dSection+="<br />";
        dSection+="<label>Width:</label>"
        dSection+="<input type='text' id='width' size='5' />"
        dSection+="<label>Height:</label>"
        dSection+="<input type='text' id='height' size='5' />"
        dSection+="<br />";
        dSection+="<label>Background Color:</label>"
        dSection+="<input type='text' id='bgcolor' size='8' />"
        dSection+="<br />";
        dSection+="<label>Text Color:</label>"
        dSection+="<input type='text' id='textcolor' size='8' />"
        dSection+="<br />";
        dSection+="<label>Border Style:</label>"
        dSection+="<input type='text' id='border-top-style' size='10' />"
        dSection+="<br />";
        dSection+="<label>Border Thickness:</label>"
        dSection+="<input type='text' id='border-top-thickness' size='10' />"
        dSection+="<br />";
        dSection+="<label>Border Color:</label>"
        dSection+="<input type='text' id='border-top-color' size='10' />"
        dSection+="<br /><br />"
        dSection+="<input type='button' id='applyProperties' value='Apply Changes'>"

        dialogModal.innerHTML+=dSection;

	document.body.appendChild(dialogModal);

        $('.closeButton').bind('click', function(){
            $('#dialogModal').remove();
        })

	$('#createElement').bind('click', function(){
		$('#dialogModal').remove();
	});

        $('#applyProperties').bind('click', applyProperties)

    } else {
        alert("Please Use the Select Tool to Select a Element")
    }
}


$(document).bind('ready', function(){
	$('#elementProperties').bind('click', insertElement);
});