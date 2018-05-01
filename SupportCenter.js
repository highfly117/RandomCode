function GetData(){

var counter = 0;
var notfirsttime = 'false';
var commaon = 'false';
var query = "";

var SLarray = new Array();
	var currentSL = '';
	
$().SPServices
	({
    	operation: "GetListItems",
    	listName: "SupportCenter",
	CAMLQuery:query,
	CAMLViewFields: "<ViewFields><FieldRef Name='ID' /><FieldRef Name='Title' /><FieldRef Name='AssginedTo' /><FieldRef Name='AmountofEffort' /><FieldRef Name='Status' /></ViewFields>",
    	completefunc: function (xData, Status)
    	{
		if (Status != 'error')
	{
	
	$(xData.responseXML).SPFilterNode("z:row").each(function()
	{
	if ($(this).attr("ows_Title") != currentSL)
	{
	if (notfirsttime == 'true')
	{
	counter++;
	}
	notfirsttime = 'true';
	commaon = 'false';
	SLarray[counter] = new Array();
	var thistitle = ''; 
	var AssginedTo = '';
	var amounteffort = 0;
	if ($(this).attr("ows_Title") != undefined)
	{
		thistitle = $(this).attr("ows_Title");
	}
	if ($(this).attr("ows_AssginedTo") != undefined)
	{
		AssginedTo = $(this).attr("ows_AssginedTo");
	}
	if ($(this).attr("ows_AmountofEffort") != undefined)
	{
		amounteffort = $(this).attr("ows_AmountofEffort");
	}
	SLarray[counter][0] = $(this).attr("ows_ID");
	SLarray[counter][1] = thistitle;
	SLarray[counter][2] = AssginedTo;
	SLarray[counter][3] = amounteffort;
	SLarray[counter][4] = $(this).attr("ows_Status");
	currentSL = $(this).attr("ows_Title");
	}
	});
	}
	else{
		alert('Error!');
	}
		}
	});
    /*  if ($(this).attr("ows_AssginedTo") != undefined)
	{  */
	var textoutput = '[["Asset","Spend"]';
	var textoutput2 = '[';
	var commaon = false;
	for (var p=0; p<SLarray.length; p++)
	{
	//$('#tblData').append('<tr><td style="padding:5px;border:solid 1px #d1d1d1;">'+SLarray[p][0]+'</td><td style="padding:5px;border:solid 1px #d1d1d1;">'+SLarray[p]	[1]+'</td></tr>');
	textoutput += ',["'+SLarray[p][0]+'","'+SLarray[p][1]+'"]';
	if (commaon)
	{
	textoutput2 += ',';
	}
	textoutput2 += '["'+SLarray[p][0]+'","'+SLarray[p][1]+'","'+SLarray[p][2]+'",'+SLarray[p][3]+',"'+SLarray[p][4]+'"]';
	commaon = true;
	//}
	}
	textoutput += ']';
	textoutput2 += ']';
	
	
	if (SLarray.length > 0)
	{
	var dataarray = eval(textoutput);
	var dataarray2 = eval(textoutput2);
	//ShowChartAsset(dataarray);
	$('#chart_div').show();
	//$('#chart_div').css('width',1000);
	//ShowPieChartAssets(dataarray);
	$('#Data').html('');
	$('#chart_div2').show();
	drawTableAsset(dataarray2);
	$('#table_div').show();
	}
	else
	{
	$('#Data').html('<P>No data</P>');
	$('#chart_div').hide();
	$('#chart_div2').hide();
	$('#table_div').hide();
	}
	}

function drawTableAsset(dataarray2) {
	
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'ID');
        data.addColumn('string', 'Title');
		data.addColumn('string', 'Assigned To');
		data.addColumn('number', 'Effort');
		data.addColumn('string', 'Status');
		data.addRows(dataarray2);

		var table = new google.visualization.Table(document.getElementById('table_div'));
	
table.draw(data, {page: 'enable', pageSize: 16}, {alternatingRowStyle: 'true'}); 
		
google.visualization.events.addListener(table, 'select', selectHandler);		
	
	function selectHandler() 
	{ 
	$(document).ready(function(){
			
			$('#Dashboard').animate({width: 1650}, 1000);
		  $('#TicketForm').animate({right: '-399px'}, 1200);
		  $('#TicketForm').show();
		          //$("#TicketForm").slideToggle("slow");
    });
	};



		}

function ThisIsJustATest()
	{
	$(document).ready(function(){
		$('#Dashboard').animate({width: 1200}, 1200);
		$('#TicketForm').animate({width: 'toggle'}, 1200);
	});	
	};

//////////////////////////////// Personal Query for userAgent
////////////////////////////////
////////////////////////////////
////////////////////////////////

function GetCaller(){
	
var query = "<Query><Where><Eq><FieldRef Name='AssginedTo'/><Value Type='Text'>Adam Wadsworth</Value></Eq></Where></Query>" 

var counter = 0;
var notfirsttime = 'false';
var commaon = 'false';


var SLarray = new Array();
	var currentSL = '';
	
$().SPServices
	({
    	operation: "GetListItems",
    	listName: "SupportCenter",
	CAMLQuery:query,
	CAMLViewFields: "<ViewFields><FieldRef Name='ID' /><FieldRef Name='Title' /><FieldRef Name='AssginedTo' /><FieldRef Name='AmountofEffort' /><FieldRef Name='Status' /></ViewFields>",
    	completefunc: function (xData, Status)
    	{
		if (Status != 'error')
	{
	
	$(xData.responseXML).SPFilterNode("z:row").each(function()
	{
	if ($(this).attr("ows_Title") != currentSL)
	{
	if (notfirsttime == 'true')
	{
	counter++;
	}
	notfirsttime = 'true';
	commaon = 'false';
	SLarray[counter] = new Array();
	var thistitle = ''; 
	var AssginedTo = '';
	var amounteffort = 0;
	if ($(this).attr("ows_Title") != undefined)
	{
		thistitle = $(this).attr("ows_Title");
	}
	if ($(this).attr("ows_AssginedTo") != undefined)
	{
		AssginedTo = $(this).attr("ows_AssginedTo");
	}
	if ($(this).attr("ows_AmountofEffort") != undefined)
	{
		amounteffort = $(this).attr("ows_AmountofEffort");
	}
	SLarray[counter][0] = $(this).attr("ows_ID");
	SLarray[counter][1] = thistitle;
	SLarray[counter][2] = AssginedTo;
	SLarray[counter][3] = amounteffort;
	SLarray[counter][4] = $(this).attr("ows_Status");
	currentSL = $(this).attr("ows_Title");
	}
	});
	}
	else{
		alert('Error!');
	}
		}
	});
    /*  if ($(this).attr("ows_AssginedTo") != undefined)
	{  */
	var textoutput = '[["Asset","Spend"]';
	var textoutput2 = '[';
	var commaon = false;
	for (var p=0; p<SLarray.length; p++)
	{
	//$('#tblData').append('<tr><td style="padding:5px;border:solid 1px #d1d1d1;">'+SLarray[p][0]+'</td><td style="padding:5px;border:solid 1px #d1d1d1;">'+SLarray[p]	[1]+'</td></tr>');
	textoutput += ',["'+SLarray[p][0]+'","'+SLarray[p][1]+'"]';
	if (commaon)
	{
	textoutput2 += ',';
	}
	textoutput2 += '["'+SLarray[p][0]+'","'+SLarray[p][1]+'","'+SLarray[p][2]+'",'+SLarray[p][3]+',"'+SLarray[p][4]+'"]';
	commaon = true;
	//}
	}
	textoutput += ']';
	textoutput2 += ']';
	
	
	if (SLarray.length > 0)
	{
	var dataarray = eval(textoutput);
	var dataarray2 = eval(textoutput2);
	//ShowChartAsset(dataarray);
	$('#chart_div').show();
	//$('#chart_div').css('width',1000);
	//ShowPieChartAssets(dataarray);
	$('#Data').html('');
	$('#chart_div2').show();
	drawTableAssetCaller(dataarray2);
	$('#Data').show();
	}
	else
	{
	$('#Data').html('<P>No data</P>');
	$('#chart_div').hide();
	$('#chart_div2').hide();
	$('#table_div').hide();
	}
	}




function drawTableAssetCaller(dataarray2) {
	
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'ID');
        data.addColumn('string', 'Title');
		data.addColumn('string', 'Assigned To');
		data.addColumn('number', 'Effort');
		data.addColumn('string', 'Status');
		data.addRows(dataarray2);

		var table = new google.visualization.Table(document.getElementById('Data'));
	
		var options = {
			'page': 'enable', 'pageSize': '5',
			'title': 'All Calls',
			'width': 680,
			
			
		};
		
	
	table.draw(data, options); 
		
}

//////////////////////////////// BarChart for Open calls
////////////////////////////////
////////////////////////////////
////////////////////////////////



 function GetBar(){
	
var query = "<Query><Where><Neq><FieldRef Name='Status'/><Value Type='Text'>Closed</Value></Neq></Where></Query>" 

var counter = 0;
var notfirsttime = 'false';
var commaon = 'false';


var SLarray = new Array();
	var currentSL = '';
	
$().SPServices
	({
    	operation: "GetListItems",
    	listName: "SupportCenter",
	CAMLQuery:query,
	CAMLViewFields: "<ViewFields><FieldRef Name='SupportTicket' /></ViewFields>",
    	completefunc: function (xData, Status)
    	{
		if (Status != 'error')
	{
	
	$(xData.responseXML).SPFilterNode("z:row").each(function()
	{
	if ($(this).attr("ows_SupportTicket") != currentSL)
	{
	if (notfirsttime == 'true')
	{
	counter++;
	}
	notfirsttime = 'true';
	commaon = 'false';
	SLarray[counter] = new Array();
	SLarray[counter][0] = $(this).attr("ows_SupportTicket");
	SLarray[counter][1] = 0;
	currentSL = $(this).attr("ows_SupportTicket");
	}
	if ($(this).attr("ows_SupportTicket") != undefined)
	{
	SLarray[counter][1]++;
	}
	});
	var textoutput = '[["Asset","Spend"]';
	var textoutput2 = '[';
	var commaon = false;
	for (var p=0; p<SLarray.length; p++)
	{
	//$('#tblData').append('<tr><td style="padding:5px;border:solid 1px #d1d1d1;">'+SLarray[p][0]+'</td><td style="padding:5px;border:solid 1px #d1d1d1;">'+SLarray[p]	[1]+'</td></tr>');
	textoutput += ',["'+SLarray[p][0]+'","'+SLarray[p][1]+'"]';
	if (commaon)
	{
	textoutput2 += ',';
	}
	textoutput2 += '["'+SLarray[p][0]+'",'+SLarray[p][1]+']';
	commaon = true;
	//}
	}
	textoutput += ']';
	textoutput2 += ']';
	
	
	if (SLarray.length > 0)
	{
	var dataarray = eval(textoutput);
	var dataarray2 = eval(textoutput2);
	//ShowChartAsset(dataarray);
	$('#chart_div').show();
	//$('#chart_div').css('width',1000);
	//ShowPieChartAssets(dataarray);
	//$('#Data').html('');
	$('#chart_div2').show();
	drawTableAssetBar(dataarray2);
	$('#test').show();
	}
	else
	{
	$('#Data').html('<P>No data</P>');
	$('#chart_div').hide();
	$('#chart_div2').hide();
	$('#table_div').hide();
	}
	}
	else
	{
	alert('ERROR!');
	}
	}
});
//SetGauge();
}



function drawTableAssetBar(dataarray2) {
	
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'ID');
        data.addColumn('number', 'count');
		data.addRows(dataarray2);

		var dashboard = new google.visualization.Dashboard(
            document.getElementById('Dashboard_Div'));
	
		var donutRangeSlider = new google.visualization.ControlWrapper({
          'controlType': 'NumberRangeFilter',
          'containerId': 'Filters',
          'options': {
            'filterColumnLabel': 'count'
		  }
		});
	
		var Barchart = new google.visualization.ChartWrapper({
		'chartType': 'ColumnChart',
		'containerId': 'chart_div',
		'options': {
        'title': 'Open Calls',
		'titleTextStyle': {color: 'grey', fontSize: 19},
		'width': 280,
        'height': 500,
		'legend': 'none',
		'backgroundColor': '#F8F8F8',
		},
		'view': { 'columns': [0, 1] }
        });
		
			$('#Filters').hide();
		
		dashboard.bind(donutRangeSlider, Barchart);
		
		dashboard.draw(data);
		
		
		
}

//////////////////////////////// ColumnChart for Open calls
////////////////////////////////
////////////////////////////////
////////////////////////////////

function GetAllCallers(){
	

var counter = 0;
var notfirsttime = 'false';
var commaon = 'false';
var query = "<Query><Where><Neq><FieldRef Name='Status'/><Value Type='Text'>Closed</Value></Neq></Where><OrderBy><FieldRef Name='AssginedTo'/></OrderBy></Query>";

var SLarray = new Array();
	var currentSL = '';
	
$().SPServices
	({
    	operation: "GetListItems",
    	listName: "SupportCenter",
	CAMLQuery:query,
	CAMLViewFields: "<ViewFields><FieldRef Name='ID' /><FieldRef Name='Title' /><FieldRef Name='AssginedTo' /><FieldRef Name='AmountofEffort' /><FieldRef Name='Status' /></ViewFields>",
    	completefunc: function (xData, Status)
    	{
		if (Status != 'error')
	{
	
	$(xData.responseXML).SPFilterNode("z:row").each(function()
	{
	if ($(this).attr("ows_AssginedTo") != currentSL)
	{
	if (notfirsttime == 'true')
	{
	counter++;
	}
	notfirsttime = 'true';
	commaon = 'false';
	SLarray[counter] = new Array();
	var thistitle = ''; 
	var AssginedTo = ' Un-Assigned calls';
	var amounteffort = 0;
	if ($(this).attr("ows_Title") != undefined)
	{
		thistitle = $(this).attr("ows_Title");
	}
	if ($(this).attr("ows_AssginedTo") != undefined)
	{
		AssginedTo = $(this).attr("ows_AssginedTo");
	}
	if ($(this).attr("ows_AmountofEffort") != undefined)
	{
		amounteffort = $(this).attr("ows_AmountofEffort");
	}
	SLarray[counter][0] = AssginedTo;
	SLarray[counter][1] = amounteffort;
	SLarray[counter][2] = 0;
	currentSL = $(this).attr("ows_AssginedTo");
	}
	if ($(this).attr("ows_AssginedTo") != undefined)
	{
	SLarray[counter][2]++;
	}
	});
	var textoutput = '[["Asset","Spend"]';
	var textoutput2 = '[';
	var commaon = false;
	for (var p=0; p<SLarray.length; p++)
	{
	//$('#tblData').append('<tr><td style="padding:5px;border:solid 1px #d1d1d1;">'+SLarray[p][0]+'</td><td style="padding:5px;border:solid 1px #d1d1d1;">'+SLarray[p]	[1]+'</td></tr>');
	textoutput += ',["'+SLarray[p][0]+'","'+SLarray[p][1]+'"]';
	if (commaon)
	{
	textoutput2 += ',';
	}
	textoutput2 += '["'+SLarray[p][0]+'",'+SLarray[p][1]+','+SLarray[p][2]+']';
	commaon = true;
	}
	}
	textoutput += ']';
	textoutput2 += ']';
	
	
	if (SLarray.length > 0)
	{
	var dataarray = eval(textoutput);
	var dataarray2 = eval(textoutput2);
	//ShowChartAsset(dataarray);
	$('#chart_div').show();
	//$('#chart_div').css('width',1000);
	//ShowPieChartAssets(dataarray);
	//$('#Data').html('');
	$('#chart_div2').show();
	drawTableAllCallers(dataarray2);
	$('#AssignedTo').show();
	}
	else
	{
	//$('#Data').html('<P>No data</P>');
	$('#chart_div').hide();
	$('#chart_div2').hide();
	$('#table_div').hide();
	}
	}
});
}


function drawTableAllCallers(dataarray2) {
	
        var data = new google.visualization.DataTable();
        
        
		data.addColumn('string', 'Assigned To');
		data.addColumn('number', 'Effort');
		data.addColumn('number', 'Open Calls');
		data.addRows(dataarray2);

		var dashboard = new google.visualization.Dashboard(
            document.getElementById('Dashbboard_Div2'));
	
		var RangeSlider = new google.visualization.ControlWrapper({
          'controlType': 'NumberRangeFilter',
          'containerId': 'Filters2',
          'options': {
            'filterColumnLabel': 'Open Calls'
		  }
		});
	
		var columchart = new google.visualization.ChartWrapper({
		'chartType': 'BarChart',
		'containerId': 'AssignedTo',
		'options': {
		'width': 1100,
        'height': 250,  
		'backgroundColor': '#F8F8F8',
		},
		'view': { 'columns': [0, 2] }
        });
		
			$('#Filters2').hide();
		
		dashboard.bind(RangeSlider, columchart);
		
		dashboard.draw(data);
}
	
 
//////////////////////////////// PieChart for Open calls
////////////////////////////////
////////////////////////////////
////////////////////////////////


function GetStatus(){

var counter = 0;
var notfirsttime = 'false';
var commaon = 'false';
var query = "<Query><OrderBy><FieldRef Name='Status'/></OrderBy></Query>";

var SLarray = new Array();
	var currentSL = '';
	
$().SPServices
	({
    	operation: "GetListItems",
    	listName: "SupportCenter",
	CAMLQuery:query,
	  	completefunc: function (xData, Status)
    	{
		if (Status != 'error')
	{
	
	$(xData.responseXML).SPFilterNode("z:row").each(function()
	{
	
	if ($(this).attr("ows_Status") != currentSL)
	{
	if (notfirsttime == 'true')
	{
	counter++;
	}
	notfirsttime = 'true';
	commaon = 'false';
	SLarray[counter] = new Array();
		
	SLarray[counter][0] = $(this).attr("ows_Status");
	SLarray[counter][1] = 0;
	currentSL = $(this).attr("ows_Status");
	}
	if ($(this).attr("ows_Status") != undefined)
	{
	SLarray[counter][1]++;
	}
	});
	var textoutput = '[["Status", "Count"]';
	var textoutput2 = '[';
	var commaon = false;
	for (var p=0; p<SLarray.length; p++)
	{
	//$('#tblData').append('<tr><td style="padding:5px;border:solid 1px #d1d1d1;">'+SLarray[p][0]+'</td><td style="padding:5px;border:solid 1px #d1d1d1;">'+SLarray[p]	[1]+'</td></tr>');
	textoutput += ',["'+SLarray[p][0]+'",'+SLarray[p][1]+']';
	if (commaon)
	{
	textoutput2 += ',';
	}
	textoutput2 += '["'+SLarray[p][0]+'",'+SLarray[p][1]+']';
	commaon = true;
	}
	}
	textoutput += ']';
	textoutput2 += ']';
	
	
	if (SLarray.length > 0)
	{
	var dataarray = eval(textoutput);
	var dataarray2 = eval(textoutput2);
	//ShowChartAsset(dataarray);
	//$('#chart_div').show();
	//$('#chart_div').css('width',1000);
	//ShowPieChartAssets(dataarray);
	drawPieChartNow(dataarray);
	$('#PieChart').show();
	}
	else
	{
	$('#Data').html('<P>No data</P>');
	$('#chart_div').hide();
	$('#chart_div2').hide();
	$('#table_div').hide();
	}
	}
});
}
	
	
	
function drawPieChartNow(dataarray) {
	
        var data = new google.visualization.arrayToDataTable(dataarray);
      
	var chart = new google.visualization.PieChart(document.getElementById('PieChart'));

		var options = {
			'width': 355,
			'height': 500,
			'legend': 'none',
			'pieSliceText': 'label',
			'title': 'Call Statuses',
			'is3D': 'true',
			'titleTextStyle': {color: 'grey', fontSize: 19},
			'backgroundColor': '#F8F8F8',
		};
		
        chart.draw(data, options);
		
				
	
};
/* 
function SubTicket()
{
$(document).ready(function(){
    $("#NewTicket").click(function(){
        $("TicketForm").slideToggle("slow");
    });
});

} */