//require file systems
var fs = require('fs');

function ClozeCard (text, cloze) {
	this.text = text;
	this.cloze = cloze;
}

ClozeCard.prototype.deletedText = function () {
	fs.appendFile("clozelog.txt", this.cloze + "-")
}

ClozeCard.prototype.partialText = function () {
	console.log(this.text)
} 

ClozeCard.prototype.fullText = function () {
	fs.appendFile("clozelog.txt", this.text + ";")
}

ClozeCard.prototype.logCard = function () {

}

var inquirer = require('inquirer');

//function to get contents for cloze card
module.exports.makeClozeCard = function () {
	inquirer.prompt([
		{
			name: "text",
			message: "What is the full text of the card?"
		},
		{
			name: "cloze",
			message: "Which part of the sentence do you want hidden?"
		}
	]).then(function(contents) {
		var newCard = new ClozeCard (contents.text, contents.cloze);
		newCard.deletedText();
		newCard.partialText();
		newCard.fullText();
	})
}