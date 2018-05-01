(function ($) {  
   $.fn.SPEditable = function () {  
     return this.each(function () {  
       $(this).addClass("ms-rte-layoutszone-inner-editable ms-rtestate-write").attr("role", "textbox").attr("aria-haspopup", "true").attr("contentEditable", "true").attr("aria-autocomplete", "both").attr("aria-autocomplete", "both").attr("aria-multiline", "true");  
     });  
   };  
   $.fn.SPNonEditable = function () {  
     return this.each(function () {  
       $(this).removeClass("ms-rte-layoutszone-inner-editable ms-rtestate-write").removeAttr("role aria-haspopup contentEditable aria-autocomplete aria-multiline");  
     });  
   };  
 })(jQuery);  

/* SPSERVICES 'FIXER' FUNCTION */

(function ($) {
                $.fn.filterNode = function(name) {
                      return this.find('*').filter(function() {
                        return this.nodeName === name;
                      });
                    };
})(jQuery);

/* END OF FIXER */

function readQS(value)
{
var qs = location.search.substring(1, location.search.length);
    	      
    	var args = qs.split("&");
    	var vals = new Object();
    	for (var i=0; i < args.length; i++) 
    	{
    		var nameVal = args[i].split("=");
    		var temp = unescape(nameVal[1]).split('+');
    		nameVal[1] = temp.join(' ');
    		vals[nameVal[0]] = nameVal[1];
    	}
    			
    	if (vals[value] != null) {
    	  	return vals[value];  	  	
       	}
}

var numberofslides = 0;
var currentslideid = 0;

function LoadDashboard()
{
ChangeHeading('Reporting Dashboard','20pt');
}

function ChangeHeading(sitename,fontsize)
{
$('#Heading').css('font-size',fontsize);
$('#Heading').html(sitename);
}

