"use strict";

(function(angular) {
    angular.module("personnalWebsiteControllers").controller("HomepageController", [
        "$scope",
        "NavigationManager",
        function($scope, NavigationManager) {
            NavigationManager.getItemsNavigation(function(items) {
                $scope.itemsNavigation = items;
            });
        }
    ]);
})(window.angular);