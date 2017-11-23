var myApp = angular.module("myApp", [
    "ngRoute",
    "myControllers"
]);

myApp.config(["$routeProvider", function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "_scripts/partials/search.html",
        controller: "SearchController"
    })
    .when("/details/:itemId", {
        templateUrl: "_scripts/partials/details.html",
        controller: "DetailsController"
    })
    ;
}]);






