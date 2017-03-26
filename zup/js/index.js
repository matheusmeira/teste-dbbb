var app = angular.module('App', ['ngRoute', 'ngSanitize']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'homeCtrl'
	})

});

app.run(['$rootScope', '$http', '$window', '$filter',
function ($rootScope, $http, $window, $filter) {

   $rootScope.reqApiURL = "https://api.dribbble.com/v1";

   $rootScope.reqWithToken = function(service, params, type, success, error){
    $http({
      url: $rootScope.reqApiURL + service,
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
