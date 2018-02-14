module.exports = function (controller) {
	var request = require('request');
			controller.hears([/^plant performance/], "direct_message,direct_mention", function (bot, message) {
				request('http://194.79.57.109:8080/SFapi/machines', function(error, response, body) {
				console.log('error:', error); // Print the error if one occurred
				console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
				console.log('body:', body); // Print the HTML for the Google homepage.
				
				var jsonData = JSON.parse(body);
			});			  
	
			bot.startConversation(message, function (err, convo) {
	
				convo.ask("What is your favorite color?", [
					{
						pattern: "^blue|green|pink|red|yellow$",
						callback: function (response, convo) {
							convo.gotoThread("confirm_choice");
						},
					},
					{
						default: true,
						callback: function (response, convo) {
							convo.say("Sorry, I don't know this color. Try another one...");
							convo.repeat();
							convo.next();
						}
					}
				], { key: "answer" });
	
				// Confirmation thread
				convo.addMessage(
					"You picked '{{responses.answer}}'",
					"confirm_choice");
	
				convo.addQuestion("Please, confirm your choice ? (yes|no)", [
					{
						pattern: "^yes|hey|oui|si|da$",
						callback: function (response, convo) {
							var pickedColor = convo.extractResponse('answer');                        
							convo.setVar("color", pickedColor);
							convo.gotoThread("success");
						},
					},
					{
						default: true,
						callback: function (response, convo) {
							convo.transitionTo("default", "Got it, let's try again...");
						}
					}
				], {}, "confirm_choice");
	
				// Success thread
				convo.addMessage(
					"Cool, I love '{{vars.color}}' too",
					"success");
			});
		
	};
