
//get json from /tweets and add tweets
!function () {
    $.getJSON('/messages', function (data) {
      $('.app--message--conversation').html('');
      for(let i=0; i<data.length;i++){
        let msgHtml = `
          <li class="app--message--me">
            <div class="app--avatar" style="background-image: url(${data[i].image})" >
              <img src="${data[i].image}" />
            </div>
              <p class="app--message--text">${data[i].text}</p>
              <p class="app--message--timestamp">${data[i].name}</p>
          </li>
        `;
        let msgsHtml = $('.app--message--conversation').html();
        msgsHtml += msgHtml;
        $('.app--message--conversation').html(msgsHtml);
      }
    });
  }();
  