$(document).ready(function(){

	$('#update').bind('click', function(){
		$('.div').removeClass('ui-draggable');
		$('span').removeClass('ui-draggable');
		$('.div').removeAttr('contenteditable')
		$('span').removeAttr('contenteditable');
		$('*').css('cursor', 'default');
		document.getElementById('zide_code').value = document.getElementById('page').outerHTML;

                $('.rightResize').remove();
                $('.verticalResize').remove();
                $('.cornerResize').remove();
	});

});