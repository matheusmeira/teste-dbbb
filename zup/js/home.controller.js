app.controller('homeCtrl', function($scope, $rootScope, $sce) {

  $rootScope.reqWithToken('/shots', null, 'GET', function(success) {

    $scope.listOfShots = success.data;

    console.log(success);

  }, function(err) {

    console.log(err);

  });

  $scope.sizeCard = function(index) {

    switch (index) {
      case 1:
        $scope.cardShotBigWithIcons = false;
        break;
      case 2:
        $scope.cardShotBigWithIcons = true;
        break;
      case 3:
        $scope.cardShotOffIcons = true;
        break;
      case 4:
        break;
      default:

    }
  }

  $scope.deliberatelyTrustDangerousSnippet = function(snippet) {
    
    return $sce.trustAsHtml(snippet);
  };

});
