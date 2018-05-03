!function () {
  $.getJSON('/tweets', function (data) {
    $('.app--tweet--list').html('');
    for(let i=0; i<data.length;i++){
        let tweetHtml = `
          <li>
            <strong class="app-tweet=timestamp">${data[i].time}</strong>
            <a class="app--tweet--author">
              <img class="app--avatar" src="${data[i].image}"/>
              <h4>${data[i].name}</h4> @${data[i].screen_name}
            </a>
            <p>${data[i].twit}</p>
          </li>
          <li class="app--tweet--actions circle--list--inline">
            <a class="app-retweet">
              <span class="tooltip">Retweet</span>
                <span class="tooltip">${data[i].retweet}</span>
            </a>  
          </li>
          <li>
            <a class="app--like">
              <span class="tooltip">Like</span>
            <strong>${data[i].favorite}</strong>
            </a>
          </li>

        `;
        let tweetsHtml = $('.app--tweet--list').html();
        tweetsHtml += tweetHtml;
        $('.app--tweet--list').html(tweetsHtml);
    }
  });
}();