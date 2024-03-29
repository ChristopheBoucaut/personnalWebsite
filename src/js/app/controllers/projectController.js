(function(angular) {
    "use strict";

    angular.module("personnalWebsiteControllers").controller("ProjectController", [
        "$scope",
        function($scope) {
            var projects = [
                {
                    title: "SPCoach",
                    subtitle: "Site professionnelle pour une coach",
                    techno: "Natif/Wordpress",
                    description: "views/projectsDescription/spcoach.html",
                    picture: "images/projects/spcoach.png",
                    link: "https://www.spcoach.fr/"
                },
                {
                    title: "Espérance Rando - Refonte",
                    subtitle: "Site web d'association de randonnée",
                    techno: "Wordpress",
                    description: "views/projectsDescription/esperance_rando_rework.html",
                    picture: "images/projects/esperancerando_rework.png",
                    link: "https://esperancerando.fr/"
                },
                {
                    title: "ED : Ships",
                    subtitle: "Personnel",
                    techno: "AngularJS",
                    description: "views/projectsDescription/ed_ships.html",
                    picture: "images/projects/edships.png",
                    link: "https://christopheboucaut.github.io/ed-my-ships/#/"
                },
                {
                    title: "Periodic Task Manager",
                    subtitle: "Web APP / Personnel",
                    techno: "AngularJS",
                    description: "views/projectsDescription/periodic_task_manager.html",
                    picture: "images/projects/periodictaskmanager.png",
                    link: "https://christopheboucaut.github.io/periodic-task-manager/#/"
                },
                {
                    title: "Hier et aujourd'hui",
                    subtitle: "Application mobile / API REST",
                    techno: "AngularJS / Cordova / Symfony 2",
                    description: "views/projectsDescription/hier_et_aujourdhui.html",
                    picture: "images/projects/hieretaujourdhui.png",
                    link: "https://www.geneanet.org/hier_et_aujourdhui"
                },
                {
                    title: "CloudIn'tra manager",
                    subtitle: "Gestion d'abonnement / Material Design / Google App Engine",
                    techno: "AngularJS / Angular Material",
                    description: "views/projectsDescription/cloudintramanager.html",
                    picture: "images/projects/cloudintramanager.png"
                },
                {
                    title: "Sauvons nos tombes",
                    subtitle: "Application mobile / API REST",
                    techno: "AngularJS / Cordova / Symfony 2",
                    description: "views/projectsDescription/sauvons_nos_tombes.html",
                    picture: "images/projects/sauvonsnostombes.png",
                    link: "https://www.geneanet.org/sauvons_nos_tombes"
                },
                {
                    title: "CloudIn'tra",
                    subtitle: "Site vitrine",
                    techno: "Symfony2 / Bootstrap",
                    description: "views/projectsDescription/cloudintra.html",
                    picture: "images/projects/cloudintra.png"
                },
                {
                    title: "Geneanet boutique",
                    subtitle: "Site web e-commerce",
                    techno: "Prestashop",
                    description: "views/projectsDescription/geneanet_boutique.html",
                    picture: "images/projects/boutique.png",
                    link: "https://www.geneanet.org/boutique/"
                },
                {
                    title: "Espérance Rando",
                    subtitle: "Site web d'association de randonnée",
                    techno: "Wordpress",
                    description: "views/projectsDescription/esperance_rando.html",
                    picture: "images/projects/esperancerando.png",
                    link: "https://esperancerando.fr/"
                },
                {
                    title: "Geneastar",
                    subtitle: "Site web",
                    techno: "PHP",
                    description: "views/projectsDescription/geneastar.html",
                    picture: "images/projects/geneastar.png",
                    link: "https://www.geneastar.org/"
                }
            ];

            $scope.projects = projects;
        }
    ]);
})(window.angular);