"use strict";

(function(angular) {
    angular.module("personnalWebsiteControllers").controller("HomepageController", [
        "$scope",
        "itemsNavigation",
        "NavigationManager",
        function($scope, itemsNavigation, NavigationManager) {
            $scope.itemsNavigation = itemsNavigation;
        }
    ]);
})(window.angular);