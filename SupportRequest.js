

			



function updateSupport () {
	
	$().SPServices({
		operation:"UpdateListItems",
		async: false,
		batchCmd: "New",
		listName: "SupportCenter",
		valuepairs: [["Title", $("#txIssue").val()], ["Description", $("#txDescription").val()], ["Department", $("#txDepartment").val()], ["AssginedTo", $("#txAssignedTo").val()], ["RequestedBy", $("#txRequestedFor").val()], ["RequesterID", $("#txRequestedID").val()], ["Priority", $("#txPriority").val()], ["Software", $("#txSoftwareID").val()]],
		completefunc: function(xData, Status) {
			alert("completed");
		}
	});
}