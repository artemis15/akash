/**
 * Created by akash.rajput on 22-08-2016.
 */
var app=angular.module("myApp",[]);
app.run(function($rootScope) {
    $rootScope.textToInsert = "Artemis";
});

app.controller("parentCtrl",function ($scope) {
    console.log("this is parent");
    $scope.sendToChild=function () {
        $scope.$broadcast('parent',"well I'm getting triggered from parent");

    };
    $scope.$on("child",function (e,d) {
        alert(d);
    })
});

app.controller("siblingCtrl",function ($scope) {
    console.log("this is child");
    $scope.$on('parent',function (e,d) {
        console.log(d);
    });

    $scope.sendToParent=function () {
        $scope.$emit('child',"sending to parent from child...cheers");
    }

});

app.controller("sharingCtrl1",function ($scope,$rootScope) {
    $scope.sharebt1 = function () {
        $rootScope.$broadcast("data1","sharing from controller 1");
    };
    $scope.$on("data2",function (e,d) {
       $scope.name=d;
    });
});
app.controller("sharingCtrl2",function ($scope,$rootScope) {
    $scope.sharebt2 = function () {
        $rootScope.$broadcast("data2","sharing from controller 2");
    };
    $scope.$on("data1",function (e,d) {
        $scope.name=d;
    });
});