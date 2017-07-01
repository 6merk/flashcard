//require file systems
var fs = require('fs');

var inquirer = require('inquirer');

//Basic Card Constructor
function BasicCard (front, back) {
	this.front = front;
	this.back = back;
}

//Prototype to log cards
BasicCard.prototype.logCard = function () {
	fs.appendFile('basiclog.txt', this.front + "," + this.back + ";");
	console.log("Basic card added");
}


var basicDeck = [];

//function to fill out basic card
module.exports.makeBasicCard = function () {
	inquirer.prompt([
		{
			name: "front",
			message: "What do you want on the front of the card?"
		},
		{
			name: "back",
			message: "What do you want on the back of the card?"
		}
	]).then(function(contents) {
		var newCard = new BasicCard (contents.front, contents.back);
		newCard.logCard();
	})
}