var net = require("net");
var chalk = require("chalk");
var white = chalk.white;

var responses = [
	"It is decidedly so", "As I see it, yes", "Outlook good", "Better not tell you now", "Ask again later", "Concentrate and ask again", "My sources say no", "Outlook not so good", "Don't count on it"
	];

var server = net.createServer(function(connection){
	connection.write("\n Ask me a Yes or No Question...\n");
	connection.on("data", function(input){
		input = input.toString().trim();
		//console.log(input.indexOf("?"));
		if (input.indexOf("?") !== -1){
			console.log("You asked a question.")
		var randomResponse = responses[Math.floor(Math.random() * responses.length)];
		connection.write(white(randomResponse) + "\n");

		} else {
			connection.write(white("Please ask a properly formatted question."));
		}
	});
});

server.listen(2002, function(){
	console.log("listening!")
});