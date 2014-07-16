app.factory("Pdf", ['Network', function ($network) {

	var doc = new jsPDF('landscape');

	var PADDING = 10, MAX_X = 290, MAX_Y = 200, ticketWidth = MAX_X / 2, ticketHeight = MAX_Y / 2;

	/** tri des tickets afin de les avoir dans l'ordre une fois découpé
	*/
	var sortTickets = function (tickets) {
		// tri des tickets
		var sortedTickets = tickets.sort(function sortByPriority(key1, key2) {
			// tri décroissant par priorité
			return key2.priority - key1.priority;  
		});

		// trier pour avoir les tickets d'en l'ordre une fois imprimé / découpé
		if (tickets.length > 4) {
			var maxpriority = sortedTickets[0].priority + 1; // 0 exist
			var numberOfPage = maxpriority / 4;
			var additionalPage = maxpriority % 4;

			var currentPriority;
			var id = 0;
			for (var idColumn = 1; idColumn < 5; idColumn ++){				
				currentPriority = idColumn;
				var nbPage;
				if (additionalPage != 0) {
					additionalPage = additionalPage-1;
					nbPage = numberOfPage+1;
				} else {
					nbPage = numberOfPage;
				}
				for (var i2=1; i2<nbPage; i2++) {
					if (id < maxpriority) {
						sortedTickets[id].pdfPriority = currentPriority;		
						id++;
						currentPriority = currentPriority+4;
					}
				}
			}

			sortedTickets = sortedTickets.sort(function sortByPdf(key1, key2){
				return key1.pdfPriority - key2.pdfPriority;
			});
		}
		//console.log(sortedTickets);
		return sortedTickets;
	};

	/* determine la position gauche, milieu et droite des tickets pour en avoir 4 par pages
	*/
	var getPosition = function (ticketId) {
		var shifting_X = (ticketId%2) * ticketWidth;
		var shifting_Y = (ticketId < 2 ? 0: 1 ) * ticketHeight;

		return [[PADDING + shifting_X, shifting_Y], [ticketWidth / 2 + shifting_X, shifting_Y], [ticketWidth + shifting_X - PADDING, shifting_Y]];
	};

	// display the logo of the project in the middle of the ticket
	var displayLogo = function(position, projectId) {
		/*
              var iconP;
                $network.getSelectedProjetIconPath(function(iconPath) {
                iconP = iconPath;
                });
		      var imgData = 'data:image/png;base64,'+ Base64.encode(iconP);
            */

		if (projectId === 1) { // Dispeau
			doc.circle(position[0] - 7, 10 + position[1], 3, 'FD');
			doc.triangle(position[0]-10, 10+ position[1], position[0]-4, 10+ position[1], MAX_X/2-7, 4+ position[1], 'FD');
		} else if (projectId === 2) { // Preco
			doc.rect(position[0]-10, position[1]+4, 8, 4);
			doc.rect(position[0]-8,  position[1] + 5, 4, 1, 'FD');
			doc.triangle(position[0]-8, position[1] + 8, position[0]-4, position[1] + 8 , position[0] -6, position[1] + 10 );
		} else if (projectId == 3) { // 4P
			doc.triangle(position[0]-10, 4+ position[1], position[0]-4, 4+ position[1], position[0]-7, 10+ position[1], 'FD');
		}
	};

	return {
		printTickets: function (tickets) {

			/*console.log(doc);*/
			var sortedTickets = sortTickets(tickets);
			var ticket;
			var nb_tickets = 0;

			for(var i=0; i<sortedTickets.length; i++) {

				// get the left, middle and right position for elements
				var positions = getPosition(nb_tickets);
				var leftPosition = positions[0];
				var middlePosition = positions[1];
				var rightPosition = positions[2];

				ticket = sortedTickets[i];

				// display the logo of the project
				displayLogo(middlePosition, ticket.projet_id);

				// Histoire utilisateur associée
				var hut =  "Histoire:";
				if (ticket.history_id !== undefined) {
					hut += ticket.history_id;
				}
				doc.text(leftPosition[0], 10 + leftPosition[1],hut);

				// numero de ticket
				var tracid = "#";
				if (ticket.trac_id !== undefined) {
					tracid += ticket.trac_id;
				}
				doc.text(rightPosition[0]-35, 10 + rightPosition[1], tracid);


				if(ticket.titre.indexOf('-') > -1) {
					var splitedTitle = ticket.titre.split('-');
					doc.setFontStyle('bold');
					doc.text(leftPosition[0] + 50, 10 + leftPosition[1], splitedTitle[0]);
					doc.setFontStyle('normal');
					doc.text(leftPosition[0] - 15, 20 + leftPosition[1], splitedTitle[1]);
				} else {
					doc.setFontStyle('bold');
					doc.text(leftPosition[0], 20 + leftPosition[1], ticket.titre);
					doc.setFontStyle('normal');
				}

				/*doc.text(rightPosition[0]-30, 20 + rightPosition[1], "Importance");
				doc.rect(rightPosition[0], 13 + rightPosition[1], 20, 10);
				var imp = ""+(ticket.priority*10);
				doc.text(rightPosition[0]+10, 20 + rightPosition[1], imp);
				*/

				doc.text(rightPosition[0] - 35, 20 + rightPosition[1], "Estimation");
				doc.rect(rightPosition[0] - 7, 13 + rightPosition[1], 15, 10);
				/*
				for (var x = 0; x < 5; x++) {
					for (var y = 0; y < 4; y++) {
						if (1+x+y*5 === ticket.estimation_dev) {
							doc.circle(MAX_X-PADDING + x*5, 28 + (y*5) + rightPosition[1], 2, 'FD');
						} else {
							doc.circle(MAX_X-PADDING + x*5, 28 + (y*5) + rightPosition[1], 2);
						}
					}
				}
				*/

				/*doc.text(MAX_X-30-PADDING, 60 + rightPosition[1], "Test");
				for (var x = 0; x < 5; x++) {
					for (var y = 0; y < 4; y++) {
						if (1+x+y*5 === ticket.estimation_test) {
							doc.circle(MAX_X-PADDING + x*5, 53 + (y*5) + rightPosition[1], 2, 'FD');
						} else {
							doc.circle(MAX_X-PADDING + x*5, 53 + (y*5) + rightPosition[1], 2);
						}
					}
				}
				*///doc.rect(MAX_X-PADDING, 53 + rightPosition[1], 20, 10);

				// conditions d'acceptations
				doc.text(leftPosition[0], 30 + leftPosition[1], "Cond. départ");
				doc.rect(leftPosition[0], 31 + leftPosition[1], 125, 25);
				/*if (ticket.description !== undefined) {
					var line = doc.splitTextToSize(ticket.description, 115);
					doc.text(leftPosition[0]+5, 38 + leftPosition[1], line);
				}*/

				// conditions d'acceptation
				doc.text(leftPosition[0], 65 + leftPosition[1], "Cond. OK");
				doc.rect(leftPosition[0], 66 + leftPosition[1], 125, 30);
				/*if (ticket.description !== undefined) {
					var line = doc.splitTextToSize(ticket.description, 115);
					doc.text(leftPosition[0]+5, 38 + leftPosition[1], line);
				}*/

				nb_tickets++;

				if(nb_tickets === 2) {
					doc.line(ticketWidth, 0, ticketWidth, MAX_Y);
				}
				if(nb_tickets === 3) {
					doc.line(0, ticketHeight, MAX_X, ticketHeight);
				}
				if(nb_tickets === 4) {
					nb_tickets = 0;
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
