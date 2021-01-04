(function(angular) {
    "use strict";
    angular.module("personnalWebsiteControllers").controller("CvController", [
        "$scope",
        function($scope) {
            $scope.startPrint = function() {
                window.print();
            };
        }
    ]);
})(window.angular);