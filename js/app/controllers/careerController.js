"use strict";

(function(angular) {
    angular.module("personnalWebsiteControllers").controller("CareerController", [
        "$scope",
        "$sce",
        function($scope, $sce) {
            var stepsCareer = [
                {
                    type: "professional",
                    title: "Développeur web",
                    organisation: "Geneanet",
                    description: "<p>test <button>t</button> </p>",
                    keywords: ["test1", "test 2"],
                    dateStart: new Date("2013-09-02"),
                    dateEnd: null,
                    links: {
                        mot: "link"
                    }
                },
                {
                    type: "professional",
                    title: "Développeur web stagiaire",
                    organisation: "Geneanet",
                    description: "",
                    keywords: [],
                    dateStart: new Date("2013-03-18"),
                    dateEnd: new Date("2013-08-23"),
                    links: {
                        mot: "link"
                    }
                },
                {
                    type: "volunteer",
                    title: "Développeur bénévole",
                    organisation: "Esperance rando",
                    description: "",
                    keywords: [],
                    dateStart: new Date("2012-11-03"),
                    dateEnd: new Date("2013-04-01"),
                    links: {
                        mot: "link"
                    }
                },
                {
                    type: "professional",
                    title: "Employé saisonnié",
                    organisation: "Soufflet",
                    description: "",
                    keywords: [],
                    dateStart: new Date("2012-08-01"),
                    dateEnd: new Date("2012-08-31"),
                    links: {
                        mot: "link"
                    }
                },
                {
                    type: "professional",
                    title: "Employé saisonnié",
                    organisation: "EDF",
                    description: "",
                    keywords: [],
                    dateStart: new Date("2012-07-01"),
                    dateEnd: new Date("2012-07-31"),
                    links: {
                        mot: "link"
                    }
                },
                {
                    type: "professional",
                    title: "Développeur web stagiaire",
                    organisation: "Geneanet",
                    description: "",
                    keywords: [],
                    dateStart: new Date("2012-04-16"),
                    dateEnd: new Date("2012-06-15"),
                    links: {
                        mot: "link"
                    }
                },
                {
                    type: "volunteer",
                    title: "Développeur bénévole",
                    organisation: "Gatewars",
                    description: "",
                    keywords: [],
                    dateStart: new Date("2011-08-01"),
                    dateEnd: new Date("2012-02-01"),
                    links: {
                        mot: "link"
                    }
                },
                {
                    type: "professional",
                    title: "Employé saisonnié",
                    organisation: "Soufflet",
                    description: "",
                    keywords: [],
                    dateStart: new Date("2011-08-01"),
                    dateEnd: new Date("2011-08-31"),
                    links: {
                        mot: "link"
                    }
                },
                {
                    type: "volunteer",
                    title: "Hackathon de Saint-Quentin",
                    organisation: "Cloudin'tra",
                    description: "",
                    keywords: [],
                    dateStart: new Date("2014-04-14"),
                    dateEnd: new Date("2014-04-18"),
                    links: {
                        mot: "link"
                    }
                },
                {
                    type: "school",
                    title: "Master Cloud Computing & Mobility",
                    organisation: "INSSET",
                    description: "",
                    keywords: [],
                    dateStart: new Date("2013-09-02"),
                    dateEnd: null,
                    links: {
                        mot: "link"
                    }
                },
                {
                    type: "school",
                    title: "Licence web pro",
                    organisation: "INSSET",
                    description: "",
                    keywords: [],
                    dateStart: new Date("2012-09-02"),
                    dateEnd: new Date("2013-06-23"),
                    links: {
                        mot: "link"
                    }
                },
                {
                    type: "school",
                    title: "DUT informatique",
                    organisation: "Université Paris 13 Nord",
                    description: "",
                    keywords: [],
                    dateStart: new Date("2010-09-01"),
                    dateEnd: new Date("2012-06-31"),
                    links: {
                        mot: "link"
                    }
                },
                {
                    type: "school",
                    title: "Bac scientifique option SI",
                    organisation: "Lycée Joliot Curie",
                    description: "",
                    keywords: [],
                    dateStart: new Date("2007-09-01"),
                    dateEnd: new Date("2010-06-31"),
                    links: {
                        mot: "link"
                    }
                }
            ];

            // generate diff date.
            for (var i = stepsCareer.length - 1; i >= 0; i--) {
                stepsCareer[i].dateStartString = stringDate(stepsCareer[i].dateStart);
                if (stepsCareer[i].dateEnd) {
                    stepsCareer[i].dateDiff = generateDiffDate(stepsCareer[i].dateStart, stepsCareer[i].dateEnd);
                    stepsCareer[i].dateEndString = stringDate(stepsCareer[i].dateEnd);
                } else {
                    stepsCareer[i].dateDiff = generateDiffDate(stepsCareer[i].dateStart, new Date());
                    stepsCareer[i].dateEndString = "Aujourd'hui";
                }
                stepsCareer[i].description = $sce.trustAsHtml(stepsCareer[i].description);
            }

            $scope.stepsCareer = stepsCareer;

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
        }
    ]);
})(window.angular);