(function () {
    'use strict';
    
    angular.module('crepeApp').controller('homeCtrl', HomeController);
    
    function HomeController ($scope) {
        
    $(document).ready(function(){
        $('.parallax').parallax();
    });            

        
    }

}());