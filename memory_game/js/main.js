console.log("up and running!");

const cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png",
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png",
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png",
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png",
  }

];

let counter = 0;
var cardsInPlay = [];

function checkForMatch()
{
  if(cardsInPlay[0] === cardsInPlay[1])
  {
    console.log("You found a match!");
    counter++;
    //alert("You found a match!");
  }else{
    console.log("Sorry, try again.");
    counter--;
    //alert("Sorry, try again.");
  }
}


function flipCard()
{
  let cardId = this.getAttribute('data-id');
  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  //console.log(cards[cardId].cardImage);
  //console.log(cards[cardId].suit);
  this.setAttribute('src',cards[cardId].cardImage);
  if(cardsInPlay.length === 2)//fixing logic where it would create false negatives due to checking against null
  {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        checkForMatch()
    } else {
        checkForMatch()
    }
  }
  console.log("Score: " + counter);
}

function createBoard()
{
  for (let i = 0; i < cards.length; i++) {
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src',"images/back.png");
    cardElement.setAttribute('data-id',i);
    cardElement.addEventListener('click',flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }


}

function createButton()
{
  let resetButton = document.getElementById('reset');
  resetButton.addEventListener('click',reset);
}

function reset()
{
  //go through cards played and reset images
  let list = document.getElementById('game-board');
  while(list.firstChild) {
    list.removeChild(list.firstChild);
  }
  createBoard();
  //turns out that game-board is holding the cards so I actually dont touch cardsInPlay
  //reset the cardsInPlay array
  cardsInPlay = [];

  console.log(cardsInPlay.length);
}


createBoard();
createButton();
