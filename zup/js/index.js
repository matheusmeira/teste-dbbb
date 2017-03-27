var app = angular.module('App', ['ngRoute', 'ngSanitize']);

app.config(function( $routeProvider){

	$routeProvider
	.when("/", {
		templateUrl: 'views/home.html'
	})

});

app.run(['$rootScope', '$http', '$window', '$filter',
function ($rootScope, $http, $window, $filter) {

   $rootScope.reqApiURL = "https://api.dribbble.com/v1";

   $rootScope.reqWithToken = function(service, params, type, success, error){
    $http({
      url: service,
      method: type,
      data: params,
        headers: { 'Authorization': 'Bearer c593326bb298d8049bc56ed0e115cc21c98b70f7144511821fd26b7058aab877'}
    }).then(function(response) {
      success(response);
    }, function(err) {
      error(err);
    });
   }


}]);

app.directive('myEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.myEnter);
                });

                event.preventDefault();
            }
        });
    };
});
