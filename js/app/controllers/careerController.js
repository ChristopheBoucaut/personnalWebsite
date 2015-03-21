"use strict";

(function(angular) {
    angular.module("personnalWebsiteControllers").controller("CareerController", [
        "$scope",
        function($scope) {
            var stepsCareer = [
                {
                    type: "professional",
                    title: "Développeur web",
                    organisation: "Geneanet",
                    description: "devWebGeneanet.html",
                    keywords: ["elasticsearch", "api twitter", "cordova", "angularJS", "symfony2", "API rest"],
                    dateStart: new Date("2013-09-02"),
                    dateEnd: null,
                    links: {
                        "Sauvons nos tombes": "http://www.geneanet.org/sauvons_nos_tombes",
                        "customCamera (plugin cordova)": "https://github.com/geneanet/customCamera",
                        "customCamera (plugin angularJS)": "https://github.com/geneanet/customCameraAngular"
                    }
                },
                {
                    type: "professional",
                    title: "Développeur web stagiaire",
                    organisation: "Geneanet",
                    description: "stageDevWebGeneanet.html",
                    keywords: ["prestashop", "intranet", "SCRUM", "responsive", "webservices"],
                    dateStart: new Date("2013-03-18"),
                    dateEnd: new Date("2013-08-23"),
                    links: {
                        "Geneanet boutique": "http://www.geneanet.org/boutique/",
                        "Exemple de surcharge pour Prestashop" : "http://blog-de-shimrra.christophe-boucaut.fr/?p=586"
                    }
                },
                {
                    type: "volunteer",
                    title: "Développeur bénévole",
                    organisation: "Esperance rando",
                    description: "devEsperanceRando.html",
                    keywords: ["wordpress", "surcharge de thème"],
                    dateStart: new Date("2012-11-03"),
                    dateEnd: new Date("2013-04-01"),
                    links: {
                        "Esperance Rando": "http://esperancerando.fr/"
                    }
                },
                {
                    type: "professional",
                    title: "Employé saisonnié",
                    organisation: "Soufflet",
                    description: "saisonnieSoufflet.html",
                    keywords: ["helpdesk", "preparation PC", "imprimante réseau"],
                    dateStart: new Date("2012-08-01"),
                    dateEnd: new Date("2012-08-31"),
                    links: {
                        "Groupe Soufflet": "http://www.soufflet.com/"
                    },
                    hidePrint: true
                },
                {
                    type: "professional",
                    title: "Employé saisonnié",
                    organisation: "EDF",
                    description: "saisonnieEdf.html",
                    keywords: ["documentation"],
                    dateStart: new Date("2012-07-01"),
                    dateEnd: new Date("2012-07-31"),
                    hidePrint: true
                },
                {
                    type: "professional",
                    title: "Développeur web stagiaire",
                    organisation: "Geneanet",
                    description: "stageDevWebGeneanet2.html",
                    keywords: ["PHP", "framework maison", "autonomie"],
                    dateStart: new Date("2012-04-16"),
                    dateEnd: new Date("2012-06-15"),
                    links: {
                        Geneastar: "http://www.geneastar.org/"
                    },
                    hidePrint: true
                },
                {
                    type: "volunteer",
                    title: "Développeur bénévole",
                    organisation: "Gatewars",
                    description: "devGatewars.html",
                    keywords: ["initiation au developpement web"],
                    dateStart: new Date("2011-08-01"),
                    dateEnd: new Date("2012-02-01"),
                    links: {
                        Gatewars: "http://gatewars.eu/"
                    },
                    hidePrint: true
                },
                {
                    type: "professional",
                    title: "Employé saisonnié",
                    organisation: "Soufflet",
                    description: "saisonnieSoufflet2.html",
                    keywords: ["helpdesk", "preparation PC"],
                    dateStart: new Date("2011-08-01"),
                    dateEnd: new Date("2011-08-31"),
                    links: {
                        "Groupe Soufflet": "http://www.soufflet.com/"
                    },
                    hidePrint: true
                },
                {
                    type: "volunteer",
                    title: "Hackathon de Saint-Quentin",
                    organisation: "CloudIn'tra",
                    description: "devCloudintra.html",
                    keywords: ["Symfony 2", "Bootstrap"],
                    dateStart: new Date("2014-04-14"),
                    dateEnd: new Date("2014-04-18"),
                    links: {
                        "CloudIn'tra": "http://cloudintra.fr/",
                        "Reportage sur l'évènement (7min30)": "http://www.matele.tv/default.asp?categorie_id&emission_id=22&video_id=1797"
                    }
                },
                {
                    type: "school",
                    title: "Master Cloud Computing & Mobility",
                    organisation: "INSSET",
                    description: "schoolCCM.html",
                    keywords: ["kanban", "emberjs", "déploiement amazon", "openstack", "android", "ios"],
                    dateStart: new Date("2013-09-02"),
                    dateEnd: null,
                    links: {
                        "Master CCM": "http://www.insset.u-picardie.fr/formations/master-ccm",
                        "Article sur l'inauguration du master": "http://blog-de-shimrra.christophe-boucaut.fr/?p=326",
                        "Journée be-zend organisée par les deuxièmes années du master": "http://www.matele.tv/default.asp?categorie_id=5&emission_id=24&video_id=1648",
                        "fabric": "http://www.fabfile.org/"
                    }
                },
                {
                    type: "school",
                    title: "Licence web pro",
                    organisation: "INSSET",
                    description: "schoolLicence.html",
                    keywords: ["Zend Framework 1", "référencement", "JSF/JSP"],
                    dateStart: new Date("2012-09-02"),
                    dateEnd: new Date("2013-06-23"),
                    links: {
                        "Licence progessionnelle web": "http://www.insset.u-picardie.fr/formations/licence-pro-web",
                        "Article sur le référencement": "http://blog-de-shimrra.christophe-boucaut.fr/?p=457",
                        "Retours sur la 6ème édition de be-zend": "http://blog-de-shimrra.christophe-boucaut.fr/?p=579",
                        "Retours sur la licence": "http://blog-de-shimrra.christophe-boucaut.fr/?p=628",
                        "Projet scolaire d'e-commerce": "https://github.com/ChristopheBoucaut/INSSET_ecommerce"
                    }
                },
                {
                    type: "school",
                    title: "DUT informatique",
                    organisation: "Université Paris 13 Nord",
                    description: "schoolDUT.html",
                    keywords: ["java", "python", "c", "Génie Logicielle", "HTML", "CSS", "PHP", "JS", "postgresql"],
                    dateStart: new Date("2010-09-01"),
                    dateEnd: new Date("2012-06-31"),
                    links: {
                        "DUT informatique": "http://www.iutv.univ-paris13.fr/formations/dut/dut-informatique.html"
                    },
                    hidePrint: true
                },
                {
                    type: "school",
                    title: "Bac scientifique option SI",
                    organisation: "Lycée Joliot Curie",
                    description: "",
                    keywords: [],
                    dateStart: new Date("2007-09-01"),
                    dateEnd: new Date("2010-06-31"),
                    hidePrint: true
                }
            ];

            // generate diff date.
            for (var i = stepsCareer.length - 1; i >= 0; i--) {
                if (stepsCareer[i].description) {
                    stepsCareer[i].description = "views/careersDescription/"+stepsCareer[i].description;
                }
                stepsCareer[i].dateStartString = stringDate(stepsCareer[i].dateStart);
                if (stepsCareer[i].dateEnd) {
                    stepsCareer[i].dateDiff = generateDiffDate(stepsCareer[i].dateStart, stepsCareer[i].dateEnd);
                    stepsCareer[i].dateEndString = stringDate(stepsCareer[i].dateEnd);
                } else {
                    stepsCareer[i].dateDiff = generateDiffDate(stepsCareer[i].dateStart, new Date());
                    stepsCareer[i].dateEndString = "Aujourd'hui";
                }
            }

            $scope.stepsCareer = stepsCareer;
            $scope.objectEmpty = objectEmpty;

            /**
             * To generate a string to discribe difference between two dates.
             * 
             * @param {Date} oldDate    Oldest date.
             * @param {Date} recentDate Latest date.
             * 
             * @return {String}
             */
            function generateDiffDate(oldDate, recentDate) {
                var MILLISECONDS_FOR_DAYS = 1000*60*60*24;
                var MILLISECONDS_FOR_MONTHS = MILLISECONDS_FOR_DAYS*30;
                var MILLISECONDS_FOR_YEARS = MILLISECONDS_FOR_MONTHS*12;
                var elementsDateDiff = [];
                var years = 0;
                var months = 0;
                var days = 0;
                var diffTime = recentDate - oldDate;
                diffTime += MILLISECONDS_FOR_DAYS;
                // try to extract years.
                if (diffTime > MILLISECONDS_FOR_YEARS) {
                    years = (diffTime - (diffTime%MILLISECONDS_FOR_YEARS)) / MILLISECONDS_FOR_YEARS;
                    diffTime = diffTime%MILLISECONDS_FOR_YEARS;
                    elementsDateDiff.push(years+" "+(years > 1 ? "ans" : "an"));
                }

                // try to extract months.
                if (diffTime > MILLISECONDS_FOR_MONTHS) {
                    months = (diffTime - (diffTime%MILLISECONDS_FOR_MONTHS)) / MILLISECONDS_FOR_MONTHS;
                    diffTime = diffTime%MILLISECONDS_FOR_MONTHS;
                    elementsDateDiff.push(months+" mois");
                }

                // try to extract days.
                if (diffTime > MILLISECONDS_FOR_DAYS) {
                    days = (diffTime - (diffTime%MILLISECONDS_FOR_DAYS)) / MILLISECONDS_FOR_DAYS;
                    diffTime = diffTime%MILLISECONDS_FOR_DAYS;
                    if (years === 0) {
                        elementsDateDiff.push(days+" "+(days > 1 ? "jours" : "jour"));
                    }
                }

                return elementsDateDiff.join(" et ");
            }

            /**
             * Check if current navigator support toLocaleDateString() function.
             * 
             * @return {boolean}
             */
            function toLocaleDateStringSupportsLocales() {
                try {
                    new Date().toLocaleDateString("i");
                } catch (e) {
                    return e.name === "RangeError";
                }
                return false;
            }

            /**
             * Stringify a date.
             * 
             * @param {Date} date Date to stringify
             * 
             * @return {string}
             */
            function stringDate(date) {
                if (toLocaleDateStringSupportsLocales()) {
                    date = date.toLocaleDateString(navigator.language, {weekday: "long", year: "numeric", month: "long", day: "numeric"});
                } else {
                    if (navigator.language.toLowerCase() === "en-us") {
                        date = (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear();
                    } else {
                        date = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
                    }
                }

                return date.charAt(0).toUpperCase() + date.slice(1);
            }

            /**
             * Test if object is empty.
             * 
             * @param {object} obj Object to test.
             * 
             * @return {boolean}
             */
            function objectEmpty(obj) {
                if (obj) {
                    return Object.keys(obj).length === 0;
                }

                return true;
            }
        }
    ]);
})(window.angular);