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
                    description: "",
                    keyWords: [],
                    dateStart: new Date("2013-09-01"),
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
                    keyWords: [],
                    dateStart: new Date("2013-03-18"),
                    dateEnd: new Date("2013-08-23"),
                    links: {
                        mot: "link"
                    }
                },
                {
                    type: "volunteer",
                    title: "Développeur bénévole",
                    organisation: "Geneanet",
                    description: "",
                    keyWords: [],
                    dateStart: new Date("2012-11-01"),
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
                    keyWords: [],
                    dateStart: new Date("2012-08-01"),
                    dateEnd: new Date("2013-08-31"),
                    links: {
                        mot: "link"
                    }
                },
                {
                    type: "professional",
                    title: "Employé saisonnié",
                    organisation: "EDF",
                    description: "",
                    keyWords: [],
                    dateStart: new Date("2012-07-01"),
                    dateEnd: new Date("2013-07-31"),
                    links: {
                        mot: "link"
                    }
                },
                {
                    type: "professional",
                    title: "Développeur web stagiaire",
                    organisation: "Geneanet",
                    description: "",
                    keyWords: [],
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
                    keyWords: [],
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
                    keyWords: [],
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
                    keyWords: [],
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
                    keyWords: [],
                    dateStart: new Date("2013-09-01"),
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
                    keyWords: [],
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
                    keyWords: [],
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
                    keyWords: [],
                    dateStart: new Date("2007-09-01"),
                    dateEnd: new Date("2010-06-31"),
                    links: {
                        mot: "link"
                    }
                }
            ];

            $scope.stepsCareer = stepsCareer;

            $scope.openStep = function() {
            };
        }
    ]);
})(window.angular);