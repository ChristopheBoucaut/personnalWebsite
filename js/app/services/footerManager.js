"use strict";

(function(angular) {
    angular.module("personnalWebsiteServices").service("FooterManager", [
        "$rootScope",
        function($rootScope) {
            // event name to hide the footer.
            this.EVENT_HIDE_FOOTER = "hideFooter";
            // event name to show the footer.
            this.EVENT_SHOW_FOOTER = "showFooter";
            
            /**
             * Broadcast event to hide the footer.
             */
            this.hideFooter = function() {
                $rootScope.$broadcast(this.EVENT_HIDE_FOOTER, {});
            };

            /**
             * Broadcast event to show the footer.
             */
            this.showFooter = function() {
                $rootScope.$broadcast(this.EVENT_SHOW_FOOTER, {});
            };
        }
    ]);
})(window.angular);