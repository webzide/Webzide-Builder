//Tools Class for bread/butter tools button objects
function tools(elem, id, parent, classes, src, css, dim){
	this.id=id;
	this.elem=elem;
	this.parent=parent;
	this.classes=classes;
	this.src=src;
	this.css=css;
	this.dim=dim;

	this.init=function(){
		this.obj=document.createElement(this.elem)
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
			this.obj.icon.src='../images/' + this.src;
			
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
		
		if(this.css!=null){
			$(this.obj).css(this.css)
		}
		
		
		if(this.dim){
			document.getElementById(this.parent).childNodes[0].rows[this.dim.row].cells[this.dim.col].appendChild(this.obj);
		}
		
	};

}
//---------------------------------------------------------------	

//Function for Making dimensions in an element
function makeDimensions(obj, dimType, rows, cols, styled){
	var dim=document.createElement(dimType);
	dim.setAttribute('id', obj.id + '-Table');
	this.style=styled;
	
	if(dimType=='table'){
		tableRows=[];
		for(r=0;r<rows;r++){
			tableRows[r]=dim.insertRow(-1);
			tableRows[r].setAttribute('row', r);
			$(tableRows[r]).height(this.style.rowHeight);
			
			
			tableRows['cols']=[];
			for(c=0;c<cols;c++){
				cells=tableRows[r].insertCell(-1);
				cells.setAttribute('col', c);
				$(cells).width(this.style.cellWidth);
				
			}

		}
		
		obj.appendChild(dim);					
	}
	
}
//---------------------------------------------------------------

//Function determining the absolute position of element's parents
function determine(obj, direction) {
	total = 0;
	
	$(obj).parents().filter('.div').each(function () {
		total = total + parseInt($(this).css(direction));
	})
	total = total + parseInt($(obj).css(direction));

	
	return total;
}
//-----------------------------------------------------------------	
	
//Function determining the borders width to fix the margin of error on the Draw objects	
function loopBorder(obj){
	loop=-1;

	$(obj).parents().filter('.div').each(function(){
		loop+=1;
	});
	
	return loop;
}
//----------------------------------------------------------------------