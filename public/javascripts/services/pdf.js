app.factory("Pdf", [function () {

	var PADDING = 20;
	var MAX_X = 200;
	var MAX_Y = 290;

	var middle_page = MAX_Y/2;


	return {
		printTickets: function(tickets) {

			console.log(tickets);

			var doc = new jsPDF();
			var nb_demi_page = 0;

			console.log(doc);

			for(var i=0; i<tickets.length; i++) {

				var ticket = tickets[i];

				doc.text(PADDING, 20 + (middle_page * nb_demi_page), ticket.titre);
				doc.text(MAX_X-30-PADDING, 20 + (middle_page * nb_demi_page), "Importance");
				doc.rect(MAX_X-PADDING, 13 + (middle_page * nb_demi_page), 20, 10);
				doc.text(PADDING, 30 + (middle_page * nb_demi_page), ticket.description);
				doc.text(MAX_X-30-PADDING, 30 + (middle_page * nb_demi_page), "Estimation");
				doc.rect(MAX_X-PADDING, 23 + (middle_page * nb_demi_page), 20, 10);
				doc.text(PADDING, 40 + (middle_page * nb_demi_page), "Notes");
				doc.rect(PADDING, 41 + (middle_page * nb_demi_page), 120, 25);
				doc.text(PADDING, 75 + (middle_page * nb_demi_page), "Comment démontrer");
				doc.rect(PADDING, 76 + (middle_page * nb_demi_page), 120, 25);

				if(nb_demi_page === 0) {
					doc.line(PADDING, MAX_Y/2, MAX_X, MAX_Y/2);
				}

				nb_demi_page++;

				if(i%2 !== 0) {
					nb_demi_page = 0;
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