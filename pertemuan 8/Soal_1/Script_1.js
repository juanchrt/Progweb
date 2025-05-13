$(document).ready(function () {
    $("ol.main-menu > li > ol").hide();
  
    $("ol.main-menu > li").hover(
      function () {
        $("ol.main-menu > li > ol").hide(); // sembunyikan semua
        $(this).children("ol").show();      // tampil submenu
      },
      function () {
      }
    );
  
    // Submenu tetap tampil
    $("ol.main-menu > li").on("mouseleave", function () {
      const that = this;
      setTimeout(function () {
        if (!$(that).is(":hover") && !$(that).children("ol").is(":hover")) {
          $(that).children("ol").hide();
        }
      }, 200);
    });
  });