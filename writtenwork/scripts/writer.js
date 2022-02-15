title(post);
header(post);
coverImg(post);
writer(post);

function title(post) {
  document.title = post.title;
}

function header(post) {
  const div = document.getElementById('info');
  const articleTitle = document.createElement('h2');
  articleTitle.textContent = post.title;
  div.appendChild(articleTitle);
  const articleSubtitle = document.createElement('h5');
  articleSubtitle.classList.add('text-muted');
  articleSubtitle.textContent = post.subtitle;
  div.appendChild(articleSubtitle);
  const articleDate = document.createElement('h6');
  articleDate.innerHTML = "<strong>Published:</strong> <span style='font-weight: 300;'>" + post.date + "<span>";
  div.appendChild(articleDate);
}

function coverImg(post) {
  const div = document.getElementById('coverImg');
  const articleCover = document.createElement('img');
  articleCover.classList.add('rounded', 'mx-auto', 'my-3', 'd-block');
  articleCover.style.width = "100%";
  articleCover.src = post.coverimg;
  div.appendChild(articleCover);
}

function writer(post) {
  var div = document.getElementById('articleBody');
  post.body.forEach((item) => {
    switch (item.type){
      case "header":
        var headerOut = document.createElement('h4');
        headerOut.innerHTML = "<u><strong>" + item.output + "</strong></u>";
        div.appendChild(headerOut);
        break;
      case "text":
        var textOut = document.createElement('p');
        textOut.innerHTML = item.output;
        div.appendChild(textOut);
        break;
      case "list":
        var listOut = document.createElement('ul');
        item.listItems.forEach((li) => {
          var listItem = document.createElement('li');
          listItem.innerHTML = li.listItem;
          listOut.appendChild(listItem);
        })
        div.appendChild(listOut);
        break;
      default:
        break;
    }
  })
}
