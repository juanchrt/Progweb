$(document).ready(function () {
  $('#look').click(function () {
    $.getJSON("SIJson.txt", function (data) {
      $('#title').val(data.title);
      $('#generator').val(data.generator);

      let output = `<h2><a href="${data.link}" target="_blank">${data.title}</a></h2>`;
      data.items.forEach(item => {
        output += `
          <div class="course">
            <b><a href="${item.link}" target="_blank">${item.title}</a></b><br/>
            <i>By : ${item.author} / <span><em>${item.published}</em></span></i><br/><br/>
            ${item.description}<br/><br/>
            Universitas : <a href="${item.universitas.m}" target="_blank">Click Here</a><br/>
            Tag(s) : ${item.tags}
          </div>
        `;
      });
      output += `<div class="footer">©${data.generator}</div>`;
      $('#output').html(output);\
\
      let jsonText = JSON.stringify(data, null, 2);\
      $('#jsonText').text(jsonText);
    });
  });
});