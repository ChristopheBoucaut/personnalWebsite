(function(angular) {
    "use strict";

    angular.module("personnalWebsiteControllers").controller("NavigationController", [
        "$scope",
        "$element",
        "itemsNavigation",
        "NavigationManager",
        function($scope, $element, itemsNavigation, NavigationManager) {
            $scope.itemsNavigation = itemsNavigation;

            $scope.$on(NavigationManager.EVENT_HIDE_NAVIGATION, hideNavigation);
            $scope.$on(NavigationManager.EVENT_SHOW_NAVIGATION, showNavigation);
            $scope.$on("$routeChangeSuccess", function (event, current) {
                // update item active in navigation bar after route is loaded.
                updateActive(current.$$route.id);
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
                $element.removeClass("showed");
            }

            /**
             * Show the navigation bar.
             */
            function showNavigation() {
                $element.show();
                $element.addClass("showed");
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