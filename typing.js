angular.module('app', [])
.controller('TypingController', function ($scope, $interval) {
  $scope.testParagraph = '"Hello, Nick," said Harry. "Hello, hello," said Nearly Headless Nick, starting and looking round. He wore a dashing, plumed hat on his long curly hair, and a tunic with a ruff, which concealed the fact that his neck was almost completely severed. He was pale as smoke, and Harry could see right through him to the dark sky and torrential rain outside. "You look troubled, young Potter," said Nick, folding a transparent letter as he spoke and tucking it inside his doublet.';
  $scope.timePassed = 0;
  $scope.gameTime = $interval(function () {
    $scope.timePassed++;
  }, 1000);
  $scope.keepTrackOfGameRound = function () {
    $scope.gameTime();
    if($scope.words.length === 0) {
      clearInterval($scope.gameTime);
    }
  };
  $scope.hideInput = true;
  $scope.hideCountdown = true;
  $scope.secondsLeft = 3;
  $scope.words = $scope.testParagraph.split(' ');
  $scope.totalTime;
  $scope.wpm = function(){
    var totalWords = $scope.testParagraph.split(' ').length;
    
  };
  $scope.wordLimit = $scope.words[0];
  var typed = angular.element(document.querySelector('p#whatYoureTyping'));
  $scope.checkTypeField = function() {
    // for (var i = 0; i<$scope.words[0].length; i++) {
    //   if ()
    // }
    if( $scope.whatYoureTyping === $scope.words[0]) {
      typed.removeClass('red');
      $scope.words.shift();
      console.log($scope.words[0]);
      $scope.whatYoureTyping = '';
    }  else {
      typed.addClass('red');
      //display the word in red
    }
  };
  $scope.countdown = () => {
    var timer = $interval(() => {
      if ($scope.secondsLeft <= 0) {
        clearInterval(timer);
        var userPlayer = angular.element(document.querySelector('img#userPlayer'));
        var computerPlayer = angular.element(document.querySelector('img#computerPlayer'));
        userPlayer.addClass('rotate');
        computerPlayer.addClass('rotate');
        $scope.hideCountdown = true;
        $scope.keepTrackOfGameRound();
      } else {
        --$scope.secondsLeft;
      }
    }, 1000);
  };

  $scope.buttonClicked = function () {
    $scope.hideInput = false;
    $scope.hideCountdown = false;
    $scope.countdown();
  };
});