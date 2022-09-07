// write your code here

let cardinfo;
function cardRender(card){
    cardinfo = card
    cardTitleTag = document.querySelector('#card-title'),
    cardImageTag = document.querySelector('#card-image'),
    cardLikesTag = document.querySelector('#like-count'),
    cardLikesBtnTag = document.querySelector('#like-button'),
    cardListTag = document.querySelector('#comments-list'),
    cardCommentFormTag = document.querySelector('#comment-form'),
    cardCommentInputTag = document.querySelector('#comment'),


  cardTitleTag.textContent = card.title;
  cardImageTag.src = card.image;
  cardLikesTag.textContent = `${card.likes} likes`;
    
  while(cardListTag.hasChildNodes()){
    cardListTag.removeChild(cardListTag.lastChild)
}

card.comments.forEach(comment => {
    let commentTag = document.createElement('li');
    commentTag.textContent = comment.content;
    cardListTag.appendChild(commentTag)
});


cardLikesBtnTag.addEventListener('click', () => {
    card.likes += 1;
    cardLikesTag.textContent = `${card.likes} Likes`

})
cardCommentFormTag.addEventListener('submit', (e) => {
    e.preventDefault();
    let commentTag = document.createElement('li');
    commentTag.textContent = cardCommentInputTag.value;
    cardListTag.appendChild(commentTag);

    const newComment = {
        id: card.comments.length+1,
        imageId: 1,
        content: cardCommentInputTag.value
    }
    card.comments.push(newComment);

    fetch('http://localhost:3000/images/1', {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(card)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(`Error: ${err}`));

    fetch('http://localhost:3000/comments/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newComment)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(`Error: ${err}`));

    cardCommentFormTag.reset();
});

};


document.addEventListener("DOMContentLoaded", ()=> {
    cardRender();
})
function fetchData(path=1){
    url = `http://localhost:3000/images/${path}`;
    fetch(url)
    .then(response => response.json())
    .then(data => cardRender(data))
    .catch(err => (`Error: ${err}`));
};
fetchData()

