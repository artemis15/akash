/**
 * Created by akash.rajput on 22-08-2016.
 */
var app=angular.module("myApp",['ngRoute']);
app.run(function($rootScope) {
    $rootScope.textToInsert = "Artemis";
});
app.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when("/route1/:param",{//use /route1/:param fro parameters
        templateUrl:'route1.html',
        controller:'routectrl'
    }).when('/route2/:param',{
        templateUrl:'route2.html',
        controller:'routectrl'
    }).otherwise({
        redirectTo:'/'
    });
}]);

app.controller("routectrl",function ($scope,$routeParams) {
    $scope.param = $routeParams.param;
})

