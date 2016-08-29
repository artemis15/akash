/**
 * Created by akash.rajput on 22-08-2016.
 */
var app=angular.module("myApp",[]);
app.run(function($rootScope) {
    $rootScope.textToInsert = "Artemis";
});

app.value("numberVal",99);
app.value("stringVal","artemis");
app.value("objectVal",{val1:123,val2:"abc"});

app.controller("valueCtrl",function($scope,numberVal){
    console.log(numberVal);
});

app.factory("valFactory",function () {
   return "my val :)";
});

app.factory("valFactory2",function (stringVal) {
    return "my name is : "+stringVal;
});
app.controller("factCtrl",function ($scope,valFactory) {
    console.log(valFactory);
});

app.controller("factCtrl2",function ($scope,valFactory2) {
    console.log(valFactory2);
});

function myService(){
    this.doIt = function(){
        console.log("done with cheers");
    }
}

app.service("myservice",myService);

app.controller("serviceCtrl",function ($scope,myservice) {
    myservice.doIt();
});

function myService2(objectVal){
    this.doIt=function () {
        console.log("Val1 : "+objectVal.val1);
    }
}

app.service("myservice2",myService2);

app.controller("serviceCtrl2",function ($scope,myservice2) {
    myservice2.doIt();
});

app.provider("providerService",function () {
    var provider={};
    provider.$get = function(){ //$get() is provided
        var service={};
        service.doService = function () {
            console.log("mySecondService: Service Done!");
        }
        return service;
    }
    return provider;
});

app.controller("providerCtrl",function ($scope,providerService) {
    $scope.whenBtnClicked = function () {
        providerService.doService();
    }
});