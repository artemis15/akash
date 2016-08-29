/**
 * Created by akash on 03 Jul 2016.
 */

var app=angular.module("myApp",[]);

app.run(function($rootScope) {
    $rootScope.valView = true;
});

app.controller("testCtrl",function ($scope) {
    $scope.hello={};
    $scope.hello.title="Artemis";
});
app.controller("bindCtrl",function ($scope) {
    $scope.myData={};
    $scope.myData.textf = function () {
        return "My name is Artemis";
    }
});
app.controller("bindCtrlSpecial",function ($scope) {
    $scope.myData={};
    $scope.myData.textf = function () {
        var a= "I am an <code>HTML</code>string with " + "<a href='#'>links!</a> and other <em>stuff</em>";
    }
});
app.controller("mainCtrl",function($scope){
    $scope.myData={};
    $scope.myData.showIt=false;
});

app.controller("switchCtrl",function($scope){
    $scope.myData={};
    $scope.myData.switch=2;
});

app.controller("ifCtrl",function($scope){
    $scope.myData={};
    $scope.myData.showIt=true;
});

app.controller("includeCtrl",function($scope){
    $scope.myData={};
    $scope.myData.showIt=false;
});

app.controller("repeatCtrl",function($scope){
    $scope.myData={};
    $scope.myData.myObjects={var1:"1",var2:"2",var3:"3"};
    $scope.myData.items  = [ {text : "one"}, {text : "two"}, {text : "three"}, {text : "four"} ];
    //$scope.myData.items=[{'1a':"one"},{'1b':"two"},{'1c':"3"}];
    $scope.myData.getItems=function(){return this.items};
    $scope.filterArray=function(i){
        if(i.text=="two") return false;
        return true;
    };
    $scope.sortField="text";
    $scope.reverse=true;
    $scope.myData.textAk="akash";
});
app.filter('myFilter1',function(){
    return function(s){
        return s.substring(0,3);
    }
});
app.filter('myFilter',function(){
    return function(s,sI,eI){
        return s.substring(parseInt(sI),parseInt(eI));
    }
});

app.controller("clickCtrl",function($scope){
    $scope.myData={};
    $scope.myData.doClick=function(e){
        alert("clicked: "+e.clientX+","+e.clientY);
    }
});

app.controller("clickliCtrl",function($scope){
    $scope.myData={};
    $scope.myData.items=[{v:"1"},{v:"2"},{v:"3"}];
    $scope.myData.doClick=function(i,e){
        alert("clicked: "+i.v+" at "+e.clientX+","+e.clientY+","+e.currentTarget);
    }
});

app.controller("watchCtrl",function($scope){
    $scope.myData={};
    $scope.myData.fooCount=0;
    $scope.$watch(function watchFoo(scope){
        return(scope.myData.fooCount);
    },function handleFooChange(newValue,oldValue){
        alert("old Foo Count:"+oldValue+" new value: "+newValue);
    });
    $scope.myData.incrementFoo=function()
    {
        alert(++$scope.myData.fooCount);
    }
});

app.controller("applyCtrl",function($scope){
   $scope.data={time:new Date()};
    $scope.updateTime=function() {
        $scope.data.time = new Date();
    };
    /*
    document.getElementById("updateTimeBtn").addEventListener('click',function(){

     alert("updates time clicked");
     $scope.data.time=new Date();
     //$scope.$digest();
     });
    */

    document.getElementById("updateTimeBtn").addEventListener('click',function(){
        $scope.$apply(function(){
            alert("updates time clicked");
            $scope.data.time=new Date();
        });
    });

});

app.controller("serviceGetCtrl",function($scope,$http){
    $http({
     method:'get',
        //url:'https://dev12277.service-now.com/api/now/table/incident?sysparm_query=active%3Dtrue&sysparm_fields=number%2Cshort_description&sysparm_limit=10',
        url:'https://api.github.com/users/artemis15',
        headers:{
            'Content-Type': "application/json",
            'Accept': "application/json"
        }
    })
        .then(function successCallback(response){
            $scope.message="Getting Data From GitHub API";
        $scope.status="200";
        $scope.user=response.data;
    },_error);

    function _error(response){

        $scope.status="500";
        $scope.error="not able to connect: "+response.data;
    }
});

app.controller("formCtrl",function($scope){
    $scope.myForm={};
    $scope.myForm.firstName="akash";
    $scope.myForm.lastName="Rajput";
});

app.controller("chkCtrl",function($scope){
    $scope.myForm={};
    $scope.myForm.areyoumale=true;
});

app.controller("radioCtrl",function($scope){
    $scope.myForm={};
    $scope.myForm.whichNewsletter="weeklyNews";
});

app.controller("optionCtrl",function($scope){
    $scope.myForm = {};
    $scope.myForm.car  = "nissan";

    $scope.myForm.options = [
        {id:'',name:"Please select a car"},
        { id : "nissan", name: "Nissan" }
        ,{ id : "toyota", name: "Toyota" }
        ,{ id : "fiat"  , name: "Fiat" }
    ];
});

app.controller("minmaxValCtrl",function($scope){
    $scope.myForm={};
    $scope.myForm.name="akash";
});
app.controller("patternCtrl",function($scope){
    $scope.email = "akash@akashrajput.in";
    $scope.re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
});

app.controller("frmCtrl",function($scope){
    $scope.userType="";
});

app.controller('mainController', function($scope) {

    // function to submit the form after all validation has occurred
    $scope.submitForm = function() {

        // check to make sure the form is completely valid
        if ($scope.userForm.$valid) {
            alert('our form is amazing');
        }

    };

});

/*
 By default AngularJS already calls $digest() after the scheduled function call finishes,
 so you don't have to do that explicitly. You can, however, specify if AngularJS should not call $digest() after the scheduled function call. If, for instance, your scheduled function call only updates an animation but does not change any $scope variables, then it is a waste of CPU time to call $digest() after the function finishes.

 Both $timeout and $interval have a third, optional parameter which can specify if the $digest() method is to be executed after the scheduled function finishes. Actually, the third parameter specifies if the call to the scheduled function should be done inside an $apply() call.
 A value of true means that the scheduled function should be called inside an $apply() call. A value of false means that it should not be called inside an $apply() call (meaning $digest() will not get called after the scheduled function finishes).
*/


app.controller("timeOutCtrl", function($scope,$timeout){
    $timeout(callAtTimeout, 3000);
});

function callAtTimeout()
{
    console.log("timeout occurred");
}

app.controller("timeOutCtrl2",function($scope,$timeout,$log){
    $scope.callAtTimeout2=function()
    {
        $log.log("in the console");
    };
    $timeout($scope.callAtTimeout2(),3000);
});

app.controller("intervalCtrl",function($scope,$interval){

    $interval(callInterval,5000);
});

function callInterval(){
    console.log("interval occurred");
}