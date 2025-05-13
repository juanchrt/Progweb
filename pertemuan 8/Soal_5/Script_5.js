$(document).ready(function () {
  $('#searchBox').on('keyup', function () {
    var keyword = $(this).val().toLowerCase();

    $('.company').each(function () {
      var text = $(this).text().toLowerCase();
      if (keyword !== "" && text.includes(keyword)) {
        $(this).addClass('highlight');
      } else {
        $(this).removeClass('highlight');
      }
    });
  });
});