(function(angular) {
    "use strict";

    angular.module("personnalWebsiteControllers").controller("SkillController", [
        "$scope",
        function($scope) {
            var listSkills = {
                "Développement backoffice": [
                    {
                        name: "PHP",
                        level: 5,
                        favorites: true
                    },
                    {
                        name: "Symfony",
                        level: 4,
                        inProgress: true
                    },
                    {
                        name: "PHPUnit",
                        level: 4,
                        inProgress: true,
                        favorites: true
                    }
                ],
                "Développement frontoffice": [
                    {
                        name: "Javascript (POO)",
                        level: 5,
                        favorites: true,
                        inProgress: false
                    },
                    {
                        name: "HTML 5",
                        level: 3,
                        inProgress: true
                    },
                    {
                        name: "CSS 3",
                        level: 3,
                        inProgress: true
                    },
                    {
                        name: "Foundation et sass",
                        level: 4
                    }
                ],
                "Développement mobile": [
                    {
                        name: "Android natif",
                        level: 3
                    },
                    {
                        name: "iOS natif",
                        level: 2
                    },
                    {
                        name: "Cordova",
                        level: 4,
                        favorites: true
                    }
                ],
                "Travail en équipe": [
                    {
                        name: "SCRUM",
                        level: 4
                    },
                    {
                        name: "Jira",
                        level: 3,
                        favorites: false,
                        inProgress: true
                    },
                    {
                        name: "Github",
                        level: 4,
                        favorites: true
                    },
                    {
                        name: "Encadrement stagiaire",
                        level: 4
                    }
                ],
                "Divers": [
                    {
                        name: "Behat",
                        level: 3,
                        inProgress: true
                    },
                    {
                        name: "Git",
                        level: 3,
                        favorites: true
                    },
                    {
                        name: "Extension Chrome",
                        level: 3,
                        favorites: true
                    }
                ],
                "Technos": [
                    {
                        name: "Elasticsearch",
                        level: 4,
                        inProgress: true,
                        favorites: true
                    },
                    {
                        name: "Docker",
                        level: 3,
                        favorites: true,
                        inProgress: true
                    },
                    {
                        name: "RabbitMQ",
                        level: 4,
                        favorites: true,
                        inProgress: true
                    }
                ]
            };

            $scope.listSkills = listSkills;
        }
    ]);
})(window.angular);