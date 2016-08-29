/**
 * Created by akash.rajput on 22-08-2016.
 */
var app=angular.module("myApp",[]);
app.run(function($rootScope) {
    $rootScope.textToInsert = "Artemis";
});
app.controller("directiveCtrl",function($scope){
    $scope.textToInsert="Artemis";
});
/*
app.directive('div',function(){
    var d ={};
    d.restrict ='E';
    d.template = "My First directive: {{textToInsert}}";
    return d;
});*/


app.directive('abc',function(){
    var d1 ={};
    d1.restrict ='E';/* restrict this directive to elements */
    d1.templateUrl = "fragment.html";
    return d1;
});

app.directive("usrinfo",function() {
    var d = {};
    d.restrict = 'E';
    d.template = "User : <b>{{user.firstName}} {{user.lastName}}</b><br/>";
    d.scope={user:"=u"}
    return d;
});

app.controller("userCtrl",function($scope){
    $scope.akash={};
    $scope.akash.firstName = "akash";
    $scope.akash.lastName = "rajput";

    $scope.raj={};
    $scope.raj.firstName = "raj";
    $scope.raj.lastName = "kapoor";

    $scope.artemis={};
    $scope.artemis.firstName = "Artemis";
    $scope.artemis.lastName = "The Envangelist";
});