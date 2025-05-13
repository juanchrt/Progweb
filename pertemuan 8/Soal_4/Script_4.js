$(document).ready(function () {
  $('.header').click(function () {
    var flag = $(this).is(':checked');

    if (flag) {
      $("input:checkbox.body").attr("checked", "checked");
    } else {
      $("input:checkbox.body").removeAttr("checked");
    }

    console.log("Jumlah checkbox terpilih: " + $("input:checkbox.body:checked").length);
  });
});