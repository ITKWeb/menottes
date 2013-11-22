app.factory("Pdf", ['Network', function ($network) {
    
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
	    
	    var maxImp = 1000;
		var currentMax=0;
		var ticket;
        /*
        var iconP;
        $network.getSelectedProjetIconPath(function(iconPath) {
            iconP = iconPath;
        });
		var imgData = 'data:image/png;base64,'+ Base64.encode(iconP);
        */
	    for(var i=0; i<tickets.length; i++) {
			for (var j = 0; j < tickets.length; j++) {
				var currentPriority = tickets[j].priority;
				if (currentPriority > currentMax && currentPriority < maxImp) {
					currentMax = currentPriority;
					ticket = tickets[j];
				}
			}
            
            if (ticket.projet_id === 1) { // Dispeau
                doc.circle(MAX_X/2 - 7, 10 + (quart_page * nb_quart_page), 3, 'FD');						
                doc.triangle(MAX_X/2-10, 10+ (quart_page * nb_quart_page), MAX_X/2-4, 10+ (quart_page * nb_quart_page), MAX_X/2-7, 4+ (quart_page * nb_quart_page), 'FD');
            } else if (ticket.projet_id === 2) { // Preco
                doc.rect(MAX_X/2-10, 4+ (quart_page * nb_quart_page), 8, 4);
                doc.rect(MAX_X/2-8, 5+ (quart_page * nb_quart_page), 4, 1, 'FD');
                doc.triangle(MAX_X/2-8, 8 + (quart_page * nb_quart_page), MAX_X/2-4, 8+ (quart_page * nb_quart_page), MAX_X/2-6, 10+ (quart_page * nb_quart_page));
            } else if (ticket.projet_id == 3) { // 4P
                doc.triangle(MAX_X/2-10, 4+ (quart_page * nb_quart_page), MAX_X/2-4, 4+ (quart_page * nb_quart_page), MAX_X/2-7, 10+ (quart_page * nb_quart_page), 'FD');                
            }
            
			maxImp = currentMax;
			currentMax = 0;

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
			var imp = ""+(ticket.priority*10);
			doc.text(MAX_X-PADDING+10, 20 + (quart_page * nb_quart_page), imp);

			doc.text(MAX_X-30-PADDING, 35 + (quart_page * nb_quart_page), "Estimation");
			for (var x = 0; x < 5; x++) {
				for (var y = 0; y < 4; y++) {
					if (1+x+y*5 === ticket.estimation_dev) {
						doc.circle(MAX_X-PADDING + x*5, 28 + (y*5) + (quart_page * nb_quart_page), 2, 'FD');						
					} else {
						doc.circle(MAX_X-PADDING + x*5, 28 + (y*5) + (quart_page * nb_quart_page), 2);
					}
				}
			}
			//doc.rect(MAX_X-PADDING, 28 + (quart_page * nb_quart_page), 20, 10);

			doc.text(MAX_X-30-PADDING, 60 + (quart_page * nb_quart_page), "Test");
			for (var x = 0; x < 5; x++) {
				for (var y = 0; y < 4; y++) {
					if (1+x+y*5 === ticket.estimation_test) {
						doc.circle(MAX_X-PADDING + x*5, 53 + (y*5) + (quart_page * nb_quart_page), 2, 'FD');						
					} else {
						doc.circle(MAX_X-PADDING + x*5, 53 + (y*5) + (quart_page * nb_quart_page), 2);
					}
				}
			}
			//doc.rect(MAX_X-PADDING, 53 + (quart_page * nb_quart_page), 20, 10);

			doc.text(PADDING, 30 + (quart_page * nb_quart_page), "Notes");
			doc.rect(PADDING, 31 + (quart_page * nb_quart_page), 120, 30);
			if (ticket.description !== undefined) {
				var line = doc.splitTextToSize(ticket.description, 115);
				doc.text(PADDING+5, 38 + (quart_page * nb_quart_page), line);
			}
			
			nb_quart_page++;

			if(nb_quart_page < 4) {
			    doc.line(PADDING, (nb_quart_page * MAX_Y)/4, MAX_X, (nb_quart_page * MAX_Y)/4);
			}
			
			if(nb_quart_page === 4) {
		    	nb_quart_page = 0;
		    	doc.addPage();
			}

	    }
	    //doc.output('save', 'sample-file.pdf');
	    //doc.output('dataurlnewwindow');
	    var string = doc.output('datauristring');
	    var iframe = "<iframe width='100%' height='100%' src='" + string + "'></iframe>"
	    var x = window.open();
	    x.document.open();
	    x.document.write(iframe);
	    x.document.close();
	}
    }
    
}]);