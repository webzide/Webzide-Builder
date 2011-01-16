			$(document).bind('ready', function(){
				dojo.require("dijit.ColorPalette");
				dojo.addOnLoad(function() {
					var myPalette = new dijit.ColorPalette({
						palette: "7x10",
						onChange: function(val) {
							alert(val);
						}
					},
					"dijitColorPalette");
				});
				
				paletteDiv=document.createElement('div');
				$(paletteDiv).addClass('panel')
				
				dijitColorPalette=document.createElement('div');
				$(dijitColorPalette).attr('id', 'dijitColorPalette');

				$(paletteDiv).append(dijitColorPalette);
				
				$('#toaster').append(paletteDiv);
				
				$('#divisionBackground').bind('click', function(){
				    $('.sel').remove();
    				$('.div').unbind();
    				$('span').unbind();	
					
					
  					$('.div').bind('click', function(event){
					
					
    				  $(event.target).css(
    				    'background-color', paletteColor
    				  )
    				});
	
				});
				
			});