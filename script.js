$(document).ready(function() {

	//what does this do?
	function convert_value_to_string(value) {
		if (value > 10) {
			switch (value) {
				case 11:
				return 'Jack';
				break;
				case 12:
				return 'Queen';
				break;
				case 13:
				return 'King';
				break;
			}
		}
		return value.toString();
	}

	//what does this do?
	var deck = [];
	var suits = ['hearts', 'diamonds', 'spades', 'clubs'];
	for (var i = 0; i<suits.length; i++) {
		var suit = suits[i];
		for (var j = 0; j<13; j++) {
			deck.push({number: j+1, suit: suit});
		}
	}
	
	//what does this do?
	var shuffle = function(array) { 
		var copy = [];
		var n = array.length; 
		var i; 
		while (n) { i = Math.floor(Math.random() * array.length);  
			if (i in array) { 
		 		copy.push(array[i]); 
		 		delete array[i]; 
		 		n--; 
		 	} 
		} 
		return copy; 
	}

	var shuffleDeck = shuffle(deck);

	var cards_player_1 = [];
	var cards_player_2 = [];
	//divide out the cards into the two arrays
	var cards_player_1 = shuffleDeck.slice(0, 26);
	var cards_player_2 = shuffleDeck.slice(26, shuffleDeck.length);
	
	//create a function (algorithm) called "war" that takes two cards as parameters, compares them and returns a winner. A tie should return false.
	function war(p1Card, p2Card) {
			if(p1Card.number > p2Card.number){
				return "Player 1";
			}
			else if(p2Card.number > p1Card.number){
				return "Player 2";
			}
			else {
				return false;
			}
	}
	
	
	//create a play function
		//compare the cards
		//give the winner both cards (at end of deck)
	function play() {
		var p1Card = cards_player_1.shift();
		var p2Card = cards_player_2.shift();
		var war2 = war(p1Card, p2Card);
		console.log(war2);
			if(war2 === "Player 1"){
				cards_player_1.push(p1Card, p2Card);
			}
			else if(war2 === "Player 2"){
				cards_player_2.push(p1Card, p2Card);
			}
			else {
				debugger;
				var tieFunction = function(cards_player_1, cards_player_2){
					for(var i = 0; i < 3; i++){
						if(cards_player_1[i] > cards_player_2[i]){
							cards_player_1.push(p1Card, p2Card);
						}
						else {
							cards_player_2.push(p2Card, p2Card);
						}
					}
				}
			}

		//this function (defined below) will continue to the next turn
		advance();
	}
	
	function advance() {
		//take the top two cards and display them
		if (cards_player_1.length) {
			var card_1 = cards_player_1[0];
			var card_2 = cards_player_2[0];
			$("#opp-card").html(convert_value_to_string(card_1.number)+" "+card_1.suit);
			$("#opp-card-count").html(cards_player_1.length);
			$("#my-card").html(convert_value_to_string(card_2.number)+" "+card_2.suit);
			$("#my-card-count").html(cards_player_2.length);
			
		}
	}
	advance();
	
	$(".btn").click(function() {
		play();
	});
});
