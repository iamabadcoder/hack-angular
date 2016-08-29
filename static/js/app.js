// app.js
var myAppModule = angular.module("myApp", ["HelloController"]);

var controllerModule = angular.module("HelloController", []);
controllerModule.controller("MyController", function MyController($scope) {
    $scope.clock = {
        now: new Date()
    };
    var updateClock = function () {
        $scope.clock.now = new Date()
    };
    setInterval(function () {
        $scope.$apply(updateClock);
    }, 1000);
    updateClock();
})