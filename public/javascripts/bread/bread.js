/*
The following code/document/program is the copyrighted work of:
"Xuan Duan", 2010 - 2011
All Rights Reserved.
This document/software/program/code, or any portions of it may not be cited, reproduced or redistributed without express written consent of the Author.
*/


builder.bread={}

builder.bread.css={
        'position': 'fixed',
        'width': '50px',
        'height': 'auto',
        'right': '6px',
        'top' : '6px',
         "padding": "2px"
}



$(document).bind('ready', function(){
    	builder.bread=new tools('bread', document.body, builder.bread,['bread', "zidebuilder", "builderDiv"],null, null, builder.bread.css, null, null, {})

	builder.bread.init();


	builder.bread.switchPanel=new zid('div', 'switchPanel', builder.bread, ['switchPanel'], {width: '100%', height: '19px'}, null, null, null, {})
	builder.bread.switchPanel.init();
	
	builder.bread.switchPanel.makeDimensions(document.getElementById('switchPanel'), 'table', 1, 3,  {rowHeight: 16, cellWidth: 19}, null, {})

	builder.bread.showGrid=new tools('gridSwitch', 'switchPanel', null,['switch'], null, 'bread/grid.png', null, {row: 0, col: 0}, null, {})
	builder.bread.showGrid.init();
	
	builder.bread.showBoundaries=new tools('borderSwitch', 'switchPanel', null,['switch'], null, 'bread/boundaries.gif', null, {row:0, col:1}, null, {})
	builder.bread.showBoundaries.init();
   
	builder.bread.legendButton=new tools('legendSwitch', 'switchPanel', null,['switch'], null, 'bread/legendButton.png', null, {row:0, col:2}, null, {})
	builder.bread.legendButton.init();
	
	builder.bread.toolBox=new zid('div', 'toolBox', builder.bread, ['toolBox'], {width: '100%', height: 'auto'}, null, null, null, {})
	builder.bread.toolBox.init();
	
	builder.bread.toolBox.makeDimensions(document.getElementById('toolBox'), 'table', 11, 2,  {rowHeight: 25, cellWidth: 25}, null, {})

	builder.bread.handTool=new tools('handTool', 'toolBox', null, ['tools'], null, 'bread/handTool.png', {height: '25px', width: '25px'}, {row: 0, col: 0}, null, {})
	builder.bread.handTool.init();
	
        builder.bread.divisionDelete=new tools('divisionDelete', 'toolBox', null, ['tools'], null, 'bread/delete_button.jpg', {height: '25px', width: '25px'}, {row: 0, col:1}, null, {})
	builder.bread.divisionDelete.init();

        builder.bread.elementSelect=new tools('elementSelect', 'toolBox', null, ['tools'], null, 'bread/elementSelect.png', {height: '25px', width: '25px'}, {row: 1, col:0}, null, {})
	builder.bread.elementSelect.init();

        builder.bread.textSelect=new tools('textSelect', 'toolBox', null, ['tools'], null, 'bread/texte3.png', {height: '25px', width: '25px'}, {row: 1, col:1}, null, {})
	builder.bread.textSelect.init();

        builder.bread.insertText=new tools('insertText', 'toolBox', null, ['tools'], null, 'bread/insertText.png', {height: '25px', width: '25px'}, {row: 2, col:1}, null, {})
	builder.bread.insertText.init();


        builder.bread.eyeDropper=new tools('eyeDropper', 'toolBox', null, ['tools'], null, 'bread/eyeDropper.png', {height: '25px', width: '25px'}, {row: 2, col:0}, null, {})
	builder.bread.eyeDropper.init();

	builder.bread.drawDiv=new tools('drawDiv', 'toolBox', null, ['tools'], null, 'bread/drawDiv.gif', null, {row: 3, col: 0}, null, {})
	builder.bread.drawDiv.init();

	builder.bread.drawText=new tools('drawText', 'toolBox',null, ['tools'], null, 'bread/drawText.gif', {height: 'auto', width: '25px', margin: '0'}, {row: 3, col: 1}, null, {})
	builder.bread.drawText.init();

        builder.bread.curtainH=new tools('curtainH', 'toolBox', null, ['tools'], null, 'bread/curtainH.gif', {height: '25px', width: '25px'}, {row: 4, col: 0}, null, {})
	builder.bread.curtainH.init();

        builder.bread.curtainV=new tools('curtainV', 'toolBox', null, ['tools'], null, 'bread/curtainV.gif', {height: '25px', width: '25px'}, {row: 4, col: 1}, null, {})
	builder.bread.curtainV.init();

        builder.bread.dividerX=new tools('dividerX', 'toolBox', null, ['tools'], null, 'bread/dividerX.gif', {height: '25px', width: '25px'}, {row: 5, col: 0}, null, {})
	builder.bread.dividerX.init();

        builder.bread.dividerY=new tools('dividerY', 'toolBox', null, ['tools'], null, 'bread/dividerY.gif', {height: '25px', width: '25px'}, {row: 5, col: 1}, null, {})
	builder.bread.dividerY.init();

        builder.bread.divisionDrag=new tools('divisionDrag', 'toolBox', null, ['tools'], null, 'bread/divisionDrag.jpg', {height: '25px', width: '25px'}, {row: 6, col: 0}, null, {})
	builder.bread.divisionDrag.init();

        builder.bread.divisionResize=new tools('divisionResize', 'toolBox', null, ['tools'], null, 'bread/divisionResize.png', {height: '25px', width: '25px'}, {row: 6, col: 1}, null, {})
	builder.bread.divisionResize.init();

        builder.bread.divBackground=new tools('divBackground', 'toolBox', null, ['tools'], null, 'bread/paintBucket.png', {height: '25px', width: '25px'}, {row: 7, col: 0}, null, {})
	builder.bread.divBackground.init();

        builder.bread.paintText=new tools('paintText', 'toolBox', null, ['tools'], null,  'bread/paint-brush-tool.gif', {height: '25px', width: '25px'}, {row: 7, col: 1}, null, {})
	builder.bread.paintText.init();

        builder.bread.imageInsert=new tools('imageInsert', 'toolBox', null, ['tools'], null, 'bread/imageInsert.png', {height: '25px', width: '25px'}, {row: 8, col: 0}, null, {})
	builder.bread.imageInsert.init();

        builder.bread.attachLink=new tools('attachLink', 'toolBox', null, ['tools'], null, 'bread/linkInsert.jpg', {height: '25px', width: '25px'}, {row: 8, col: 1}, null, {})
	builder.bread.attachLink.init();
        


        builder.bread.elementProperties=new tools('elementProperties', 'toolBox', null, ['windows'], null, 'bread/elementProperties.png', {height: '48px', width: '48px', margin: "auto", "text-align": "center", "margin-top": "3px", "z-index": 998}, {row: 9, col: 0, colspan: 2}, null, {})
	builder.bread.elementProperties.init();

        builder.bread.insertElement=new tools('insertElement', 'toolBox', null, ['windows'], null, 'bread/insertElement.png', {height: '48px', width: '48px', margin: "auto", "text-align": "center", "margin-top": "3px", "z-index": 998}, {row: 10, col: 0, colspan: 2}, null, {})
	builder.bread.insertElement.init();

});	

	 
