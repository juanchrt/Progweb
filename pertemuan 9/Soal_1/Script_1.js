$(document).ready(function () {
  $("#search").click(function () {
    let kelas = $(":radio[name='kelas']:checked").val();
    let file;

    if (kelas === "A") {
      file = "nilaiA.js";
    } else if (kelas === "B") {
      file = "nilaiB.js";
    } else {
      file = "nilai.js";
    }

    $.getJSON(file, function (data) {
      let rows = "";
      $.each(data.nilai, function (i, mhs) {
        rows += "<tr>" +
          "<td>" + mhs.nrp + "</td>" +
          "<td>" + mhs.nama + "</td>" +
          "<td>" + mhs.nilaiakhir + "</td>" +
          "<td>" + mhs.kelas + "</td>" +
          "</tr>";
      });
      $("#hasil").html(rows);
    });
  });
});