!function () {
    $.getJSON('/profile', function (data) {
        let name = data[0].name;
        let image= data[0].image;
        $('.name').text('@'+name);
        $('.avatar').attr("src", image);
        $('.app--avatar').css('background-image', 'url(' + image + ')');
    });
  }();