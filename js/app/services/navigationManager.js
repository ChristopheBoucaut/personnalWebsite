"use strict";

(function(angular) {
    angular.module("personnalWebsiteServices").service("NavigationManager", [
        "$rootScope",
        function($rootScope) {
            // event name to hide the navigation.
            this.EVENT_HIDE_NAVIGATION = "hideNavigation";
            // event name to show the navigation.
            this.EVENT_SHOW_NAVIGATION = "showNavigation";
            // event name to get navigation items.
            this.EVENT_GET_ITEMS_NAVIGATION = "getItemsNavigation";
            
            /**
             * Get items navigations and execute callback function.
             * 
             * @param {Function} fnCallback Callback function. It takes Array in first arguments.
             */
            this.getItemsNavigation = function(fnCallback) {
                $rootScope.$broadcast(this.EVENT_GET_ITEMS_NAVIGATION, {fnCallback: fnCallback});
            };

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