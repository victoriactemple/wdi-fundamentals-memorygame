console.log("Up and running!");
var cards = [
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
	cardImage: "images/king-of-hearts.png",	
	}	
];
var cardsInPlay = [];
var checkForMatch = function () {
    if (cardsInPlay[0] === cardsInPlay [1]) {
        alert("Your found a match!");
    } else {
        alert("Sorry, try again.");
    }
};

var flipCard = function() {
	var cardId= this.getAttribute('data-id');

	this.setAttribute('src', cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	if(cardsInPlay.length===2){
		checkForMatch();
	}
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	};		

var createBoard = function () {
	for (var i=0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};
createBoard();




//code either deleted or still playing with
// flipCard(0);
// flipCard;
// flipCard(2);
// flipCard;

// 	if (cardsInPlay[0] === cardsInPlay[1]) {
//       console.log("You found a match!");
//   } else {
//       console.log("Sorry, try again.");
//   }
// };





	