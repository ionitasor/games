document.addEventListener('DOMContentLoaded', () => {

    //card option
    const cardArray = [
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheesburger',
            img: 'images/cheesburger.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'blank',
            img: 'images/blank.png'
        },
        {
            name: 'white',
            img: 'images/white.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheesburger',
            img: 'images/cheesburger.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'blank',
            img: 'images/blank.png'
        },
        {
            name: 'white',
            img: 'images/white.png'
        }
    ];

    const grid = document.querySelector('.grid');
    var cardsChosen = [];
    var cardsChosenId = [];

    // create your board   
    // ......................................
    // You can create an <img> element by using the document.createElement() method
    //   var x = document.createElement("IMG");
    //   x.setAttribute("src", "img_pulpit.jpg");
    //   x.setAttribute("width", "304");
    //   x.setAttribute("height", "228");
    //   x.setAttribute("alt", "The Pulpit Rock");
    //   document.body.appendChild(x);
    // ......................................
    //  data-* attributes allow us to store extra information on standard, semantic HTML elements 


    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    // check for matches

    //flip your card
    function flipCard(){
        var cardID = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardID].name);
        cardsChosenId.push(cardID);
        this.setAttribute('src', cardArray[cardID].img);
        if (cardsChosen.length === 2) {
            setTimeout()
        }
    }

    createBoard();



})