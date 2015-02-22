"use strict";

(function(angular) {
    angular.module("personnalWebsiteControllers").controller("SkillController", [
        "$scope",
        function($scope) {
            var listSkills = {
                "Développement backoffice": [
                    {
                        name: "skill 1",
                        level: 1,
                        favorites: false,
                        inProgress: true
                    },
                    {
                        name: "skill 2",
                        level: 2,
                        favorites: false,
                        inProgress: true
                    },
                    {
                        name: "skill 3",
                        level: 3,
                        favorites: true,
                        inProgress: true
                    }
                ],
                "Développement frontoffice": [
                    {
                        name: "skill 1",
                        level: 4,
                        favorites: false,
                        inProgress: true
                    },
                    {
                        name: "skill 2",
                        level: 5,
                        favorites: false,
                        inProgress: true
                    },
                    {
                        name: "skill 3",
                        level: 5,
                        favorites: true
                    }
                ],
                "Développement mobile": [
                    {
                        name: "skill 1",
                        level: 5,
                        favorites: false
                    },
                    {
                        name: "skill 2",
                        level: 2,
                        favorites: false
                    },
                    {
                        name: "skill 3",
                        level: 5,
                        favorites: true
                    }
                ],
                "Travail en équipe": [
                    {
                        name: "SCRUM",
                        level: 5,
                        favorites: false
                    },
                    {
                        name: "Trello",
                        level: 2,
                        favorites: false
                    },
                    {
                        name: "Git",
                        level: 5,
                        favorites: true
                    },
                    {
                        name: "Github",
                        level: 5,
                        favorites: true
                    }
                ],
                "Devops": [
                    {
                        name: "SCRUM",
                        level: 5,
                        favorites: false
                    },
                    {
                        name: "Trello",
                        level: 2,
                        favorites: false
                    },
                    {
                        name: "Git",
                        level: 5,
                        favorites: true
                    },
                    {
                        name: "Github",
                        level: 5,
                        favorites: true
                    }
                ],
                "Divers": [
                    {
                        name: "skill 1",
                        level: 5,
                        favorites: false
                    },
                    {
                        name: "skill 2",
                        level: 2,
                        favorites: false
                    },
                    {
                        name: "skill 3",
                        level: 5,
                        favorites: true
                    }
                ]
            };

            $scope.listSkills = listSkills;
        }
    ]);
})(window.angular);