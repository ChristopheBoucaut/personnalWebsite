(function(angular) {
    "use strict";

    angular.module("personnalWebsiteServices").service("NavigationManager", [
        "$rootScope",
        function($rootScope) {
            // event name to hide the navigation.
            this.EVENT_HIDE_NAVIGATION = "hideNavigation";
            // event name to show the navigation.
            this.EVENT_SHOW_NAVIGATION = "showNavigation";

            /**
             * Broadcast event to hide the navigation.
             */
            this.hideNavigation = function() {
                $rootScope.$broadcast(this.EVENT_HIDE_NAVIGATION, {});
            };

            /**
             * Broadcast event to show the navigation.
             */
            this.showNavigation = function() {
                $rootScope.$broadcast(this.EVENT_SHOW_NAVIGATION, {});
            };
        }
    ]);
})(window.angular);