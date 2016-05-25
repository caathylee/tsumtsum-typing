angular.module('app', [])
.controller('TypingController', function ($scope, $interval) {
  $scope.testParagraph = "Hi Everyone! This is my mvp project. Here's a joke: Why was Tigger in the toilet? Answer: he was looking for Pooh!";
  $scope.totalTime = 0;
  $scope.timing;
  $scope.isCalled = false;
  $scope.keepTrackOfGameRound = function () {
    if (!$scope.isCalled) {
      $scope.isCalled = true;
      $scope.gameTimerFunction();
    } else if ($scope.words.length === 0) {
      $interval.cancel($scope.gameTime);
      $scope.calculateWPM();
    }
  };
  $scope.gameTimerFunction = function() {
    $scope.gameTime = $interval(function () {
      $scope.totalTime++;
    }, 1000);
  };
  $scope.hideInput = true;
  $scope.hideCountdown = true;
  $scope.words = $scope.testParagraph.split(' ');
  $scope.wpm;
  $scope.calculateWPM = function() {
    var totalWords = $scope.testParagraph.split(' ').length;
    $scope.wpm = Math.floor((totalWords/$scope.totalTime)*60);  
  };
  // $scope.wordLimit = $scope.words[0];
  var typed = angular.element(document.querySelector('p#whatYoureTyping'));
  $scope.wordsTyped = 0;
  $scope.checkTypeField = function() {
    if( $scope.whatYoureTyping === $scope.words[0]) {
      typed.removeClass('red');
      $scope.words.shift();
      $scope.wordsTyped++;
      console.log($scope.words[0]);
      $scope.whatYoureTyping = '';
    }  else {
      typed.addClass('red');
      //display the word in red
    }
  };
  $scope.secondsLeft = 3;
  $scope.loadingGameCountdown = () => {
    var timer = $interval(() => {
      if ($scope.secondsLeft <= 0) {
        clearInterval(timer);
        var userPlayer = angular.element(document.querySelector('img#userPlayer'));
        var computerPlayer = angular.element(document.querySelector('img#computerPlayer'));
        // computerPlayer.addClass('rotate');
        computerPlayer.addClass('animate');
        userPlayer.addClass('animateUser');
        $scope.hideCountdown = true;
        $scope.keepTrackOfGameRound();

        $scope.computerMovement();
      } else {
        --$scope.secondsLeft;
      }
    }, 1000);
  };

  $scope.buttonClicked = function () {
    $scope.hideInput = false;
    $scope.hideCountdown = false;
    $scope.loadingGameCountdown();
  };
  $scope.computerMovement = function() {
    $scope.computerPlayer;
    //move computerPlayer based on percentage of words typed
  };
});