/*
The following code/document/program is the copyrighted work of:
"Xuan Duan", 2010 - 2011
All Rights Reserved.
This document/software/program/code, or any portions of it may not be cited, reproduced or redistributed without express written consent of the Author.
*/

function tools(type, id, parent, classes, src, css, dim, func){
	this.id=id;
	this.type=type;
	this.parent=parent;
	this.classes=classes;
	this.src=src;
	this.css=css;
	this.dim=dim;
        this.func=func;

	this.init=function(){


		this.obj=document.createElement(this.type)
		this.obj.setAttribute('id', this.id);
		this.obj.setAttribute('unselectable', 'on')

		$(this.obj).css({
				'-moz-user-select':'none',
				'-webkit-user-select': 'none'
		});

		for(i=0;i<this.classes.length; i++){
			$(this.obj).addClass(this.classes[i])
		}

		if(this.src!= null){
			this.obj.icon=document.createElement('img');
			this.obj.icon.src='/images/' + this.src;

			$(this.obj.icon).css({
				'-moz-user-select':'none',
				'-webkit-user-select': 'none'
			});

			this.obj.icon.setAttribute('unselectable', 'on')
			this.obj.appendChild(this.obj.icon)
		}

		if(typeof this.parent=='string'){
			document.getElementById(parent).appendChild(this.obj)
		} else{
			this.parent.appendChild(this.obj);
		}

		if(this.css){
			$(this.obj).css(this.css)
		}



		if(this.dim){
                        if(this.dim.colspan){
                            document.getElementById(this.parent).childNodes[0].rows[this.dim.row].cells[this.dim.col].colSpan=this.dim.colspan;
                        }
                        document.getElementById(this.parent).childNodes[0].rows[this.dim.row].cells[this.dim.col].appendChild(this.obj);
		}

                if(this.func){
                    this.func(this);

                }

                if(this.id!= "butterDiv"){
                    this.hover();
                }

	};

}


tools.prototype = new zid();

tools.prototype.hover =function(){

    $(this.obj).hover(
        function(event){
            var width = $(this).width();
            var height = $(this).height();


            event.stopPropagation();
        },
        function(event){

            event.stopPropagation();
        }
    )
}