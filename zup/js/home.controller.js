app.controller('homeCtrl', function($scope, $rootScope, $sce, $routeParams) {

  $scope.numberPage = 1;
  $scope.cardShotBigWithIcons = false;
  $scope.cardShotLittleOffIcons = false;
  $scope.cardShotOffIcons = false;

  // $scope.callbackResponse = (document.URL).split("#")[1];
  // console.log($scope.callbackResponse);
  // var responseParameters = (callbackResponse).split("&");
  // var parameterMap = [];
  // for(var i = 0; i < responseParameters.length; i++) {
  //     parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
  // }

  $scope.addSearchInShots = function() {

    $scope.listOfShots.map(function(el) {

      el.search = `${el.title}`;

      return el;
    });

  }

  $scope.login = function() {
    window.location.href = "https://dribbble.com/oauth/authorize?client_id=" + "4dd5c04b48cc7c5b0fefaaa45678fb340802d1d667b879ee944396565effa622";
  }



  $scope.search = function(textSearch) {

    $scope.numberPage = 1;

    $scope.listOfShots = $scope.listOfShots.filter(function(el) {

      if (el.search.indexOf(textSearch) != -1) {
        return el;
      }

    });

  }

  $scope.renderSearch = function(textSearch) {

    if (textSearch == null || textSearch == '') {
      return;
    } else {
      $scope.search(textSearch);
    }

  }




  $scope.moreShots = function() {

    $scope.numberPage++;

    $rootScope.reqWithToken('https://api.dribbble.com/v1/shots?page='+$scope.numberPage+'&per_page=30', null, 'GET', function(success) {

      $scope.aux = success.data;

      for (var i = 0; i < $scope.aux.length; i++) {

        $scope.listOfShots.push($scope.aux[i]);
      }

      $scope.addSearchInShots();

      console.log(success);

    }, function(err) {

      console.log(err);

    });

  }

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

    $rootScope.reqWithToken('https://api.dribbble.com/v1/shots/'+$rootScope.shotOfContentModal.id+'/comments', null, 'GET', function(success) {

      $rootScope.commentsModal = success.data;

      console.log(success);

    }, function(err) {

      console.log(err);

    });

  }

  $scope.init = function() {
    $rootScope.reqWithToken('https://api.dribbble.com/v1/shots?page=1&per_page=30', null, 'GET', function(success) {

      $scope.listOfShots = success.data;

      $scope.addSearchInShots();

      console.log(success);

    }, function(err) {

      console.log(err);

    });
  }

  $scope.init();

  $('ul.nav li.dropdown').hover(function() {
    alert("oi")
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
  });

});
