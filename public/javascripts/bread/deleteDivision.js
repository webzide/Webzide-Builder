var deleteDivision=function(){

    $('.sel').remove();
    $('.div').unbind();
    $('span').unbind();



    $('.div').each(function(){
            $(this).bind('click', function(event){
                    if(event.target.id!='page'){
                            $(event.target).remove();
                    }
            })
    });
	
    $('.div').not('#page').css('cursor', 'url(../images/cursors/cursorDelete.cur), default')
}

$(document).bind('ready', function(){
	$('#divisionDelete').bind('click', deleteDivision)
	
});