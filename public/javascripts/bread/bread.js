$(document).bind('ready', function(){
	breadCss={
		'position': 'fixed',
		'width': '50px',
		'height': '366px',
		'right': '6px',
		'top' : '6px',
		'background': 'rgb(240, 235, 226)',
                "border": "1px solid #666666",
                "padding": "2px",
                "box-shadow": "5px 5px 10px #000"


	}
	
	bread=new tools('div', 'bread', document.body, ['bread', "zidebuilder"],null, null, breadCss, null, null)
	bread.init();
	
	switchPanel=new tools('div', 'switchPanel', 'bread', ['switchPanel'], null, null, {width: '100%', height: '19px'}, null, null)
	switchPanel.init();
	
	makeDimensions(document.getElementById('switchPanel'), 'table', 1, 3,  {rowHeight: 16, cellWidth: 19}, null)
	
	showGrid=new tools('div', 'showGrid', 'switchPanel', ['switch'], null, 'bread/grid.png', null, {row: 0, col: 0}, null)
	showGrid.init();
	
	showBoundaries=new tools('div', 'showBoundaries', 'switchPanel', ['switch'], null, 'bread/boundaries.gif', null, {row:0, col:1}, null)
	showBoundaries.init();
   
	legendButton=new tools('div', 'legendButton', 'switchPanel', ['switch'], null, 'bread/legendButton.png', null, {row:0, col:2}, null)
	legendButton.init();
	
	toolBox=new tools('div', 'toolBox', 'bread', ['toolBox'], null, null, {width: '100%', height: '135px'}, null)
	toolBox.init();
	
	makeDimensions(document.getElementById('toolBox'), 'table', 9, 2,  {rowHeight: 25, cellWidth: 25}, null)
	
	handTool=new tools('div', 'handTool', 'toolBox', ['tools'], null, 'bread/handTool.png', {height: '25px', width: '25px'}, {row: 0, col: 0}, null)
	handTool.init();
	
        divisionDelete=new tools('div', 'divisionDelete', 'toolBox', ['tools'], null, 'bread/delete_button.jpg', {height: '25px', width: '25px'}, {row: 0, col:1}, null)
	divisionDelete.init();

        elementSelect=new tools('div', 'elementSelect', 'toolBox', ['tools'], null, 'bread/elementSelect.gif', {height: '25px', width: '25px'}, {row: 1, col:0}, null)
	elementSelect.init();

        textSelect=new tools('div', 'textSelect', 'toolBox', ['tools'], null, 'bread/textSelect.gif', {height: '25px', width: '25px'}, {row: 1, col:1}, null)
	textSelect.init();

	drawDiv=new tools('div', 'drawDiv', 'toolBox', ['tools'], null, 'bread/drawDiv.gif', null, {row: 2, col: 0}, null)
	drawDiv.init();

	drawText=new tools('div', 'drawText', 'toolBox',['tools'], null, 'bread/drawText.gif', {height: '25px', width: '25px'}, {row: 2, col: 1}, null)
	drawText.init();

        curtainH=new tools('div', 'curtainH', 'toolBox', ['tools'], null, 'bread/curtainH.gif', {height: '25px', width: '25px'}, {row: 3, col: 0}, null)
	curtainH.init();

        curtainV=new tools('div', 'curtainV', 'toolBox', ['tools'], null, 'bread/curtainV.gif', {height: '25px', width: '25px'}, {row: 3, col: 1}, null)
	curtainV.init();

        divisionDrag=new tools('div', 'divisionDrag', 'toolBox', ['tools'], null, 'bread/divisionDrag.jpg', {height: '25px', width: '25px'}, {row: 4, col: 0}, null)
	divisionDrag.init();

        divisionResize=new tools('div', 'divisionResize', 'toolBox', ['tools'], null, 'bread/divisionResize.png', {height: '25px', width: '25px'}, {row: 4, col: 1}, null)
	divisionResize.init();

        divBackground=new tools('div', 'divBackground', 'toolBox', ['tools'], null, 'bread/divisionBackground.gif', {height: '25px', width: '25px'}, {row: 5, col: 0}, null)
	divBackground.init();

        paintText=new tools('div', 'paintText', 'toolBox', ['tools'], null,  'bread/paint-brush-tool.gif', {height: '25px', width: '25px'}, {row: 5, col: 1}, null)
	paintText.init();

        imageInsert=new tools('div', 'imageInsert', 'toolBox', ['tools'], null, 'bread/imageInsert.png', {height: '25px', width: '25px'}, {row: 6, col: 0}, null)
	imageInsert.init();

        attachLink=new tools('div', 'attachLink', 'toolBox', ['tools'], null, 'bread/linkInsert.jpg', {height: '25px', width: '25px'}, {row: 6, col: 1}, null)
	attachLink.init();
        

        elementProperties=new tools('div', 'elementProperties', 'toolBox', ['tools'], null, 'bread/elementProperties.png', {height: '40px', width: '50px', margin: "auto", "text-align": "center", "margin-top": "5px", "z-index": 998}, {row: 7, col: 0, colspan: 2}, null)
	elementProperties.init();

        
});	

	 
