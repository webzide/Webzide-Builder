$(document).bind("ready", function(){
    $.fn.addShadow = function(){
        $(this).each(function(){
            $(this).css({
                'background': 'rgb(240, 235, 226)',
                "border": "1px solid #666666",
                "box-shadow": "5px 5px 10px #000"
            })
        })

    }

    $(".builderDiv").addShadow();
})