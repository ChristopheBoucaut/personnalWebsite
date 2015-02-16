"use strict";

(function(angular) {
    angular.module("personnalWebsiteControllers").controller("NavigationController", [
        "$scope",
        "$element",
        "NavigationManager",
        function($scope, $element, NavigationManager) {
            // list of navigation items.
            var itemsNavigation = [
                {
                    title: "Mes projets",
                    iconClass: "glyphicon glyphicon-folder-open",
                    link: "#/projects"
                },
                {
                    title: "Mon parcours",
                    iconClass: "glyphicon glyphicon-briefcase",
                    link: "#/career"
                },
                {
                    title: "Mes compétences",
                    iconClass: "glyphicon glyphicon-book",
                    link: "#/skills"
                },
                {
                    title: "Me contacter",
                    iconClass: "glyphicon glyphicon-comment",
                    link: "#/contact"
                },
                {
                    title: "Mon blog",
                    iconClass: "glyphicon glyphicon-pencil",
                    link: "http://blog-de-shimrra.christophe-boucaut.fr/"
                }
            ];

            $scope.$on(NavigationManager.EVENT_HIDE_NAVIGATION, hideNavigation);
            $scope.$on(NavigationManager.EVENT_SHOW_NAVIGATION, showNavigation);
            $scope.$on(NavigationManager.EVENT_GET_ITEMS_NAVIGATION, function(event, args) {
                if (args.fnCallback) {
                    args.fnCallback(itemsNavigation);
                }
            });
            $scope.$on("$routeChangeSuccess", function (event, current) {
                // update item active in navigation bar after route is loaded.
                updateActive(current.$$route.idElement);
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