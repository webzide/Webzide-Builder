$(document).bind('ready', function(){
	breadCss={
		'position': 'fixed',
		'width': '52px',
		'height': '366px',
		'right': '6px',
		'top' : '6px',
		'background': 'rgb(240, 235, 226)',
		'border-right': '2px solid #999999',
		'border-bottom': '2px solid #999999'
	}
	
	bread=new tools('div', 'bread', document.body, ['bread'], null, breadCss, null, null)
	bread.init();
	
	switchPanel=new tools('div', 'switchPanel', 'bread', ['switchPanel'], null, {width: '100%', height: '19px'}, null, null)
	switchPanel.init();
	
	makeDimensions(document.getElementById('switchPanel'), 'table', 1, 3,  {rowHeight: 16, cellWidth: 19}, null)
	
	showGrid=new tools('div', 'showGrid', 'switchPanel', ['switch'], 'bread/grid.png', null, {row: 0, col: 0}, null)
	showGrid.init();
	
	showBoundaries=new tools('div', 'showBoundaries', 'switchPanel', ['switch'], 'bread/boundaries.gif', null, {row:0, col:1}, null)
	showBoundaries.init();
   
	legendButton=new tools('div', 'legendButton', 'switchPanel', ['switch'], 'bread/legendButton.gif', null, {row:0, col:2}, null)
	legendButton.init();
	
	toolBox=new tools('div', 'toolBox', 'bread', ['toolBox'], null, {width: '100%', height: '135px'}, null)
	toolBox.init();
	
	makeDimensions(document.getElementById('toolBox'), 'table', 9, 2,  {rowHeight: 25, cellWidth: 25}, null)
	
	handTool=new tools('div', 'handTool', 'toolBox', ['tools'], 'bread/handTool.png', {height: '25px', width: '25px'}, {row: 0, col: 0}, null)
	handTool.init();
	
        divisionDelete=new tools('div', 'divisionDelete', 'toolBox', ['tools'], 'bread/delete_button.jpg', {height: '25px', width: '25px'}, {row: 0, col:1}, null)
	divisionDelete.init();

        elementSelect=new tools('div', 'elementSelect', 'toolBox', ['tools'], 'bread/elementSelect.gif', {height: '25px', width: '25px'}, {row: 1, col:0}, null)
	elementSelect.init();

        textSelect=new tools('div', 'textSelect', 'toolBox', ['tools'], 'bread/textSelect.gif', {height: '25px', width: '25px'}, {row: 1, col:1}, null)
	textSelect.init();

	drawDiv=new tools('div', 'drawDiv', 'toolBox', ['tools'], 'bread/drawDiv.gif', null, {row: 2, col: 0}, null)
	drawDiv.init();

	drawText=new tools('div', 'drawText', 'toolBox',['tools'], 'bread/drawText.gif', {height: '25px', width: '25px'}, {row: 2, col: 1}, null)
	drawText.init();

        curtainH=new tools('div', 'curtainH', 'toolBox', ['tools'], 'bread/curtainH.gif', {height: '25px', width: '25px'}, {row: 3, col: 0}, null)
	curtainH.init();

        curtainV=new tools('div', 'curtainV', 'toolBox', ['tools'], 'bread/curtainV.gif', {height: '25px', width: '25px'}, {row: 3, col: 1}, null)
	curtainV.init();

        divisionDrag=new tools('div', 'divisionDrag', 'toolBox', ['tools'], 'bread/divisionDrag.jpg', {height: '25px', width: '25px'}, {row: 4, col: 0}, null)
	divisionDrag.init();

        divisionResize=new tools('div', 'divisionResize', 'toolBox', ['tools'], 'bread/divisionResize.png', {height: '25px', width: '25px'}, {row: 4, col: 1}, null)
	divisionResize.init();

        divBackground=new tools('div', 'divBackground', 'toolBox', ['tools'], 'bread/divisionBackground.gif', {height: '25px', width: '25px'}, {row: 5, col: 0}, null)
	divBackground.init();

        paintText=new tools('div', 'paintText', 'toolBox', ['tools'], 'bread/paint-brush-tool.gif', {height: '25px', width: '25px'}, {row: 5, col: 1}, null)
	paintText.init();

        imageInsert=new tools('div', 'imageInsert', 'toolBox', ['tools'], 'bread/imageInsert.png', {height: '25px', width: '25px'}, {row: 6, col: 0}, null)
	imageInsert.init();

        attachLink=new tools('div', 'attachLink', 'toolBox', ['tools'], 'bread/linkInsert.jpg', {height: '25px', width: '25px'}, {row: 6, col: 1}, null)
	attachLink.init();
        

        elementProperties=new tools('div', 'elementProperties', 'toolBox', ['tools'], 'bread/elementProperties.png', {height: '40px', width: '50px', margin: "auto", "text-align": "center", "margin-top": "5px", "z-index": 998}, {row: 7, col: 0, colspan: 2}, null)
	elementProperties.init();

        
});	

	 
