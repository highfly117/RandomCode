var keepthisdate = new Date('December 01, 2013 00:00:00'); // this is the base date which it shows when it loads
var monthtotal = 0;
var data = new google.visualization.DataTable();

function AssetSpend(adate)
{
$('#MonthGauge').show();
keepthisdate = new Date(adate);
monthtotal = 0;
var thisdate = new Date(adate);

//$('#Data').html('<table id="tblData" style="font-size:8pt;"><tr><td style="padding:5px;border:solid 1px #d1d1d1;"><b>Asset</b></td><td style="padding:5px;border:solid 1px #d1d1d1;"><b>Spend ($)</b></td></tr></table>');

var month = thisdate.getMonth();
thismonth = parseFloat(month)+1;
var monthstart = new Date(monthname(thismonth.toString()) + ' 01, '+ thisdate.getFullYear() + ' 00:00:00');
var monthend = new Date(monthname(thismonth.toString()) + ' 01, '+ thisdate.getFullYear() + ' 00:00:00');
var prevdate = new Date(monthname(thismonth.toString()) + ' 01, '+ thisdate.getFullYear() + ' 00:00:00');
var nextdate = new Date(monthname(thismonth.toString()) + ' 01, '+ thisdate.getFullYear() + ' 00:00:00');
monthend.setMonth(monthend.getMonth()+1);
nextdate.setMonth(nextdate.getMonth()+1);
prevdate.setMonth(prevdate.getMonth()-1);
monthend.setDate(monthend.getDate()-1);

var thisdateformatted = monthname(thismonth.toString()) + ' ' + thisdate.getFullYear();

var query = "<Query><Where><And><Geq><FieldRef Name='Date_x0020_Requested'/><Value Type='DateTime'>"+JStoSP(monthstart)+"</Value></Geq><Leq><FieldRef Name='Date_x0020_Requested'/><Value Type='DateTime'>"+JStoSP(monthend)+"</Value></Leq></And></Where><OrderBy><FieldRef Name='Asset' Ascending='True'/></OrderBy></Query>";


var counter = 0;
var notfirsttime = 'false';
var commaon = 'false';

//var colourarray = [['#ED1C24'],['#F26522'],['#F7941D'],['#FFF200'],['#8DC73F'],['#00A99D'],['#00AEEF'],['#0054A6'],['#2E3192'],['#662D91'],['#92278F'],['#EC008C'],//['#ED145B']];

var colourarray = [['#d42e12'],['#e58271'],['#f7d117'],['#595959'],['#8cccd9'],['#bae0e8'],['#003882'],['#0099ba'],['#bad405'],['#00824a'],['#611759'],['#de8703'],['#70331f']];

$('#Heading').html('<div style="float:right;font-size:24pt;cursor:pointer;" onclick="AssetSpend(\''+nextdate+'\')"><img src="../Right.png" /></div><div style="float:left;font-size:24pt;cursor:pointer;" onclick="AssetSpend(\''+prevdate+'\')"><img src="../Left.png" /></div>&nbsp;&nbsp;&nbsp;<h1 style="color:black">Shell Support Dash Board - '+thisdateformatted+'</h1>');

$().SPServices
	({
    	operation: "GetListItems",
    	listName: "Shell Support Requests",
	CAMLQuery:query,
	CAMLViewFields: "<ViewFields><FieldRef Name='Asset' /><FieldRef Name='Actual_x0020_Effort' /></ViewFields>",
    	completefunc: function (xData, Status)
    	{
	if (Status != 'error')
	{
	var SLarray = new Array();
	var currentSL = '';
	$(xData.responseXML).SPFilterNode("z:row").each(function()
	{
	monthtotal++;
	if ($(this).attr("ows_Asset") != currentSL && $(this).attr("ows_Asset") != undefined)
	{
	if (notfirsttime == 'true')
	{
	counter++;
	}
	notfirsttime = 'true';
	commaon = 'false';
	SLarray[counter] = new Array();
	SLarray[counter][0] = $(this).attr("ows_Asset");
	SLarray[counter][1] = 0; // Value in $
	SLarray[counter][2] = 0; // Number of Calls
	SLarray[counter][3] = 0; // hours
	currentSL = $(this).attr("ows_Asset");
	}
	if ($(this).attr("ows_Actual_x0020_Effort") != undefined)
	{
	var mynumber = (parseFloat($(this).attr("ows_Actual_x0020_Effort"))*1000)/7.5;
	SLarray[counter][1]+=Math.round(mynumber);
	SLarray[counter][2]++;
	var mynumber2 = parseFloat($(this).attr("ows_Actual_x0020_Effort"));
	SLarray[counter][3]+=Math.round(mynumber2);
	}	
	});
	var textoutput = '[["Asset","Spend",{ role: "style" }]';
	var textoutput2 = '[';
	var commaon = false;
	for (var p=0; p<SLarray.length; p++)
	{
	//$('#tblData').append('<tr><td style="padding:5px;border:solid 1px #d1d1d1;">'+SLarray[p][0]+'</td><td style="padding:5px;border:solid 1px #d1d1d1;">'+SLarray[p]	[1]+'</td></tr>');
	textoutput += ',["'+SLarray[p][0]+'",'+SLarray[p][1]+',"'+colourarray[p]+'"]';
	if (commaon)
	{
	textoutput2 += ',';
	}
	textoutput2 += '["'+SLarray[p][0]+'",'+SLarray[p][1]+','+SLarray[p][2]+','+SLarray[p][3]+']';
	commaon = true;
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
	else
	{
	alert('ERROR!');
	}
	}
});
//SetGauge();
}



var viewValue = 1;



function changeView(mynumber)
	{
	viewValue = mynumber;
	AssetSpend(keepthisdate);
}

function drawTableAsset(dataarray2) {
	
        
        data.addColumn('string', 'Discipline');
        data.addColumn('number', 'Spend ($)');
		data.addColumn('number', 'No. of Calls');
		data.addColumn('number', 'Hours');
		data.addRows(dataarray2);

		var table = new google.visualization.Table(document.getElementById('table_div'));
	
	table.draw(data, {page: 'enable', pageSize: 55}); 
				
	 var dashboard = new google.visualization.Dashboard(
            document.getElementById('Dashbboard_Div'));

	var donutRangeSlider = new google.visualization.ControlWrapper({
          'controlType': 'NumberRangeFilter',
          'containerId': 'Filters',
          'options': {
            'filterColumnLabel': 'Spend ($)'
          }
        });
	
	var RangeSliderCalls = new google.visualization.ControlWrapper({
          'controlType': 'NumberRangeFilter',
          'containerId': 'Filters2',
          'options': {
            'filterColumnLabel': 'No. of Calls'
          }
        });
	
	var pieChart = new google.visualization.ChartWrapper({
		
          'chartType': 'PieChart',
          'containerId': 'chart_div2',
          'options': {'width': 700,'height': 400,'pieSliceText': 'value','legend': 'labeled','is3D': 'true'}
		     
          });
	
	
	
	var Barchart = new google.visualization.ChartWrapper({
      'chartType': 'BarChart',
      'containerId': 'chart_div',
      'options': {
        'width': 700,
        'height': 500,
        
	},
		
	'view': { 'columns': [0, viewValue] }

        });

	dashboard.bind(donutRangeSlider, Barchart);
	dashboard.bind(donutRangeSlider, pieChart);
	dashboard.bind(RangeSliderCalls, Barchart);
	dashboard.bind(RangeSliderCalls, pieChart);
	
	dashboard.draw(data);

	
	
	google.visualization.events.addListener(dashboard, 'ready', function(){
	google.visualization.events.addListener(pieChart, 'select', sliceChart)
	});
		
		function sliceChart(){
		var options = {'width': 700,'height': 400,'pieSliceText': 'value','legend': 'labeled','is3D': 'true', 'slices':[]};
		
		var selection = pieChart.getChart().getSelection();
		if (selection.length > 0) {
		options.slices = []
		options.slices[selection[0].row] = {
			offset: 0.4
		};
		pieChart.draw(data, options);
		}
		else {
			options.slices = [];
			pieChart.draw(data, options);
		}
		};
	
	
	
	
	
	
	

}




 



