latest(articles);

function latest(articles) {
  latestItems = articles.slice(0, size);

  var div = document.getElementById('rowLatest');
  latestItems.forEach((item) => {
    const card = document.createElement('div');
    card.classList.add('card', 'm-2');
    card.style.width = "18rem";
    const coverImg = document.createElement('img');
    coverImg.classList.add('card-img-top');
    coverImg.src = item.coverimg;
    card.appendChild(coverImg);
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = item.title;
    cardBody.appendChild(cardTitle);
    const cardSubtitle = document.createElement('h6');
    cardSubtitle.classList.add('card-subitle', 'mb-2', 'text-muted');
    cardSubtitle.textContent = item.subtitle;
    cardBody.appendChild(cardSubtitle);
    const cardDate = document.createElement('p');
    cardDate.classList.add('card-text');
    cardDate.style.fontweight = "300";
    cardDate.textContent = item.date;
    cardBody.appendChild(cardDate);
    const cardLink = document.createElement('a');
    cardLink.classList.add('btn', 'btn-primary');
    let baseAdd = "https://www.nickthien.com/writtenwork/";
    cardLink.href = baseAdd + item.category + "/" + item.url;
    cardLink.textContent = "Read";
    cardBody.appendChild(cardLink);
    card.appendChild(cardBody);
    div.append(card);
  })
}
