(function(angular) {
    "use strict";

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
                        navigationBar: true,
                        footer: true
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
            title: "Parcours",
            iconClass: "glyphicon glyphicon-briefcase",
            link: "#/career",
            id: "career-nav"
        },
        {
            controller: "SkillController",
            templateUrl: "views/skill.html",
            title: "Compétences",
            iconClass: "glyphicon glyphicon-book",
            link: "#/skills",
            id: "skills-nav"
        },
        {
            controller: "ContactController",
            templateUrl: "views/contact.html",
            title: "Contact",
            iconClass: "glyphicon glyphicon-comment",
            link: "#/contact",
            id: "contact-nav"
        },
        {
            title: "Blog",
            iconClass: "glyphicon glyphicon-pencil",
            link: "http://blog.christophe-boucaut.fr/",
            id: "blog-nav"
        },
        {
            controller: "CvController",
            templateUrl: "views/cv.html",
            title: "CV",
            iconClass: "glyphicon glyphicon-open",
            link: "#/cv",
            id: "cv-nav"
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
