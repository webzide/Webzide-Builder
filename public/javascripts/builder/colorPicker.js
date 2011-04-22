var colorSwitch=0;
var colorVar;

var colorPicker = function(data){
        if(colorSwitch==0){
            //switch it back
            colorSwitch=1;

            var colors=new Array(
                "#FFFFFF", "#EEEEEE", "#FFFF88", "#FF7400", "#CDEB8B", "#6BBA70",
                "#006E2E", "#C3D9FF", "#4096EE", "#356AA0", "#FF0096", "#B02B2C",
                "#000000"
            );

            var paletteBox=document.createElement('div');
            $(paletteBox).addClass('paletteBox');

            if(data.style == "butter"){
                elemTop=document.body.clientHeight - $("#textColorButton").offset().top + $(document).scrollTop();

                $(paletteBox).css({
                    position: 'fixed',
                    "left": $("#butterDiv").offset().left - $(document).scrollLeft(),
                    bottom: elemTop,
                    width: 'auto',
                    border: "1px solid #DDDDDD",
                    padding: '2px',
                    "background-color": '#FFFFFF'
                })
            } else {

                elemRight=document.body.clientWidth - $("#divBackground").offset().left + $(document).scrollLeft();

                $(paletteBox).css({
                    position: 'fixed',
                    "right": elemRight,
                    top: $("#divBackground").offset().top - $(document).scrollTop(),
                    width: 'auto',
                    border: "1px solid #DDDDDD",
                    padding: '2px',
                    "background-color": '#FFFFFF'
                })
            }
            var currentColor;

            for(i=0; i<colors.length;i++){


                currentColor=document.createElement('div');

                if(data.style == "butter"){
                   $(currentColor).css({
                       "float": "left",
                       "margin-right": "2px"
                   })
                }

                $(currentColor).css({
                    width: '15px',
                    height: '15px',
                    'border': '1px solid #666666',
                    "background-color": colors[i],
                    'margin-bottom': "2px",
                    'cursor': 'pointer'

                })

                $(currentColor).bind('click', function(){
                    colorVar=$(this).css('background-color')

                    if(data.type == "text"){
                        $('.selectedElem').css('color', colorVar);

                      

                       

                        $(".paletteBox").remove();
                    } else if(data.type == "back") {
                        $('.selectedElem').parent().css('background-color', colorVar);
                        alert(colorVar)
                    }

                    $('.paletteBox').remove();
                    colorSwitch=0;
                })

                $(paletteBox).append(currentColor);
            }

            $(document.body).append(paletteBox);

        } else {
            colorSwitch=0;
            $('.paletteBox').remove();
        }

        $(".div").css('cursor', 'url(../images/cursors/bucket.gif), pointer')

    }
