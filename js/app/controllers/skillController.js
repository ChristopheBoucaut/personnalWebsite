"use strict";

(function(angular) {
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
                        name: "Symfony 2",
                        level: 4,
                        inProgress: true
                    },
                    {
                        name: "NodeJS (puis Meteor)",
                        level: 1
                    },
                    {
                        name: "Elasticsearch",
                        level: 4,
                        inProgress: true,
                        favorites: true
                    },
                    {
                        name: "Python (puis Django)",
                        level: 1
                    },
                    {
                        name: "Ruby (puis Ruby on Rails)",
                        level: 0
                    }
                ],
                "Développement frontoffice": [
                    {
                        name: "Javascript (POO)",
                        level: 4,
                        favorites: true,
                        inProgress: true
                    },
                    {
                        name: "AngularJS",
                        level: 4,
                        favorites: true,
                        inProgress: true
                    },
                    {
                        name: "HTML 5",
                        level: 3
                    },
                    {
                        name: "CSS 3",
                        level: 3,
                        inProgress: true
                    },
                    {
                        name: "Foundation (sass)",
                        level: 4,
                        inProgress: true
                    },
                    {
                        name: "Bootstrap",
                        level: 3
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
                        level: 5,
                        favorites: true
                    }
                ],
                "Travail en équipe": [
                    {
                        name: "SCRUM",
                        level: 3
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
                    }
                ],
                "Divers": [
                    {
                        name: "Wordpress",
                        level: 3
                    },
                    {
                        name: "Prestashop",
                        level: 4
                    },
                    {
                        name: "API Twitter",
                        level: 3
                    },
                    {
                        name: "Bonnes pratiques / travail en équipe",
                        level: 4,
                        inProgress: true
                    },
                    {
                        name: "Référencement",
                        level: 3
                    },
                    {
                        name: "Encadrement stagiaire",
                        level: 4
                    }
                ],
                "Devops": [
                    {
                        name: "Tests unitaires",
                        level: 3,
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
                        favorites: true,
                        inProgress: true
                    },
                    {
                        name: "Yeoman",
                        level: 0
                    },
                    {
                        name: "Openstack",
                        level: 1
                    },
                    {
                        name: "RabbitMQ",
                        level: 1,
                        favorites: true,
                        inProgress: true
                    }
                ]
            };

            $scope.listSkills = listSkills;
        }
    ]);
})(window.angular);