"use strict";

(function(angular) {
    var personnalWebsite = angular.module("personnalWebsite", [
        "ngRoute",

        "personnalWebsiteControllers",
        "personnalWebsiteServices"
    ]);

    personnalWebsite.config(["$routeProvider",
        function($routeProvider) {
            $routeProvider
                .when(
                    "/",
                    {
                        controller: "HomepageController",
                        templateUrl: "views/homepage.html",
                        navigationBar: false,
                        footer: false
                    }
                )
                .otherwise({ redirectTo: "/" });
        }
    ]);

    personnalWebsite.run([
        "$rootScope",
        function($rootScope) {
            // To update the page title when page is loaded.
            $rootScope.$on("$routeChangeSuccess", function(event, current, previous) {
                var title = "Christophe Boucaut";
                if (current.$$route.title) {
                    title = current.$$route.title+" - "+title;
                }

                $rootScope.titlePage = title;
            });
        }
    ]);
})(window.angular);