"use strict";

(function(angular) {
    var personnalWebsite = angular.module("personnalWebsite", [
        "ngRoute",

        "personnalWebsiteControllers",
        "personnalWebsiteServices"
    ]);

    personnalWebsite.config([
        "$routeProvider",
        "itemsNavigation",
        function($routeProvider, itemsNavigation) {
            $routeProvider
                .when(
                    "/",
                    {
                        controller: "HomepageController",
                        templateUrl: "views/homepage.html",
                        navigationBar: false,
                        footer: false
                    }
                ).otherwise({ redirectTo: "/" });
                // Add alls routes from configuration.
                for (var i = itemsNavigation.length - 1; i >= 0; i--) {
                    if (itemsNavigation[i].controller && itemsNavigation[i].templateUrl) {
                        var path = itemsNavigation[i].link.replace(/^#/, "");
                        var configRoute = itemsNavigation[i];
                        if (configRoute.navigationBar === undefined) {
                            configRoute.navigationBar = true;
                        }
                        if (configRoute.footer === undefined) {
                            configRoute.footer = true;
                        }
                        $routeProvider.when(path, configRoute);
                    }
                }
        }
    ]);

    // list of navigation items.
    personnalWebsite.constant("itemsNavigation", [
        {
            controller: "ProjectController",
            templateUrl: "views/project.html",
            title: "Portfolio",
            iconClass: "glyphicon glyphicon-folder-open",
            link: "#/projects",
            id: "projects-nav"
        },
        {
            controller: "CareerController",
            templateUrl: "views/career.html",
            title: "Mon parcours",
            iconClass: "glyphicon glyphicon-briefcase",
            link: "#/career",
            id: "career-nav"
        },
        {
            controller: "SkillController",
            templateUrl: "views/skill.html",
            title: "Mes compétences",
            iconClass: "glyphicon glyphicon-book",
            link: "#/skills",
            id: "skills-nav"
        },
        {
            controller: "ContactController",
            templateUrl: "views/contact.html",
            title: "Me contacter",
            iconClass: "glyphicon glyphicon-comment",
            link: "#/contact",
            id: "contact-nav"
        },
        {
            title: "Mon blog",
            iconClass: "glyphicon glyphicon-pencil",
            link: "http://blog-de-shimrra.christophe-boucaut.fr/",
            id: "blog-nav"
        }
    ]);

    personnalWebsite.run([
        "$rootScope",
        "itemsNavigation",
        function($rootScope, itemsNavigation) {
            // To update the page title when page is loaded.
            $rootScope.$on("$routeChangeSuccess", function(event, current) {
                var title = "Christophe Boucaut";
                // if current route has an id.
                if (current.$$route.id) {
                    // search current navigation item.
                    for (var i = itemsNavigation.length - 1; i >= 0; i--) {
                        if (itemsNavigation[i].id == current.$$route.id) {
                            title = itemsNavigation[i].title+" - "+title;
                            break;
                        }
                    }
                }

                $rootScope.titlePage = title;
            });
        }
    ]);
})(window.angular);