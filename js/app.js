var dtsDocs = angular.module('dtsDocs', ['ui.router','ui.bootstrap']);

dtsDocs.config(function($stateProvider, $urlRouterProvider) {
    
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'partials/partial-home.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('API', {
            url: '/api',
            templateUrl: 'partials/partial-api.html'      
        })

        //FASTTREE PAGE
        .state('fasttree', {
            url: '/fasttree',
            templateUrl: 'partials/partial-fasttree.html'      
        })

        //DTS GUIDES AND WALKTHROUGHS
        .state('guides', {
            url: '/guides',
            templateUrl: 'partials/partial-guides.html'      
        })
        
        // Link to detalied information
        .state('API.stuff', {
            url: '/stuff',
            templateUrl: 'partials/partial-detail.html'
        })


        .state('started', {
            url: '/gettingstarted',
            templateUrl: 'partials/partial-gettingstarted.html'
        })

        .state('guides.messaging', {
            url: '/messaging-guide',
            templateUrl: 'partials/partial-messagingguide.html'
        })

        .state('guides.enrollment', {
            url: '/enrollment-guide',
            templateUrl: 'partials/partial-enrollmentguide.html'
        })

        .state('API.detail', {
        url: '/:serviceId',
        templateUrl: 'partials/partial-detail.html',
       controller: function($stateParams, $http, $scope){
            $http.get('API/'+ $stateParams.serviceId +'.json',{timeout: 30000, cache: false})
                .success(function (data) {
                    console.log(data);
                    $scope.mydata = data;
            });

            $http.get('API/response/'+ $stateParams.serviceId +'.json',{timeout: 30000, cache: false})
                .success(function (data) {
                    console.log(data);
                    $scope.myresponse = angular.toJson(data, true);
            });
            
        }

        




        /*
        function ($stateParams) {
            console.log($stateParams);
        }*/

    });
        
});