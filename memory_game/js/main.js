console.log("up and running!");

var cards = ["queen","queen","king","king"];
var cardsInPlay = [];

let cardOne = cards[0];
let cardTwo = cards[2];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
console.log("User Flipped queen");
console.log("User Flipped king");

if(cardsInPlay[0] === cardsInPlay[1])
{
  alert("You Found a Match");
}else{
  alert("Sorry, try again");
}
