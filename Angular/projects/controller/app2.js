/**
 * Created by akash on 03 Jul 2016.
 */

//var app=angular.module("myApp",[]);
var app = angular.module('myApp', ['ngSanitize'])

app.run(function($rootScope) {
    $rootScope.valView = true;
});

app.controller("bindCtrlSpecial",function ($scope) {
    $scope.myData={};
    $scope.myData.textf = function () {
        var a= "I am an <code>HTML</code>string with " + "<a href='#'>links!</a> and other <em>stuff</em>";
        return a;
    }
});
