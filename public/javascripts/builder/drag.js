var draggable ={
            "init": function(obj){
            $(obj).bind("mousedown", function(event){

                    draggable.startLeft = $(obj).css('left');
                    draggable.startTop = $(obj).css('top');



                    draggable.startX = event.clientX;
                    draggable.startY= event.clientY;

                    $(document).bind('mousemove', {obj: obj}, draggable.dragging)

                    $(document).bind('mouseup', {obj: obj}, draggable.undrag)

                    builder.event.drag = 1;

                    return false;

            })
            },
            "dragging": function(event){

                       $(event.data.obj).css("left", (parseInt(draggable.startLeft) + (event.clientX - draggable.startX)) + 'px')
                       $(event.data.obj).css("top", (parseInt(draggable.startTop) + (event.clientY - draggable.startY)) + 'px')

                       //if(builder.state.legendSwitch == 1){
                       // $(event.data.obj).children("#widthBox").children("#widthLegend").text((parseInt(draggable.startLeft) + (event.clientX - draggable.startX)) + 'px');
                       //}

                      

                       return false;

                    },
            "undrag" :  function(event){
                            $(document).unbind('mousemove', draggable.dragging);
                            builder.event.drag = 0;
                    },
            "startX": null,
            "startY": null,
            "startLeft": null,
            "startTop": null


}


$.fn.drag= function(){
        draggable.init(this)
}

$(document).bind("ready", function(){


})