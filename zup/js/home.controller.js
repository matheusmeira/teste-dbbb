app.controller('homeCtrl', function($scope, $rootScope, $sce) {

  $rootScope.reqWithToken('/shots?page=2&per_page=100', null, 'GET', function(success) {

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

  $scope.sendToModal = function(index) {

    $rootScope.shotOfContentModal = index;

    $rootScope.reqWithToken('/shots/'+$rootScope.shotOfContentModal.id+'/comments', null, 'GET', function(success) {

      $rootScope.commentsModal = success.data;

      console.log(success);

    }, function(err) {

      console.log(err);

    });

  }

  $('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
  });

});
