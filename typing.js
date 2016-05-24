angular.module('app', [])
.controller('TypingController', function ($scope, $interval) {
  $scope.hideInput = true;
  $scope.hideCountdown = true;
  $scope.secondsLeft = 8;
  // $scope.checkTypeField = function() {
  //   var words = $scope.testParagraph.split(' ');
  //   if( === words[0]) {
  //     words.shift();
  //   } 
  // };
  $scope.countdown = () => {
    var timer = $interval(() => {
      if ($scope.secondsLeft <= 0) {
        clearInterval(timer);
        var userPlayer = angular.element(document.querySelector('img#userPlayer'));
        var computerPlayer = angular.element(document.querySelector('img#computerPlayer'));
        userPlayer.addClass('rotate');
        computerPlayer.addClass('rotate');
        $scope.hideCountdown = true;
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
  $scope.testParagraph = '"Hello, Nick," said Harry. "Hello, hello," said Nearly Headless Nick, starting and looking round. He wore a dashing, plumed hat on his long curly hair, and a tunic with a ruff, which concealed the fact that his neck was almost completely severed. He was pale as smoke, and Harry could see right through him to the dark sky and torrential rain outside. "You look troubled, young Potter," said Nick, folding a transparent letter as he spoke and tucking it inside his doublet.';
});