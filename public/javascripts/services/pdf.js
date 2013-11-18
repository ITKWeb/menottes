app.factory("Pdf", [function () {
    
    var PADDING = 20;
    var MAX_X = 200;
    var MAX_Y = 290;
    
    var quart_page = MAX_Y/4;
    
    
    return {
	printTickets: function(tickets) {
	    
	    console.log(tickets);
	    
	    var doc = new jsPDF();
	    var nb_quart_page = 0;
	    
	    console.log(doc);
	    
	    for(var i=0; i<tickets.length; i++) {
		
		var ticket = tickets[i];

		var hut =  "Histoire:";
		if (ticket.history_id !== undefined) {
			hut += ticket.history_id;	
		} 
		doc.text(PADDING, 10 + (quart_page * nb_quart_page),hut);

		var tracid = "TracId:";
		if (ticket.trac_id !== undefined) {
			tracid += ticket.trac_id;	
		} 
		doc.text(MAX_X-30-PADDING, 10 + (quart_page * nb_quart_page), tracid);

		doc.setFontStyle('bold');
		doc.text(PADDING, 20 + (quart_page * nb_quart_page), ticket.titre);
		doc.setFontStyle('normal');

		doc.text(MAX_X-30-PADDING, 20 + (quart_page * nb_quart_page), "Importance");
		doc.rect(MAX_X-PADDING, 13 + (quart_page * nb_quart_page), 20, 10);
		var imp = ""+ticket.importance;
		doc.text(MAX_X-PADDING+10, 20 + (quart_page * nb_quart_page), imp);

		doc.text(MAX_X-30-PADDING, 35 + (quart_page * nb_quart_page), "Estimation");
		doc.rect(MAX_X-PADDING, 28 + (quart_page * nb_quart_page), 20, 10);

		doc.text(MAX_X-30-PADDING, 50 + (quart_page * nb_quart_page), "Test");
		doc.rect(MAX_X-PADDING, 43 + (quart_page * nb_quart_page), 20, 10);

		doc.text(PADDING, 30 + (quart_page * nb_quart_page), "Notes");
		doc.rect(PADDING, 31 + (quart_page * nb_quart_page), 120, 30);
		var line = doc.splitTextToSize(ticket.description, 120);
		doc.text(PADDING+5, 38 + (quart_page * nb_quart_page), line);
		
		nb_quart_page++;

		if(nb_quart_page < 4) {
		    doc.line(PADDING, (nb_quart_page * MAX_Y)/4, MAX_X, (nb_quart_page * MAX_Y)/4);
		}
			
		if(nb_quart_page === 4) {
		    nb_quart_page = 0;
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