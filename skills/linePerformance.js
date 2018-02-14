module.exports = function (controller) {
	var request = require('request');
	 controller.hears( [/line\b/], 'direct_message,direct_mention', function(bot, message){
 
		 request('http://194.79.57.109:8080/SFapi/status?machine=', function(error, response, body) {
			 console.log('error:', error); // Print the error if one occurred
			 console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
			 console.log('body:', body); // Print the HTML for the Google homepage.

			 var jsonData = JSON.parse(body);
		   
		 });

		  
		 
		 bot.startConversation(message, function (err, convo) {
 
 		 //var line=fakeMachine0|fakeMachine1|fakeMachine2|fakeMachine3|fakeMachine4|fakeMachine5
		 convo.ask("which line do you eant to watch over?", 
				  [
				 { pattern: "fakeMachine0|fakeMachine1|fakeMachine2|fakeMachine3|fakeMachine4|fakeMachine5",
					 callback: function (response, convo) {
						convo.gotoThread("yes");
					 },
				 },
				 { pattern: "^no|No|n$",
					 callback: function (response, convo) {
						convo.gotoThread("no");
					 },
				 },
				 {
					 default: true,
					 callback: function (response, convo) {
						convo.say("Sorry, I don't know this color. Try another one...");
						convo.repeat();
						convo.next();
					 }
				 }], { key: "answer" });

			   // yes thread
			   convo.addMessage(
	 			"The following performance values:fakeMachine0 : 43.73%'\n' fakeMachine1: 31.56% '\n' fakeMachine2: 40.31%'\n' fakeMachine3: 43.65%'\n' fakeMachine4: 47.02%'\n'fakeMachine5: 38.52%",
				 "yes");
				 
			   convo.addMessage(
				 "Glad having being helped you",
				 "no");
		   })  
	 } );
 }
