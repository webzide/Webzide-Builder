builder.del = false;

var deleteDivision=function(){

    $('.div').not("#page").each(function(){
            $(this).bind('click', function(event){


                    action = function(){
                       if(builder.del == false){
                            return function(){                               
                                if(event.target.id!='page'){
                                    if(event.target.nodeName != "DIV"){
                                        $(event.target).parent(".div").remove();
                                    } else {
                                        $(event.target).remove();
                                    }
                                }
                            }
                        } else {

                        }
                    }();


                    var deleteConfirm = new confirmBox("deleteConfirm", document.body, "deleteConfirm", action)
                    deleteConfirm.centerX();
                    deleteConfirm.centerY();

                    event.stopPropagation();
            })
    });
	
    $('.div').not('#page').css('cursor', 'url(../images/cursors/cursorDelete.gif), default')
}

$(document).bind('ready', function(){
	$('#divisionDelete').bind('click', deleteDivision)
	
});