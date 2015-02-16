"use strict";

(function(angular) {
    angular.module("personnalWebsiteControllers").controller("NavigationController", [
        "$scope",
        "$element",
        "NavigationManager",
        function($scope, $element, NavigationManager) {
            $scope.$on(NavigationManager.EVENT_HIDE_NAVIGATION, hideNavigation);
            $scope.$on(NavigationManager.EVENT_SHOW_NAVIGATION, showNavigation);
            $scope.$on("$routeChangeSuccess", function (event, current) {
                // update item active in navigation bar after route is loaded.
                updateActive(current.$$route.idElement);
                if (current.$$route.navigationBar) {
                    showNavigation();
                } else {
                    hideNavigation();
                }
            });

            /**
             * Hide the navigation bar.
             */
            function hideNavigation() {
                $element.hide();
            }

            /**
             * Show the navigation bar.
             */
            function showNavigation() {
                $element.show();
            }

            /**
             * Update the current active item.
             *
             * @param {string} Element id to add class active.
             */
            function updateActive(idElement) {
                $element.find(".active").removeClass("active");
                if (idElement) {
                    $element.find("#"+idElement).parent("li").addClass("active");
                }
            }
        }
    ]);
})(window.angular);