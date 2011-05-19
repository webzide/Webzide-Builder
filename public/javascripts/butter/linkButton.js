$(document).bind("ready", function(){


    $("#linkButton").bind("click", function(event){
        
        document.execCommand("createLink", null, "http://www.google.com")
    })

})


