/*
The following code/document/program is the copyrighted work of:
"Xuan Duan", 2010 - 2011
All Rights Reserved.
This document/software/program/code, or any portions of it may not be cited, reproduced or redistributed without express written consent of the Author.
*/

member = function(arr, item){
    for(i=0; i<arr.length; i++){
        if(arr[i] == item){
            return true;
        }
    }

    return false;
}

function tools(id, parent, previous,classes, state, src, css, dim, func){
	this.id=id;
	this.parent=parent;
        this.previous = previous;
	this.classes=classes;
	this.state = state;
        this.src=src;
	this.css=css;

	this.dim=dim;
        this.func=func;

        if(this.previous!=null){
            previous.children = {}
        }

	this.init=function(){


		this.elem=document.createElement("div")
		this.elem.setAttribute('id', this.id);
		this.elem.setAttribute('unselectable', 'on')

		$(this.elem).css({
				'-moz-user-select':'none',
				'-webkit-user-select': 'none'
		});

                if(this.classes[1] == "butterButton"){
                    $(this.elem).css({
                        "width": "20px",
                        "height": "20px"
                    })
                }

		for(i=0;i<this.classes.length; i++){
			$(this.elem).addClass(this.classes[i])
		}

		if(this.src!= null){
			this.elem.icon=document.createElement('img');

                        if(this.classes[1]=="butterButton"){
                            if(builder.state.selectedElems.length > 0){
                                this.elem.icon.src='/images/' + this.src;
                            } else {
                                
                                this.elem.icon.src = '/images/butter/disabled/' + disabledIconSrc[this.id] + ".png"

                                
                            }
                        } else {
                            this.elem.icon.src='/images/' + this.src;
                        }

                        
			

                        $(this.elem.icon).attr("unselectable", "on");

			$(this.elem.icon).css({
				'-moz-user-select':'none',
				'-webkit-user-select': 'none'

			});

                        if(this.classes[0]=="tools"){

                            $(this.elem.icon).bind("click", {obj: this},function(event){

                                builder.state.activeTool = event.data.obj.id;
                                builder.methods.switchTool(event.data.obj);

                                builder.methods.toast(event.data.obj.id);
                            })
                        }

                        if(member(this.classes, "switch")){
                            $(this.elem.icon).bind("click", {obj:this},function(event){
                                if(builder.state[event.data.obj.id] == 0){
                                    builder.state[event.data.obj.id] = 1
                                    $(event.data.obj.elem.icon).css({
                                        "border-left": "2px solid black",
                                        "border-top": "2px solid black"
                                    })
                                } else {
                                    builder.state[event.data.obj.id] = 0;
                                    $(event.data.obj.elem.icon).css({
                                        "border": "none"
                                    })
                                }                              


                            })
                        }

                        $(this.elem.icon).hover(
                        function(){
                            $(this).css({
                                "box-shadow":"0px 0px 5px #000",
                                "-webkit-box-shadow":"0px 0px 5px #000",
                                "-moz-box-shadow": "0px 0px 5px #000"
                            })
                        },
                        function(){
                            $(this).css({
                                "box-shadow":"none",
                                "-webkit-box-shadow":"none",
                                "-moz-box-shadow": "none"
                            })
                        })
                      
			this.elem.appendChild(this.elem.icon)
		}

		if(typeof this.parent=='string'){
			document.getElementById(parent).appendChild(this.elem)
		} else{
			this.parent.appendChild(this.elem);
		}

		if(this.css){
			$(this.elem).css(this.css)
		}



		if(this.dim){
                        if(this.dim.colspan){
                            document.getElementById(this.parent).childNodes[0].rows[this.dim.row].cells[this.dim.col].colSpan=this.dim.colspan;
                        }
                        document.getElementById(this.parent).childNodes[0].rows[this.dim.row].cells[this.dim.col].appendChild(this.elem);
		}

                if(this.func){
                    this.func(this);

                }



	};

}


tools.prototype = new zid();

tools.prototype.trigger = function(){
    if(builder.state.borderSwitch == 0){
        $(this.elem.icon).trigger("click")
    }
}