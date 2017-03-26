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
        $scope.cardShotLittleOffIcons = false;
        $scope.cardShotOffIcons = false;
        break;
      case 2:
        $scope.cardShotBigWithIcons = true;
        $scope.cardShotLittleOffIcons = false;
        $scope.cardShotOffIcons = false;
        break;
      case 3:
        $scope.cardShotLittleOffIcons = true;
        $scope.cardShotBigWithIcons = false;
        $scope.cardShotOffIcons = false;
        break;
      case 4:
        $scope.cardShotOffIcons = true;
        $scope.cardShotLittleOffIcons = false;
        $scope.cardShotBigWithIcons = false;
        break;
      default:

    }
  }

  $scope.deliberatelyTrustDangerousSnippet = function(snippet) {

    return $sce.trustAsHtml(snippet);
  };

  $('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
  });

});
