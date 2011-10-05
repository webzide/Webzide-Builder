var focusSwitch = 0;

$(document).ready(function(){

    $(".bar h4").hover(function(){
      Cufon.replace(this, {	textShadow: '#666 3px 3px'});
      //Cufon.replace('h6,h5,h4,h3,h2,h1');
    },

        function(){
      Cufon.replace(this, {	textShadow: '#000 2px 1px', hover: true	});
      //Cufon.replace('h6,h5,h4,h3,h2,h1');
        }
    )

    $("input.login").focus(function(){

        if(focusSwitch == 0){
        this.value = '';
        focusSwitch = 1
        }

    })
})