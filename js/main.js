console.log("Up and running!");

//array
var cards = ["queen","queen","king","king"];
var cardsInPlay = [];

//function definition
var checkForMatch = function(){
	//if loop
	if (cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		}else{
			alert("Sorry, try again.");
		}
	}
}

var flipCard = function(cardId){
	//console log
	console.log("User flipped " + cards[cardId]);

	cardsInPlay.push(cards[cardId]);

	checkForMatch();
}

//function call
flipCard(0);
flipCard(2);