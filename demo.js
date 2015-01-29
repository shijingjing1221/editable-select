/// <reference path="../lib/angular.1.2.6.js" />

angular.module("acuteSelectTest", ["acute.select"])

.run(function(acuteSelectService) {

    // Use the acute select service to set the template path for all instances
    acuteSelectService.updateSetting("templatePath", "acute/acute.select/template");
    acuteSelectService.updateSetting("comboMode", true);
    acuteSelectService.updateSetting("loadOnOpen", true);
    acuteSelectService.updateSetting("minWidth", "100%");
    acuteSelectService.updateSetting("debug", false);
    // acuteSelectService.updateSetting("itemsInView", 30);
}).controller("MainCtrl",

    function($scope, $http, $filter, $window, $timeout, safeApply) {

        $scope.stateSelected = function(state) {
            console.log("stateSelected from demo.js:" + state);
        };

        $scope.allStates = ["Test1", "Test2", "Test3"];

        $scope.selectedState = $scope.allStates[0];
    }
);