'use strict';

(function(){

    angular.module('routeApp', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider){

            // For any unmatched url, redirect to /state1
            $urlRouterProvider.otherwise("/state1");

            // Now set up states
            $stateProvider
                .state('state1', {
                    url:"/state1",
                    templateUrl:"app/state1.html"
                })
                .state('state1.list', {
                    url:"/list",
                    templateUrl:"app/state1.list.html",
                    controller: function($scope){
                        $scope.items = ["A", "List", "Of", "Items"];
                    }
                })
                .state('state2', {
                    url:"/state2",
                    templateUrl: "app/state2.html"
                })
                .state('state2.list', {
                    url:"/list",
                    templateUrl:"app/state2.list.html",
                    controller:function($scope){
                        $scope.things = ["A", "Set", "Of", "Things"];
                    }
                })

        });

})();
