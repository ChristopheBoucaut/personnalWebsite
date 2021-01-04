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
                        name: "Elasticsearch",
                        level: 4,
                        inProgress: true,
                        favorites: true
                    },
                    {
                        name: "Electron",
                        level: 0
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
                        name: "AngularJS",
                        level: 4
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
                        name: "Trello",
                        level: 4,
                        favorites: true
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
                        name: "Wordpress",
                        level: 3
                    },
                    {
                        name: "Prestashop",
                        level: 3
                    },
                    {
                        name: "Bonnes pratiques / travail en équipe",
                        level: 4,
                        inProgress: true
                    },
                    {
                        name: "Extension Chrome",
                        level: 3,
                        favorites: true
                    }
                ],
                "Devops": [
                    {
                        name: "Tests unitaires",
                        level: 4,
                        inProgress: true
                    },
                    {
                        name: "Git",
                        level: 3,
                        favorites: true
                    },
                    {
                        name: "Docker",
                        level: 1,
                        favorites: true
                    },
                    {
                        name: "Brunch",
                        level: 1
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