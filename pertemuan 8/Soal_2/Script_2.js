$(document).ready(function () {
    $("#addBtn").click(function () {
      const name = $("#nameInput").val().trim();
      if (name !== "") {
        $("<div>").text(name).appendTo("#nameList");
        $("#nameInput").val(""); // clear input
      }
    });
  
    $("#searchBtn").click(function () {
      const keyword = $("#nameInput").val().trim().toLowerCase();
      $("#nameList div").removeClass("highlight");
  
      if (keyword !== "") {
        $("#nameList div").each(function () {
          const currentName = $(this).text().toLowerCase();
          if (currentName.includes(keyword)) {
            $(this).addClass("highlight");
          }
        });
      }
    });
  });