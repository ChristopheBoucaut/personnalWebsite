"use strict";

(function(angular) {
    var personnalWebsite = angular.module("personnalWebsite", [
        "ngRoute",

        "personnalWebsiteControllers"
    ]);

    personnalWebsite.config(["$routeProvider",
        function($routeProvider) {
            $routeProvider
                .when(
                    "/",
                    {
                        controller: "HomepageController",
                        templateUrl: "views/homepage.html"
                    }
                )
                .otherwise({ redirectTo: "/" });
        }
    ]);
})(window.angular);