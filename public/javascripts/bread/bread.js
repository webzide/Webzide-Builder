/*
The following code/document/program is the copyrighted work of:
"Xuan Duan", 2010 - 2011
All Rights Reserved.
This document/software/program/code, or any portions of it may not be cited, reproduced or redistributed without express written consent of the Author.
*/


builder.divisions.bread={}

builder.divisions.bread.css={
        'position': 'fixed',
        'width': '50px',
        'height': 'auto',
        'right': '6px',
        'top' : '6px',
         "padding": "2px"
}

builder.divisions.bread.switches ={};

builder.divisions.bread.tools = {};

$(document).bind('ready', function(){
	builder.divisions.bread=new tools('bread', document.body, ['bread', "zidebuilder", "builderDiv"],null, null, builder.divisions.bread.css, null, null)
	builder.divisions.bread.init();

        builder.divisions.bread.children = {}

	builder.divisions.bread.children.switchPanel=new zid('div', 'switchPanel', builder.divisions.bread, ['switchPanel'], {width: '100%', height: '19px'}, null, null, null)
	builder.divisions.bread.children.switchPanel.init();
	
	builder.divisions.bread.children.switchPanel.makeDimensions(document.getElementById('switchPanel'), 'table', 1, 3,  {rowHeight: 16, cellWidth: 19}, null)

        

        builder.divisions.bread.switches = {}
	builder.divisions.bread.switches.showGrid=new tools('showGrid', 'switchPanel', ['switch'], null, 'bread/grid.png', null, {row: 0, col: 0}, null)
	builder.divisions.bread.switches.showGrid.init();
	
	builder.divisions.bread.switches.showBoundaries=new tools('showBoundaries', 'switchPanel', ['switch'], null, 'bread/boundaries.gif', null, {row:0, col:1}, null)
	builder.divisions.bread.switches.showBoundaries.init();
   
	builder.divisions.bread.switches.legendButton=new tools('legendButton', 'switchPanel', ['switch'], null, 'bread/legendButton.png', null, {row:0, col:2}, null)
	builder.divisions.bread.switches.legendButton.init();
	
	builder.divisions.bread.children.toolBox=new zid('div', 'toolBox', builder.divisions.bread, ['toolBox'], {width: '100%', height: 'auto'}, null, null, null)
	builder.divisions.bread.children.toolBox.init();
	
	builder.divisions.bread.children.toolBox.makeDimensions(document.getElementById('toolBox'), 'table', 10, 2,  {rowHeight: 25, cellWidth: 25}, null)

        builder.divisions.bread.tools = {}
	builder.divisions.bread.tools.handTool=new tools('handTool', 'toolBox', ['tools'], null, 'bread/handTool.png', {height: '25px', width: '25px'}, {row: 0, col: 0}, null)
	builder.divisions.bread.tools.handTool.init();
	
        builder.divisions.bread.tools.divisionDelete=new tools('divisionDelete', 'toolBox', ['tools'], null, 'bread/delete_button.jpg', {height: '25px', width: '25px'}, {row: 0, col:1}, null)
	builder.divisions.bread.tools.divisionDelete.init();

        builder.divisions.bread.tools.elementSelect=new tools('elementSelect', 'toolBox', ['tools'], null, 'bread/elementSelect.gif', {height: '25px', width: '25px'}, {row: 1, col:0}, null)
	builder.divisions.bread.tools.elementSelect.init();

        builder.divisions.bread.tools.textSelect=new tools('textSelect', 'toolBox', ['tools'], null, 'bread/textSelect.gif', {height: '25px', width: '25px'}, {row: 1, col:1}, null)
	builder.divisions.bread.tools.textSelect.init();

	builder.divisions.bread.tools.drawDiv=new tools('drawDiv', 'toolBox', ['tools'], null, 'bread/drawDiv.gif', null, {row: 2, col: 0}, null)
	builder.divisions.bread.tools.drawDiv.init();

	builder.divisions.bread.tools.drawText=new tools('drawText', 'toolBox',['tools'], null, 'bread/drawText.gif', {height: 'auto', width: '25px', margin: '0'}, {row: 2, col: 1}, null)
	builder.divisions.bread.tools.drawText.init();

        builder.divisions.bread.tools.curtainH=new tools('curtainH', 'toolBox', ['tools'], null, 'bread/curtainH.gif', {height: '25px', width: '25px'}, {row: 3, col: 0}, null)
	builder.divisions.bread.tools.curtainH.init();

        builder.divisions.bread.tools.curtainV=new tools('curtainV', 'toolBox', ['tools'], null, 'bread/curtainV.gif', {height: '25px', width: '25px'}, {row: 3, col: 1}, null)
	builder.divisions.bread.tools.curtainV.init();

        builder.divisions.bread.tools.dividerX=new tools('dividerX', 'toolBox', ['tools'], null, 'bread/dividerX.gif', {height: '25px', width: '25px'}, {row: 4, col: 0}, null)
	builder.divisions.bread.tools.dividerX.init();

        builder.divisions.bread.tools.dividerY=new tools('dividerY', 'toolBox', ['tools'], null, 'bread/dividerY.gif', {height: '25px', width: '25px'}, {row: 4, col: 1}, null)
	builder.divisions.bread.tools.dividerY.init();

        builder.divisions.bread.tools.divisionDrag=new tools('divisionDrag', 'toolBox', ['tools'], null, 'bread/divisionDrag.jpg', {height: '25px', width: '25px'}, {row: 5, col: 0}, null)
	builder.divisions.bread.tools.divisionDrag.init();

        builder.divisions.bread.tools.divisionResize=new tools('divisionResize', 'toolBox', ['tools'], null, 'bread/divisionResize.png', {height: '25px', width: '25px'}, {row: 5, col: 1}, null)
	builder.divisions.bread.tools.divisionResize.init();

        builder.divisions.bread.tools.divBackground=new tools('divBackground', 'toolBox', ['tools'], null, 'bread/divisionBackground.gif', {height: '25px', width: '25px'}, {row: 6, col: 0}, null)
	builder.divisions.bread.tools.divBackground.init();

        builder.divisions.bread.tools.paintText=new tools('paintText', 'toolBox', ['tools'], null,  'bread/paint-brush-tool.gif', {height: '25px', width: '25px'}, {row: 6, col: 1}, null)
	builder.divisions.bread.tools.paintText.init();

        builder.divisions.bread.tools.imageInsert=new tools('imageInsert', 'toolBox', ['tools'], null, 'bread/imageInsert.png', {height: '25px', width: '25px'}, {row: 7, col: 0}, null)
	builder.divisions.bread.tools.imageInsert.init();

        builder.divisions.bread.tools.attachLink=new tools('attachLink', 'toolBox', ['tools'], null, 'bread/linkInsert.jpg', {height: '25px', width: '25px'}, {row: 7, col: 1}, null)
	builder.divisions.bread.tools.attachLink.init();
        

        elementProperties=new tools('elementProperties', 'toolBox', ['tools'], null, 'bread/elementProperties.png', {height: '40px', width: '50px', margin: "auto", "text-align": "center", "margin-top": "5px", "z-index": 998}, {row: 8, col: 0, colspan: 2}, null)
	elementProperties.init();


});	

	 
