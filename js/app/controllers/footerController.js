"use strict";

(function(angular) {
    angular.module("personnalWebsiteControllers").controller("FooterController", [
        "$scope",
        "$element",
        "FooterManager",
        function($scope, $element, FooterManager) {
            $scope.$on(FooterManager.EVENT_HIDE_FOOTER, hideFooter);
            $scope.$on(FooterManager.EVENT_SHOW_FOOTER, showFooter);
            $scope.$on("$routeChangeSuccess", function (event, current) {
                if (current.$$route.footer) {
                    showFooter();
                } else {
                    hideFooter();
                }
            });

            /**
             * Hide the footer bar.
             */
            function hideFooter() {
                $element.hide();
            }

            /**
             * Show the footer bar.
             */
            function showFooter() {
                $element.show();
            }
        }
    ]);
})(window.angular);