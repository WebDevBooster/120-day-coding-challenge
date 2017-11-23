var myControllers = angular.module("myControllers", []);


myControllers.controller("SearchController", function MyController($scope, $http) {
    $http.get("_scripts/_mydata.json").then(function(response) {
        $scope.bsellers = response.data;
        $scope.bookOrder = 'title';
    });
});

myControllers.controller("DetailsController", function MyController($scope, $http, $routeParams) {
    $http.get("_scripts/_mydata.json").then(function(response) {
        $scope.bsellers = response.data;
        $scope.whichItem = $routeParams.itemId;
        
        if ($routeParams.itemId > 0) {
            $scope.prevItem = Number($routeParams.itemId) - 1;
        } else {
            $scope.prevItem = $scope.bsellers.length - 1;
        }
        
        if ($routeParams.itemId < $scope.bsellers.length - 1) {
            $scope.nextItem = Number($routeParams.itemId) + 1;
        } else {
            $scope.nextItem = 0;
        }
    });
});
