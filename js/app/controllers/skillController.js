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
                        level: 3,
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
                        level: 2,
                        inProgress: true
                    },
                    {
                        name: "Foundation (sass)",
                        level: 3,
                        inProgress: true
                    },
                    {
                        name: "Bootstrap",
                        level: 2
                    }
                ],
                "Développement mobile": [
                    {
                        name: "Android natif",
                        level: 2
                    },
                    {
                        name: "iOS natif",
                        level: 1
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
                        level: 3,
                        favorites: false
                    },
                    {
                        name: "Trello",
                        level: 2,
                        favorites: false
                    },
                    {
                        name: "Github",
                        level: 4,
                        favorites: true
                    }
                ],
                "Devops": [
                    {
                        name: "Tests unitaires",
                        level: 2,
                        favorites: false,
                        inProgress: true
                    },
                    {
                        name: "Git",
                        level: 3,
                        favorites: true
                    },
                    {
                        name: "Docker",
                        level: 0
                    },
                    {
                        name: "Yeoman",
                        level: 0
                    },
                    {
                        name: "Openstack",
                        level: 0
                    },
                    {
                        name: "RabbitMQ",
                        level: 0
                    }
                ]
            };

            $scope.listSkills = listSkills;
        }
    ]);
})(window.angular);