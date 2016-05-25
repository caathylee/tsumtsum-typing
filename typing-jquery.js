$(function() {
  var p = $('body p#testParagraph').text().trim().split(' ');

  for (var i = 0; i < p.length; i++) {
    $('body').append('<span>' + p[i] + '</span>');
  }


  // function getRandomColor() {
  //     var letters = '0123456789ABCDEF'.split('');
  //     var color = '#';
  //     for (var i = 0; i < 6; i++ ) {
  //         color += letters[Math.floor(Math.random() * 16)];
  //     }
  //     return color;
  // }

});
