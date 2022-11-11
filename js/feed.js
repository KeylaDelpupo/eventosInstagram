const likesImg = document.querySelector('.likes img');
const likesText =document.querySelector('.likes b')


likesImg.addEventListener('click', function () {
    const clickedImg = 'red-heart.png';
    //const clicado = this.src.split('/').at(-1) == clickedImg
    const clicado = this.src.indexOf('red-heart.png') != -1
    const likesCount = +(likesText.innerText.split(' ')[0])
    //no lugar do " + ", posso usar number ou parseInt

    if (clicado) {
        this.src = 'img/icons/heart.svg' //sem cor
        likesText.innerText = likesCount - 1 + ' likes'
    }else {
        this.src = 'img/icons/' + clickedImg;// com cor
        likesText.innerText = likesCount + 1 + ' likes'
    }
});

const verMaisBtn = document.querySelector('#more');

const addPost = function(){
    const card = document.querySelector('.card').cloneNode(true);
    const mainContainer = document.querySelector('main.container');

    mainContainer.insertBefore(card, verMaisBtn);



}
verMaisBtn.onclick = addPost;
    




