(function(angular) {
    "use strict";
    angular.module("personnalWebsiteControllers").controller("ContactController", [
        function() {
            (function(d, s, id) {
                var js;
                var fjs = d.getElementsByTagName(s)[0];
                var p = /^http:/.test(d.location) ? "http" : "https";
                js = d.createElement(s);
                js.id = id;
                js.src = p+"://platform.twitter.com/widgets.js";
                fjs.parentNode.insertBefore(js,fjs);
            })(document, "script", "twitter-wjs");
        }
    ]);
})(window.angular);