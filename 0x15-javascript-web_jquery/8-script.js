//JavaScript script that fetches and lists the title for all movies by using this URL: 
//https://swapi-api.alx-tools.com/api/films/?format=json


$(document).ready(() => {
  function translateHello () {
    const languageCode = $('#language_code').val();
    $.get(`https://www.fourtonfish.com/hellosalut/?lang=${languageCode}`, (data) => {
      $('#hello').html(data.hello);
    });
  }

  $('#btn_translate').click(translateHello);

  $('#language_code').keypress((e) => {
    if (e.which === 13) {
      translateHello();
    }
  });
});
