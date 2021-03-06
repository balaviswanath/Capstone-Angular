'use strict';

angular.module('capstoneSBSApp', ['ui.router','ngResource','ngDialog'])
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        
            // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html',
                        controller  : 'HeaderController'
                    },
                    'content': {
                        templateUrl : 'views/home.html',
                        controller  : 'HomeController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html',
                    }
                }

            })
        
            // route for the aboutus page
            .state('app.aboutus', {
                url:'aboutus',
                views: {
                    'content@': {
                        templateUrl : 'views/aboutus.html',
                        controller  : 'AboutController'                  
                    }
                }
            })
        // route for the inspirationalQuote page
            .state('app.inspirationalQuoteHome', {
                url:'inspirationalQuoteHome',
                views: {
                    'content@': {
                        templateUrl : 'views/inspirationalQuoteHome.html',
                        controller  : 'InspirationalQuoteController'                  
                    }
                }
            })
            
        // route for the milkSupply page
            .state('app.milkSupplyHome', {
                url:'milkSupplyHome',
                views: {
                    'content@': {
                        templateUrl : 'views/milkSupplyHome.html',
                        controller  : 'MilkSupplyController'                  
                    }
                }
            })
        // route for the contactus page
            .state('app.contactus', {
                url:'contactus',
                views: {
                    'content@': {
                        templateUrl : 'views/contactus.html',
                        controller  : 'ContactController'                  
                    }
                }
            });

            
    
        $urlRouterProvider.otherwise('/');
    })
;
