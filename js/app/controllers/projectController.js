"use strict";

(function(angular) {
    angular.module("personnalWebsiteControllers").controller("ProjectController", [
        "$scope",
        function($scope) {
            var projects = [
                {
                    title: "Sauvons nos tombes",
                    subtitle: "Application mobile / API REST",
                    techno: "AngularJS / Cordova / Symfony 2",
                    description: "views/projectsDescription/sauvons_nos_tombes.html",
                    picture: "images/projects/sauvonsnostombes.png",
                    link: "http://www.geneanet.org/sauvons_nos_tombes"
                },
                {
                    title: "CloudIn'tra",
                    subtitle: "Site vitrine",
                    techno: "Symfony2 / Bootstrap",
                    description: "views/projectsDescription/cloudintra.html",
                    picture: "images/projects/cloudintra.png",
                    link: "http://cloudintra.fr/"
                },
                {
                    title: "Geneanet boutique",
                    subtitle: "Site web e-commerce",
                    techno: "Prestashop",
                    description: "views/projectsDescription/geneanet_boutique.html",
                    picture: "images/projects/boutique.png",
                    link: "http://www.geneanet.org/boutique/"
                },
                {
                    title: "Espérance Rando",
                    subtitle: "Site web d'association de randonnée",
                    techno: "Wordpress",
                    description: "views/projectsDescription/esperance_rando.html",
                    picture: "images/projects/esperancerando.png",
                    link: "http://esperancerando.fr/"
                },
                {
                    title: "Geneastar",
                    subtitle: "Site web",
                    techno: "PHP",
                    description: "views/projectsDescription/geneastar.html",
                    picture: "images/projects/geneastar.png",
                    link: "http://www.geneastar.org/"
                }
            ];

            $scope.projects = projects;
        }
    ]);
})(window.angular);