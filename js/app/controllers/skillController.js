"use strict";

(function(angular) {
    angular.module("personnalWebsiteControllers").controller("SkillController", [
        "$scope",
        function($scope) {
            var listSkills = {
                "Type de compétences": [
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
                "Type de compétences 2": [
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
            };

            $scope.listSkills = listSkills;
        }
    ]);
})(window.angular);