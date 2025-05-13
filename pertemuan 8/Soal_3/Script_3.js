let redBoxIndex = -1;

$('.box').click(function () {
  $('.box').css('background-color', 'white');
  $(this).css('background-color', 'red');
  redBoxIndex = $('.box').index(this);
});

$('#changeBtn').click(function () {
  if (redBoxIndex === -1) return;
$('.box').each(function (index) {
  if (index < redBoxIndex && $(this).css('background-color') === 'rgb(255, 255, 255)') {
    $(this).css('background-color', 'yellow');
  }
});
});
