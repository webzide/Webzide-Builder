$(document).bind('ready', function(){
	breadCss={
		'position': 'fixed',
		'width': '52px',
		'height': '366px',
		'right': '6px',
		'top' : '6px',
		'background': '#E1E1E1',
		'border-right': '2px solid #999999',
		'border-bottom': '2px solid #999999'
	}
	
	bread=new tools('div', 'bread', document.body, ['bread'], null, breadCss)
	bread.init();
	
	switchPanel=new tools('div', 'switchPanel', 'bread', ['switchPanel'], null, {width: '100%', height: '19px'})
	switchPanel.init();
	
	makeDimensions(document.getElementById('switchPanel'), 'table', 1, 3,  {rowHeight: 16, cellWidth: 19})
	
	showGrid=new tools('div', 'showGrid', 'switchPanel', ['switch'], 'bread/grid.png', null, {row: 0, col: 0})
	showGrid.init();
	
	showBoundaries=new tools('div', 'showBoundaries', 'switchPanel', ['switch'], 'bread/boundaries.gif', null, {row:0, col:1})
	showBoundaries.init();
   
	legendButton=new tools('div', 'legendButton', 'switchPanel', ['switch'], 'bread/legendButton.gif', null, {row:0, col:2})
	legendButton.init();
	
	toolBox=new tools('div', 'toolBox', 'bread', ['toolBox'], null, {width: '100%', height: '135px'})
	toolBox.init();
	
	makeDimensions(document.getElementById('toolBox'), 'table', 6, 2,  {rowHeight: 25, cellWidth: 25})
	
	handTool=new tools('div', 'handTool', 'toolBox', ['tools'], 'bread/handTool.png', {height: '25px', width: '25px'}, {row: 0, col: 0})
	handTool.init();
	
	divisionDelete=new tools('div', 'divisionDelete', 'toolBox', ['tools'], 'bread/divisionDelete.gif', {height: '25px', width: '25px'}, {row: 0, col:1})
	divisionDelete.init();
	
	elementSelect=new tools('div', 'elementSelect', 'toolBox', ['tools'], 'bread/elementSelect.gif', {height: '25px', width: '25px'}, {row: 1, col:0})
	elementSelect.init();
	
	textSelect=new tools('div', 'textSelect', 'toolBox', ['tools'], 'bread/textSelect.gif', {height: '25px', width: '25px'}, {row: 1, col:1})
	textSelect.init();

	drawDiv=new tools('div', 'drawDiv', 'toolBox', ['tools'], 'bread/drawDiv.gif', null, {row: 2, col: 0})
	drawDiv.init();
	
	drawText=new tools('div', 'drawText', 'toolBox',['tools'], 'bread/drawText.png', {height: '25px', width: '25px'}, {row: 2, col: 1})
	drawText.init();
	
	curtainH=new tools('div', 'curtainH', 'toolBox', ['tools'], 'bread/curtainH.gif', {height: '25px', width: '25px'}, {row: 3, col: 0})
	curtainH.init();
	
	curtainV=new tools('div', 'curtainV', 'toolBox', ['tools'], 'bread/curtainV.gif', {height: '25px', width: '25px'}, {row: 3, col: 1})
	curtainV.init();
	
	dividerX=new tools('div', 'dividerX', 'toolBox', ['tools'], 'bread/dividerX.gif', {height: '25px', width: '25px'}, {row: 4, col: 0})
	dividerX.init();
	
	dividerY=new tools('div', 'dividerY', 'toolBox', ['tools'], 'bread/dividerY.gif', {height: '25px', width: '25px'}, {row: 4, col: 1})
	dividerY.init();
	
	divisionDrag=new tools('div', 'divisionDrag', 'toolBox', ['tools'], 'bread/divisionDrag.gif', {height: '25px', width: '25px'}, {row: 5, col: 0})
	divisionDrag.init();
   
	divisionResize=new tools('div', 'divisionResize', 'toolBox', ['tools'], 'bread/divisionResize.png', {height: '25px', width: '25px'}, {row: 5, col: 1})
	divisionResize.init();
});	

	 
