var deleteDivision=function(){

    


    $('.div').each(function(){
            $(this).bind('click', function(event){
                    if(event.target.id!='page'){
                        if(event.target.nodeName != "DIV"){
                            $(event.target).parent(".div").remove();
                        } else {
                            $(event.target).remove();
                        }
                    }
            })
    });
	
    $('.div').not('#page').css('cursor', 'url(../images/cursors/cursorDelete.cur), default')
}

$(document).bind('ready', function(){
	$('#divisionDelete').bind('click', deleteDivision)
	
});