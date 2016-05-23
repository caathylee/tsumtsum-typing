$(document).ready(function() {
  
  $('#testParagraph').append('<p>"Hello, Nick," said Harry. "Hello, hello," said Nearly Headless Nick, starting and looking round. He wore a dashing, plumed hat on his long curly hair, and a tunic with a ruff, which concealed the fact that his neck was almost completely severed. He was pale as smoke, and Harry could see right through him to the dark sky and torrential rain outside. "You look troubled, young Potter," said Nick, folding a transparent letter as he spoke and tucking it inside his doublet.</p>');

  $('#start').on('click', function(){
    $(this).replaceWith('<input type="text" ng-model="paragraphText" placeholder="Type in here"/>');
    $('#countdown').append('<p>Get ready to race! In <span id="seconds">8</span> seconds.</p>');

    //Timer countdown for 8 seconds before game starts
    var i = 8;
    setInterval(function() {
      if (i <= 0) {
        clearInterval(this);
        $('#countdown').text('');
        $('input').val('');
        $('img#userPlayer').addClass('rotate');
        $('img#computerPlayer').addClass('rotate');
      } else {
        $('span#seconds').html(--i);
      }
    }, 1000);
  });

});

