//require file systems
var fs = require('fs');

//reqiured files
var basicCards = require("./basic.js");
var clozeCards = require("./cloze.js");

var inquirer = require('inquirer');

module.exports.viewType = function () {
	inquirer.prompt([
		{
			name: "type",
			message: "See Basic cards or Cloze Cards? (b/c)"
		}
	]).then(function(answer) {
		if (answer.type === "b") {
			//read basic log to retrieve card contents
			fs.readFile("basiclog.txt", "utf-8", function (err, data) {
				//split contents and semicolon
				var deckArr = data.split(";");
				//loop through array and separate back from front
				for(var i = 0; i < (deckArr.length - 1); i++) {
					var currentCard = deckArr[i].split(",");
					var front = currentCard[0];
					var back = currentCard[1];
					console.log("Front: " + front);
					console.log("Back: " + back);
				}
			});
		}
	})
}