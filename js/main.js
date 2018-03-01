console.log("Up and running!");

//array
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
var cardsInPlay = [];
var win = 0;
var lose = 0;

//function definition
var reset = function(){
	var resetCards = document.getElementsByTagName('img');
	for(var i = 0; i < cards.length; i++){
		resetCards[i].setAttribute('src','images/back.png');
	}
	cardsInPlay = [];
}

var checkForMatch = function(){
	//variables
	var message = document.getElementById('game_message');

	var scoreCardWin = document.getElementById('score_won');
	var scoreCardLose = document.getElementById('score_lost');

	var button = document.getElementsByTagName('button')[0];
	console.log(button);

	//if loop
	if (cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]) {
			message.textContent = "You found a match!";
			win++;
			scoreCardWin.textContent = win;
		}else{
			message.textContent = "Sorry, try again.";
			lose++;
			scoreCardLose.textContent = lose;
		}

		button.addEventListener('click', reset);
		//reset();
	}
}

var flipCard = function(){
	var cardId = this.getAttribute('data-id');
	//console log
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	cardsInPlay.push(cards[cardId].rank);

	this.setAttribute('src', cards[cardId].cardImage);

	checkForMatch();
}

var createBoard = function(){
	for(var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src',"images/back.png");
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

//function call
createBoard();