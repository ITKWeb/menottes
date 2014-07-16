app.factory(
	"Network",
	["$http", function ($http) {

		var isMocked = true, isLoginMocked = true, dateFormat = 'Do MMM YYYY', isUsersMocked = true;

		var users = [{"login": "aaa", "password": "aaa"}, {"login": "bbb", "password": "bbb"}, {"login": "ccc", "password": "ccc"}];

		var urlITK = "itk_info_team";
		var itk_info_team;
		var stringITK=[{nom:"Romain", participation:[0,50,50,0], SM:[false, false, false, false]},{nom:"Manu", participation:[0,20,0,60], SM:[false, false, false, false]},{nom:"Marine", participation:[0,80,0,20], SM:[false, false, false, false]},{nom:"Eric", participation:[0,100,0,0], SM:[false, false, false, false]},{nom:"Jean-François", participation:[0,100,0,0], SM:[false, true, false, false]}];
		localStorage.setItem(urlITK, angular.toJson(stringITK));


		var sprints;
		var url = "/sprints/"+2;
		var stringSprint = localStorage.getItem(url);
		// no data saved, store fake tickets
		sprints = [
			{id: 0, nom: "Backlog"},
			{id: 1, nom: "Sprint27", planif: moment('2014-03-28'), begin: moment('2014-03-31'), freeze: moment('2014-04-23'), demo: moment('2014-04-29'), objectif: "Patch de la Prod Compte Admin PPE3 OBservation", team: [{nom:"Romain"},{nom:"Manu"},{nom:"Marine"},{nom:"Éric"},{nom:"Jean-François", SM: true}]},
			{id: 2, nom: "Sprint28", planif: moment('2014-05-12'), begin: moment('2014-05-13'), freeze: moment('2014-06-06'), demo: moment('2014-06-10'), objectif: "Mise en Prod PPE3 Observation, Sécurisation de l'appli", team: [{nom:"Romain"},{nom:"Manu"},{nom:"Marine"},{nom:"Éric"},{nom:"Nelly"},{nom:"Jean-François", SM: true}]}];
		localStorage.setItem(url, angular.toJson(sprints));

		var projects = [{"id": 1, "nom": "Disp'eau", "logo": "logo_itk-vigne.png", "created_at": "2013-07-09T09:36:02.167Z", "updated_at": "2013-07-09T09:36:02.167Z"},
						{"id": 2, "nom": "Précovision", "logo": "logo_itk-preco.png", "created_at": "2013-07-09T09:36:02.167Z", "updated_at": "2013-07-09T09:36:02.167Z"},
						{"id": 3, "nom": "4P / Modiva", "logo": "logo_itk-protect.png", "created_at": "2013-07-09T09:36:02.167Z", "updated_at": "2013-07-09T09:36:02.167Z"},
						{"id": 4, "nom": "Windfield / Météo", " created_at": "2013-07-09T09:36:02.167Z", "updated_at": "2013-07-09T09:36:02.167Z"}];

		var polls = [{"id": 1, "nom": "Bière en ville", "description": "petite soirée à 12° au Triskell", "startDate": moment('2013-08-01'), "endDate": moment('2013-08-30'), "creationDate": moment('2013-07-29'), "updateDate": moment('2013-08-15')},
					 {"id": 2, "nom": "Pétanque", "description": "apportez votre triplette !", "startDate": moment('2013-10-01'), "endDate": moment('2013-10-30'), "creationDate": moment('2013-10-01'), "updateDate": moment('2013-10-15'), users: [{nom: "bastien", choix: [2], commentaire: "2 triplettes et un cochonnet"}, {nom: "romain", choix: [2, 3], commentaire: "1 triplette pas de cochonnet"}]}];

		var tickets;

		//localStorage.clear();
		if (typeof (localStorage) === 'undefined') {
			alert('Votre navigateur ne supporte pas le localStorage.');
		} else {
			try { // init the local storage
				var url = "/tickets/"+3+"/"+0;
				var stringTickets = localStorage.getItem(url);
				// no data saved, store fake tickets
				if (stringTickets === null) {
					tickets = [{"id": 1,"titre": "Documentation Agricommand","description": "Cuong doit écrire toute la doc car Nelly a la flemme","estimation_dev": 5,"estimation_test": 10, "tempsPris": null,"created_at": "2013-07-09T12:12:25.811Z","updated_at": "2013-07-09T12:12:25.811Z","projet_id": 3, "sprint_id" : 0, "personne":  "Cuong", "priority":  1, "etat":  "A tester"}, {"id": 2,"titre": "Design de l'application","description": "Mise en place de licornes partout sur le site","estimation_dev": 8,"estimation_test": 10,"tempsPris": null,"created_at": "2013-07-09T12:12:25.811Z","updated_at": "2013-07-09T12:12:25.811Z","projet_id": 3, "sprint_id" : 0, "personne":  "Laurent", "priority":  2, "etat":  "En cours"}];
					localStorage.setItem(url, angular.toJson(tickets));
				}


				url = "/tickets/"+2+"/"+0;
				stringTickets = localStorage.getItem(url);
				// no data saved, store fake tickets
				if (stringTickets === null) {
					tickets = [  {"titre": "MAQ: Compte admin","description": "Revoir les vues du compte Admin avec Agnès",
								  "trac_id": "1460",
								  "projet_id": 2,
								  "sprint_id": 0,
								  "id": 1,
								  "priority": 3,
								 },
							   {
								   "trac_id": "1407",
								   "titre": "ERGO - Chartre Graphique iTKPreco",
								   "description": "Rajouter quelques vues, (faire les CSS?)",
								   "projet_id": 2,
								   "sprint_id": 0,
								   "id": 2,
								   "priority": 2,
							   },
							   {
								   "titre": "Pdf générique ITK",
								   "description": "Maquette des nouvelles couleurs du Pdf iTK",
								   "trac_id": "1378",
								   "projet_id": 2,
								   "sprint_id": 0,
								   "id": 3,
								   "priority": 1,
							   }
							  ]
					localStorage.setItem(url, angular.toJson(tickets));
				}

				url = "/tickets/"+2+"/"+1;
				stringTickets = localStorage.getItem(url);
				// no data saved, store fake tickets
				if (stringTickets === null) {
					tickets = [{"trac_id":"1101","titre":"Mise à jour Lexagri","projet_id":2,"sprint_id":1,"id":1,"priority":23},{"titre":"Réparer le déploiement en dev et test","trac_id":"1512","projet_id":2,"sprint_id":1,"id":2,"priority":22},{"history_id":"211","titre":"BDD:  stade Pateux mou pour le blé dur d'hiver","description":"devrait être entre mi laiteux et récolte. A corriger en PROD","trac_id":"1499","projet_id":2,"sprint_id":1,"id":3,"priority":21},{"history_id":"202","titre":"BDD: Vérifier l'état du parcellaire d'un client","description":"parcellaire non valide sur la Prod.","trac_id":"1501","projet_id":2,"sprint_id":1,"id":4,"priority":20},{"history_id":"197","titre":"Stat: Comptes de test","description":"vérifier l'entreprise des comptes de test (tc1, tctest, DEMO, etc...)","trac_id":"1500","projet_id":2,"sprint_id":1,"id":5,"priority":19},{"history_id":"200","titre":"Changer les logs","description":"A appliquer sur la prod","trac_id":"1502","projet_id":2,"sprint_id":1,"id":6,"priority":18},{"history_id":"208","titre":"Mise à jour des règles de contrôle","description":"PAtch à appliquer sur la prod","trac_id":"1508","projet_id":2,"sprint_id":1,"id":7,"priority":17},{"history_id":"209","titre":"R14","description":"rajout d'une règle drools, appliquer sur la prod","trac_id":"1509","projet_id":2,"sprint_id":1,"id":8,"priority":16},{"history_id":"209","titre":"R15","description":"Rajout d'une règle drools, appliquer sur la prod","trac_id":"1510","projet_id":2,"sprint_id":1,"id":9,"priority":15},{"history_id":"210","titre":"Mise à jour du texte d'aide","description":"à propos des contrôle des précos, appliquer sur la prod","trac_id":"1511","projet_id":2,"sprint_id":1,"id":10,"priority":14},{"titre":"PPE2: liste des cibles spécifiques","description":"Observations, liste des adventices spécifique","trac_id":"1398","projet_id":2,"sprint_id":1,"id":11,"priority":13},{"titre":"PPE3Obs: maladie","trac_id":"1415","projet_id":2,"sprint_id":1,"id":12,"priority":12},{"titre":"PPE3Obs: désherbage","trac_id":"1418","projet_id":2,"sprint_id":1,"id":13,"priority":11},{"titre":"PPE3Obs: vue synthétique","description":"tableau récapitulatif","trac_id":"1416","projet_id":2,"sprint_id":1,"id":14,"priority":10},{"titre":"BUG: mise à jour de la table des observations","description":"Disparition d'une obs après modification","trac_id":"1491","projet_id":2,"sprint_id":1,"id":15,"priority":9},{"titre":"Fiche technique","description":"Afficher les informations concernant les 2 Znts","trac_id":"1495","projet_id":2,"sprint_id":1,"id":16,"priority":8},{"history_id":"196","titre":"Pdf de préco sans parcelle","description":"empecher l'édition pdf depuis le tableau recap d'une préco sans parcelle","trac_id":"1505","projet_id":2,"sprint_id":1,"id":17,"priority":7},{"history_id":"196","titre":"Pdf de préco sans parcelle","description":"Empêcher l'édition pdf d'une préco sans parcelle depuis le calendrier","trac_id":"1506","projet_id":2,"sprint_id":1,"id":18,"priority":6},{"history_id":"31","titre":"Association parcellaire et pdf client","description":"Bloquer l'édition parcellaire d'une préco après l'édition d'un pdf client","trac_id":"1507","projet_id":2,"sprint_id":1,"id":19,"priority":5},{"history_id":"207","titre":"Supprimer le contrôle du numéro de téléphone","description":"ne plus bloquer les numéros en 06 et 07","trac_id":"1503","projet_id":2,"sprint_id":1,"id":20,"priority":4},{"titre":"Investiguer la portée d'un refactor des plots","description":"Dette technique","trac_id":"1496","projet_id":2,"sprint_id":1,"id":21,"priority":3},{"titre":"Nettoyage de la table des variétés","description":"supprimer les tables plus utilisées","trac_id":"1497","projet_id":2,"sprint_id":1,"id":22,"priority":2},{"history_id":"77","titre":"Taille du champs Nom de la préco","description":"champs trop court dans le PPE création Préco","trac_id":"1504","projet_id":2,"sprint_id":1,"id":23,"priority":1},{"titre":"Compte Admin: page des TC","description":"Faire la première page du compte admin","trac_id":"1485","projet_id":2,"sprint_id":1,"id":24,"priority":0}];
					localStorage.setItem(url, angular.toJson(tickets));
				}
				
				tickets = [{"titre":"[Sécurité] Rajouter un serveur apache","projet_id":2,"sprint_id":2,"id":1,"priority":26,"trac_id":"1529"},{"titre":"[Sécurité] HTTPS","trac_id":"1530","projet_id":2,"sprint_id":2,"id":2,"priority":25},{"titre":"[sécurité] Redémarrer automatiquement le tomcat","trac_id":"1531","projet_id":2,"sprint_id":2,"id":3,"priority":24},{"titre":"[Sécurité] installer des sondes","description":"sondes pour investiguer les fuites mémoires","trac_id":"1532","projet_id":2,"sprint_id":2,"id":4,"priority":23},{"titre":"Htech - Mise à jour Lexagri","description":"Participation à la réunion de concertation sur la modification des tables mi-Juin?","trac_id":"1520","projet_id":2,"sprint_id":2,"id":5,"priority":22},{"titre":"Réunion mise à plat BDD","description":"#1294 (famr/company), #1496 (plots)","trac_id":"1294, 1496","projet_id":2,"sprint_id":2,"id":6,"priority":21},{"titre":"Création d'un compte mail chez OVH","description":"pour envoyer des mails pour compte Admin","trac_id":"1519","projet_id":2,"sprint_id":2,"id":7,"priority":20},{"titre":"BDD: produit non homologué","description":"Ajout de produit non homologué en base","trac_id":"1537","projet_id":2,"sprint_id":2,"id":9,"priority":19},{"titre":"iTK-Préco: Saisie de produit non homologué","description":"Nouvelle ligne dans la popup edition traitement","trac_id":"1527","projet_id":2,"sprint_id":2,"id":8,"priority":18},{"titre":"[Pdf] mettre à jour le pdf","description":"en fonction du PPE3 Obersation, texte concaténant les informations contenues dans le tableau synthétique des observations","trac_id":"1534","projet_id":2,"sprint_id":2,"id":16,"priority":17},{"history_id":"220","titre":"pdf préco :","description":"ajouter un champ d'information dans la rubrique Entreprise (company) BDD + pdf","trac_id":"1528","projet_id":2,"sprint_id":2,"id":10,"priority":16},{"history_id":"215","titre":"PPE3 Observation:déplier une cible","trac_id":"1521","projet_id":2,"sprint_id":2,"id":11,"priority":15,"description":"Clic sur le bandeau plutôt que sur le triangle"},{"history_id":"217","titre":"PPE3 obs : infobulle à rajouter","description":"absence des infos bulles \"Seuil de déclenchement\"","trac_id":"1523","projet_id":2,"sprint_id":2,"id":12,"priority":14},{"history_id":"214","titre":"PPE2 obs : date postérieure","description":"date postérieures à la date du jour grisées mais clicable","trac_id":"1524","projet_id":2,"sprint_id":2,"id":13,"priority":13},{"history_id":"218","titre":"Obs : vue synthétique","description":"absence du libellé de la rubrique Parcelle","trac_id":"1525","projet_id":2,"sprint_id":2,"id":14,"priority":12},{"history_id":"212","titre":"Css PPE2 observation : non alignement","trac_id":"1526","projet_id":2,"sprint_id":2,"id":15,"priority":11},{"titre":"Mise en prod","description":"PPE3","trac_id":"1533","projet_id":2,"sprint_id":2,"id":17,"priority":10},{"titre":"Amélioration migration","description":"nom table identique","trac_id":"1375","projet_id":2,"sprint_id":2,"id":18,"priority":9},{"titre":"Améliorer les Fiches techniques (2 ZNTs)","trac_id":"1495","projet_id":2,"sprint_id":2,"id":19,"priority":8},{"titre":"nettoyage de la table des variétés","trac_id":"1497","projet_id":2,"sprint_id":2,"id":20,"priority":7},{"titre":"Préco sans parcelle:","history_id":"196","trac_id":"1505","projet_id":2,"sprint_id":2,"id":21,"priority":6,"description":"empêcher l'édition de pdf client (depuis le tableau)"},{"titre":"Préco sans parcelle:","history_id":"196","trac_id":"1506","projet_id":2,"sprint_id":2,"id":22,"priority":5,"description":"empêcher l'édition de pdf client (depuis le calendrier)"},{"titre":"Bloquer l'association parcellaire","history_id":"31","trac_id":"1507","projet_id":2,"sprint_id":2,"id":23,"priority":4,"description":"après l'édition d'un pdf client"},{"titre":"Fuite mémoire et erreur client","description":"lors la navigation dans les onglets du desktop","trac_id":"1513","projet_id":2,"sprint_id":2,"id":24,"priority":3},{"titre":"Terminer le refactor des tableaux","trac_id":"1514","projet_id":2,"sprint_id":2,"id":25,"priority":2},{"titre":"Refactor de la BDD","trac_id":"1535","projet_id":2,"sprint_id":2,"id":26,"priority":1},{"titre":"Refactor du client","trac_id":"1536","projet_id":2,"sprint_id":2,"id":27,"priority":0}];
				localStorage.setItem("/tickets/2/2", angular.toJson(tickets));
				
				url = "/tickets/"+1+"/"+0;
				stringTickets = localStorage.getItem(url);
				// no data saved, store fake tickets
				if (stringTickets === null) {
					tickets = [{"id": 1,"titre": "Redesign de l'application","description": "Mise en place de poney partout sur le site à la place des licornes","estimation_dev": 0.5,"estimation_test": 10,"tempsPris": null,"created_at": "2013-07-09T12:12:25.811Z","updated_at":"2013-07-09T12:12:25.811Z","projet_id": 1, "sprint_id" : 0, "personne": "Jennifer", "priority": 1, "etat": "En cours"}];
					localStorage.setItem(url, angular.toJson(tickets));
				}

			} catch (e) {
				if (e == QUOTA_EXCEEDED_ERR) {
					alert('Taille max de données sauvegardées atteinte !');
				}
			}
		}

		function login(callback, errorCallback, userlogin, password) {
			if (isLoginMocked === true) {
				if ((userlogin === "aaa") && (password === "aaa")) {
					callback(
						{"id": 1, "nom": "Test", "login": "aaa", "email": "menottes@itkweb.com"}
					);
				} else {
					callback({});
				}
			} else {
				$http.post("/users", {login: userlogin, password: password})
				.success(callback)
				.error(errorCallback);
			}
		}

		function getUsers(callback) {
			if (isUsersMocked === true) {
				callback(users);
			} else {
				/*FAIRE LA PARTIE SERVEUR*/
				console.log("FAIRE LA PARTIE SERVEUR");
			}
		}

		function getProjets(callback) {
			if(isMocked === true) {
				callback(projects);
			} else {
				$http.get("/projets")
				.success(callback)
				.error(
					function(data, status, headers, config) {
						console.log(data, status, headers, config);
					}
				);
			}
		}
		function getProjet(callback, projectId) {
			console.log("GetProjet called with: "+projectId);
			if(isMocked === true) {
				for (i=0;i<projects.length; i++) {
					// == as projectId is a String and projects[i].id is an integer
					if (projects[i].id == projectId) {
						callback(projects[i]);
					}
				}
			}
		}
		function getSelectedProjetIconPath(callback) {
			/*
              if (isMocked === true) {
                for(var i=0; i<projects.lenght; i++) {
            if (projects[i].id === projectId) {
            var iconPath = 'images/'+ projects[i].icon;
            callback(iconPath);
            }
            }
            */
			callback('images/logo_itk-preco.png');
		}
		function getPolls(callback) {
			if(isMocked === true) {
				callback(polls);
			} else {
				$http.get("/polls")
				.success(callback)
				.error(
					function(data, status, headers, config) {
						console.log(data, status, headers, config);
					}
				);
			}
		}

		function getPoll(callback, pollId) {
			if(isMocked === true) {
				for (i=0;i<polls.length;i++) {
					if (polls[i].id == pollId) {
						callback(polls[i]);
					}
				}
			} else {
				$http.get("/polls/"+pollId)
				.success(callback)
				.error(
					function(data, status, headers, config) {
						console.log(data, status, headers, config);
					}
				);
			}
		}

		function getSprints(callback, projectId) {
			var url = "/sprints/"+projectId;
			if(isMocked === true) {
				callback(angular.fromJson(localStorage.getItem(url)));
			} else {
				$http.get(url)
				.success(callback)
				.error(
					function(data, status, headers, config) {
						console.log(data, status, headers, config);
					}
				);
			}
		}

		function getSprint(callback, projectId, sprintId) {
			console.log("GetSprint called with: "+projectId+"/"+sprintId);
			var url = "/sprints/"+projectId;
			if(isMocked === true) {
				sprints = angular.fromJson(localStorage.getItem(url));
				for (i=0; i<sprints.length; i++) {
					// == as sprintId is a String and sprints[i].id is an integer
					if (sprints[i].id == sprintId) {
						callback(sprints[i]);
						break;
					}
				}
			}
		}

		function saveSprint(sprint) {
			if (isMocked === true) {
				if (sprint.id === undefined) {
					// new sprint
					sprint.id = sprints[sprints.length-1].id+1; // calculate id for new mocked project
					sprints.push(sprint);
					//localStorage.setItem("sprints/")
				} else {
					for (var i = 0; i < sprints.length; i++) {
						if (sprints[i].id === sprint.id) {
							sprints[i] = sprint;
						}
					}
				}
			}
		}



		function getTickets(callback, projectId, sprintId) {
			var url = "/tickets/"+projectId+"/"+sprintId;
			if(isMocked === true) {
				tickets = angular.fromJson(localStorage.getItem(url));
				callback(tickets);
			} else {
				$http.get(url)
				.success(callback)
				.error(
					function(data, status, headers, config) {
						console.log(data, status, headers, config);
					}
				);
			}
		}

		function getTicketById(callback, projectId, sprintId, ticketId) {
			if(isMocked === true) {
				tickets = angular.fromJson(localStorage.getItem("/tickets/"+projectId+"/"+sprintId));
				console.log('ticketId '+ticketId);
				var i = 0;
				if (tickets === null) {
					callback({});
				} else {
					while ((i < tickets.length) && (tickets[i].id != ticketId) ){
						i++;
					}

					callback(tickets[i]);
				}
				/* if (tickets[i].id == ticketId) // Do not work as ticketId is a string and ticket.id an integer
        {
          callback(tickets[i]);
        }//test*/
			} else {
				//a changer
				var url = "/tickets/"+projectId+"/"+sprintId;
				$http.get(url)
				.success(callback)
				.error(
					function(data, status, headers, config) {
						console.log(data, status, headers, config);
					}
				);
			}
		}

		function getTicketsByPriority(callback, priorite) {
			if(isMocked === true) {
				var i;
				for(i=0;i < tickets.length;i++){
					if(tickets[i].priority == priorite){
						callback(tickets[i]);
					}
				}
			} else {
				//TODO
			}
		}

		function createProject(project) {

			var data = {"nom": project.nom};
			if (isMocked === true) {
				data.id = projects[projects.length-1].id+1; // calculate id for new mocked project
				projects[projects.length] = project; // add new project to mocked projects list
			} else {
				var url = "/projets/";
				$http.post(url, data)
				.error(
					function(data, status, headers, config) {
						console.log(data, status, headers, config);
					}
				);
			}
		}

		function createTicket(ticket) {

			var data = {"titre": ticket.titre, "description": ticket.description, "trac_id": ticket.trac_id, "importance": ticket.priority};
			if (isMocked === true) {
				var url = "/tickets/"+ticket.projet_id+"/"+ticket.sprint_id;
				tickets = angular.fromJson(localStorage.getItem(url));
				console.log(tickets);
				
				var maxId=0;
				//var maxPriority=0;
				for (var i = 0; i < tickets.length; i++) {
					if(maxId < tickets[i].id) {
						maxId = tickets[i].id;
					}
					//                    if(maxPriority < tickets[i].priority) {
					//                        maxPriority = tickets[i].priority;
					//                    }
					tickets[i].priority += 1;
				};
				ticket.id = maxId+1;
				ticket.priority = 0;
				tickets[tickets.length] = ticket;
				localStorage.setItem(url, angular.toJson(tickets));
			} else {
				var url = "/tickets/";
				$http.post(url, data)
				.error(
					function(data, status, headers, config) {
						console.log(data, status, headers, config);
					}
				);
			}
		};

		function saveTicket(ticket) {
			var url = "/tickets/"+ticket.projet_id+"/"+ticket.sprint_id;
			tickets = angular.fromJson(localStorage.getItem(url));
			for (var i = 0; i < tickets.length; i++) {
				if (tickets[i].id === ticket.id) {
					tickets[i] = ticket;
				}
			}
			localStorage.setItem(url, angular.toJson(tickets));
		};

		function deleteTicket(ticket) {
			var url = "/tickets/"+ticket.projet_id+"/"+ticket.sprint_id;
			tickets = angular.fromJson(localStorage.getItem(url));
			for (var i = 0; i < tickets.length; i++) {
				if (tickets[i].id === ticket.id) {
					tickets.splice(i, 1);
				}
			}
			localStorage.setItem(url, angular.toJson(tickets));
		};

		function createPoll(poll) {

			var data = {"nom": poll.nom, "description":poll.description, "startDate":poll.startDate, "endDate":poll.endDate};
			if (isMocked === true) {
				data.id = polls[polls.length-1].id+1; // calculate id for new mocked poll
				var now = moment();
				data.creationDate = now;
				data.updateDate = now;
				polls[polls.length] = data; // add new poll to mocked polls list
			} else {
				var url = "/polls/";
				$http.post(url, data)
				.error(
					function(data, status, headers, config) {
						console.log(data, status, headers, config);
					}
				);
			}
		};

		function getItkTeam(callback) {
			callback(angular.fromJson(localStorage.getItem(urlITK)));
		};
		function saveItkTeam(newTeam) {
			localStorage.setItem(urlITK, angular.toJson(newTeam));
		};

		return {
			login: function(callback, errorCallback, log, pass) {
				login(callback, errorCallback, log, pass);
			},
			getUsers: function(callback) {
				getUsers(callback);
			},
			getProjets: function(callback) {
				getProjets(callback);
			},
			getProjet: function(callback, projectID) {
				getProjet(callback, projectID);
			},
			getSelectedProjetIconPath: function(callback) {
				getSelectedProjetIconPath(callback);
			},
			getPolls: function(callback) {
				getPolls(callback);
			},
			getPoll: function(callback, pollId) {
				getPoll(callback, pollId);
			},
			getSprints: function(callback, projectId) {
				getSprints(callback, projectId);
			},
			getSprint: function(callback, projectId, sprintId) {
				getSprint(callback, projectId, sprintId);
			},
			saveSprint: function(sprint) {
				saveSprint(sprint);
			},
			getTickets: function(callback, projectId, sprintId) {
				getTickets(callback, projectId, sprintId);
			},
			saveTickets: function() {
				saveTickets();
			},
			getTicketsByPriority: function(callback, priority){
				getTicketsByPriority(callback, priority);
			},
			getTicketById: function(callback, projectId, sprintId, ticketId) {
				getTicketById(callback, projectId, sprintId, ticketId);
			},
			saveTicket: function(ticket) {
				saveTicket(ticket);
			},
			deleteTicket: function(ticket) {
				deleteTicket(ticket);
			},
			createProject: function(project) {
				createProject(project);
			},
			createTicket: function(ticket) {
				createTicket(ticket);
			},
			createPoll: function(poll) {
				createPoll(poll);
			},
			getDateFormat: function() {
				return dateFormat;
			},
			getItkTeam: function(callback) {
				getItkTeam(callback);
			}
		}
	}
	]);
