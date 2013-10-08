app.factory("Pdf", [function () {

	var PADDING = 20;
	var MAX_X = 200;
	var MAX_Y = 290;

	var middle_page = MAX_Y/2;


	return {
		printTickets: function(tickets) {

			console.log(tickets);

			var doc = new jsPDF();

			console.log(doc);

			for(var i=0; i<tickets.length; i++) {

				var ticket = tickets[i];

				doc.text(PADDING, 20 + (middle_page * i), ticket.titre);
				doc.text(PADDING, 40 + (middle_page * i), ticket.description);

				doc.line(PADDING, MAX_Y/2, MAX_X, MAX_Y/2);

				if(i !== 0 && i%2 === 0) {
					doc.addPage();
				}

			}
			
			var string = doc.output('datauristring');
			var iframe = "<iframe width='100%' height='100%' src='" + string + "'></iframe>"
			var x = window.open();
			x.document.open();
			x.document.write(iframe);
			x.document.close();
		}
	}

}]);