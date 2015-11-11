angular.module('crepeApp', ['ui.router'])

    .config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider        
        
        .state('home', {
            url: '/',
            templateUrl: 'js/home/homeTmpl.html',
            controller: 'homeCtrl'
        })
    
        .state('reviews', {
            url: '/reviews',
            templateUrl: 'js/reviews/reviewsTmpl.html'        
        })
    
        .state('product', {
            url: '/product',
            templateUrl: 'js/product/productTmpl.html'
        })
    
        .state('about', {
            url: '/about',
            templateUrl: 'js/about/aboutTmpl.html'
        });
    
    $urlRouterProvider.otherwise('/');
    
});