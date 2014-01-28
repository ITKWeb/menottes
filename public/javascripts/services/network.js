app.factory(
    "Network",
    ["$http", function ($http) {
        
        var isMocked = true, isLoginMocked = true, dateFormat = 'Do MMM YYYY', isUsersMocked = true;
        
        var users = [{"login": "aaa", "password": "aaa"}, {"login": "bbb", "password": "bbb"}, {"login": "ccc", "password": "ccc"}];
        
        var sprints = [
            {id: 0, nom: "Backlog"},
            {id: 1, nom: "Sprint26", planif: moment('2014-01-10'), begin: moment('2014-01-13'), freeze: moment('2014-02-05'), demo: moment('2014-02-11'), objectif: "<ul><li>Livraison en Prod</li><li>Correction de Bug</li><li>Compte Admin</li><li>PPE3 OBservation</li></ul>", team: [{nom:"Nelly"},{nom:"Cuong"},{nom:"Marine"},{nom:"Jérémy"},{nom:"Jean-François", SM: true}]},
        ];
        
        var projects = [{"id": 1, "nom": "Disp'eau", "logo": "logo_itk-vigne.png", "created_at": "2013-07-09T09:36:02.167Z", "updated_at": "2013-07-09T09:36:02.167Z"},
                        {"id": 2, "nom": "Précovision", "logo": "logo_itk-preco.png", "created_at": "2013-07-09T09:36:02.167Z", "updated_at": "2013-07-09T09:36:02.167Z"},
                        {"id": 3, "nom": "4P / Modiva", "logo": "logo_itk-protect.png", "created_at": "2013-07-09T09:36:02.167Z", "updated_at": "2013-07-09T09:36:02.167Z"},
                        {"id": 4, "nom": "Windfield / Météo", " created_at": "2013-07-09T09:36:02.167Z", "updated_at": "2013-07-09T09:36:02.167Z"}];
        
        var polls = [{"id": 1, "nom": "Bière en ville", "description": "petite soirée à 12° au Triskell", "startDate": moment('2013-08-01'), "endDate": moment('2013-08-30'), "creationDate": moment('2013-07-29'), "updateDate": moment('2013-08-15')},
                     {"id": 2, "nom": "Pétanque", "description": "apportez votre triplette !", "startDate": moment('2013-10-01'), "endDate": moment('2013-10-30'), "creationDate": moment('2013-10-01'), "updateDate": moment('2013-10-15'), users: [{nom: "bastien", choix: [2], commentaire: "2 triplettes et un cochonnet"}, {nom: "romain", choix: [2, 3], commentaire: "1 triplette pas de cochonnet"}]}];
        /*
    var completePolls=[
    
    {"id": 1,"open": true,"open_date": "2013-08-30T11: 29: 06.921Z","close_date": "2013-08-30T11: 29: 14.785Z","created_at": "2013-08-30T11: 32: 13.809Z","updated_at": "2013-08-30T11: 32: 13.809Z","participants": [{"id": 1,"created_at": "2013-08-30T11: 32: 18.818Z","updated_at": "2013-08-30T12: 22: 54.339Z","user_id": 3,"choices": [{"id": 1,"name": "monChoix1","created_at": "2013-08-30T11: 27: 48.278Z","updated_at": "2013-08-30T12: 22: 47.870Z","poll_id": 1,"participant_id": 1}]}]},
    
    {"id": 1,"false": true,"open_date": "2013-08-30T11: 29: 06.921Z","close_date": "2013-08-30T11: 29: 14.785Z","created_at": "2013-08-30T11: 32: 13.809Z","updated_at": "2013-08-30T11: 32: 13.809Z","participants": [{"id": 1,"created_at": "2013-08-30T11: 32: 18.818Z","updated_at": "2013-08-30T12: 22: 54.339Z","user_id": 3,"choices": [{"id": 1,"name": "monChoix2","created_at": "2013-08-30T11: 27: 48.278Z","updated_at": "2013-08-30T12: 22: 47.870Z","poll_id": 2,"participant_id": 5}]}]}
         
    ];*/
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
                    tickets = [{"titre":"Client: Compte admin","description":"View du tableau","trac_id":"1460","projet_id":2,"sprint_id":1,"id":1,"priority":3},{"trac_id":"1507","titre":"Serveur - Compte Admin: DAO","description":"Mettre en place les DAO pour remplir le tableau","projet_id":2,"sprint_id":1,"id":2,"priority":2, "etat":  "En cours"},{"titre":"Compte admin: boutton","description":"Changer les boutons d'accès au compte admin","trac_id":"1578","projet_id":2,"sprint_id":1,"id":3,"priority":1}];
                    localStorage.setItem(url, angular.toJson(tickets));
                }
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
            if(isMocked === true) {
                callback(sprints);
            } else {
                $http.get("/sprints/"+projectId)
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
            if(isMocked === true) {
                for (i=0; i<sprints.length; i++) {
                    // == as sprintId is a String and sprints[i].id is an integer
                    if (sprints[i].id == sprintId) {
                        callback(sprints[i]);
                    }
                }
            }
        }

        function createSprint(sprint) {
            sprints.push(sprint);
            var data = {"nom": sprint.nom};
            if (isMocked === true) {
                data.id = sprints[sprints.length-1].id+1; // calculate id for new mocked project
                sprints.push(data); // add new project to mocked projects list
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
                var exitepas;
                while ((i < tickets.length) && (tickets[i].id != ticketId) ){
                    i++;
                }
                
                console.log('i = '+ i +' / '+tickets.length);
                callback(tickets[i]);
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
        }
        
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
        }
        
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
            createSprint: function(sprint) {
                createSprint(sprint);
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
            }
        }
        
    }]);
