angular.module('crepeApp').controller('mainCtrl', function($scope) {
    
    $scope.toggleReviewForm = true;
    
    $scope.toggleNewReview = function() {
        $scope.toggleReviewForm = !$scope.toggleReviewForm;
    };
    
    $scope.whippedCreme = {
        name: 'Whipped Cream',
        description: 'A great tasting fluffy piece of heaven.',
        img: 'http://ribbonsandbowscakes.cdn.kept.com.au/sites/ribbonsandbowscakes.com.au/files/imagecache/product_full/cream.jpg'
    };
    
    $scope.ccMousse = {
        name: 'Cream Cheese Mousse',
        description: 'Cream cheese fluffed to perfection and mixed with tasty morsels of yummy goodness.  An instant classic is born.',
        img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSaiIxFLkiuHn3afDBHqSL0V_533A3gveO9Jugcw3J5JcUhUhCdBg'
    };
    
    $scope.pudding = {
        name: 'Chocolate and Vanilla Custard',
        description: 'Delicious custard.  Some call it pudding.  Either way it is great on crepes and a favorite among children who prefer crepes toppings without an actual crepe.',
        img: 'http://3.bp.blogspot.com/_vO1lA3lgOoc/TNmqtf6m3PI/AAAAAAAAAPE/geTk3CNgzKg/s1600/pudding3.jpg'
    };
    
    $scope.nutella = {
        name: 'Nutella',
        description: 'One of the most commonly used toppings.  It is hard to beat this chocolate-hazelnut spread.',
        img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTZdat_sU1Ybs7C4GMd0M_FXWwCPjOfK3LsFt_CgCvl5iL5LYL9'
    };
    
    $scope.powSugar = {
        name: 'Powdered Sugar',
        description: 'Want your crepes to be slightly sweeter than they already are?  Want your crepe to look twice as good as the crepe of your buddy?  Gently sprinkle on some powdered sugar and watch me magic unfold before your eyes.',
        img: 'http://wenderly.com/wp-content/uploads/2011/01/powdered-sugar.jpg'
    };
    
    $scope.chocSyrup = {
        name: 'Chocolate Syrup',
        description: 'What needs to be said about this?  Drizzle this on your crepe for a choclatier experience.  Also looks pretty fantastic when done correctly.',
        img: 'http://www.theelementalpress.com/Crepes7-450px.jpg'
    };
    
    $scope.caramel = {
        name: 'Caramel',
        description: 'We make our caramel fresh the day of your event.  Try our caramel and wonder what our secret ingredients are.',
        img: 'http://www.momontimeout.com/wp-content/uploads/2014/07/buttermilk-caramel-sauce-recipe.jpg'
    };
    
    $scope.strawberries = {
        name: 'Strawberries',
        description: 'Great crepe topping.  These fresh strawberries are great and always taste amazing with a bit of whipped cream.',
        img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR8by3amj91I4dh2G51FMzQA2wZl_u-dKF2IwvnOEUlam5Jj83l'
    };
    
    $scope.bananas = {
        name: 'Bananas',
        description: 'A company favorite.  This is the best fruit to put on your crepe and is always greatly underestimated because it lacks the vibrant colors of the berries that surround it.  Do your best not to pass up this topping.',
        img: 'http://thechicbrulee.com/wp-content/uploads/2012/01/IMG_3452.jpg'
    };
    
    $scope.mixedBerries = {
        name: 'Mixed Berries',
        description: 'Somewhat dependent on the season and availability of the berries.  Most of the time it contains raspberries, blueberries, and blackberries.  This is a crowd favorite and always adds to your crepe experience.',
        img: 'https://greenblender.com/smoothies/wp-content/uploads/2015/05/A-guide-to-berries-by-green-blender5.jpg'
    };
    
    $scope.scottM = {
        name: 'Scott Martineau',
        age: 27,
        crepeNum: '500,000+',
        bio: 'Scott is a fun-loving ginger.  He likes to ride unicycles, juggle and cook.  Recently he has taken up web design and likes to build websites.  He has 4 years of experience cooking all sorts of food and crepes happen to be what he is best at and enjoys the most in the catering industry',
        img: 'https://scontent-ord1-1.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/552628_10151107038466284_1002551741_n.jpg?oh=1925a345cd4e866c47d0bb76a2c70b26&oe=56BFE703',
        email: 'winteralce@gmail.com'
    };
    
    $scope.zachH = {
        name: 'Zach Hebein',
        age: 28,
        crepeNum: '200,000+',
        bio: 'Hi, my name is Zach and I like to party',
        img: 'https://scontent-ord1-1.xx.fbcdn.net/hphotos-xap1/t31.0-8/627318_176047392529632_295020409_o.jpg',
        email: 'zach.hebein@gmail.com'
    };
    
    
    
})


    .directive('meetUs', function() {
        
        return{
            restrict: 'E',
            scope: {
                ourInfo: '=whom'
            },
            templateUrl: 'js/meetUsTmpl.html'
        };
            
    })

    .directive('custReview', function() {
    
        return{
            restrict: 'E',
            scope: {
                aReview: '=theirReview'
            },
            templateUrl: 'js/reviews/reviewDir.html'
        };
    })

    .directive('toppingTime', function() {
    
        return{
            restrict: 'E',
            scope: {
                oneTopping: '=topping'
            },
            templateUrl: 'js/product/toppingTmpl.html'
        };
});