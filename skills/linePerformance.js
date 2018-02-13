
module.exports = function (controller) {
	   	var request = require('request');
	        controller.hears( [/line performance\b/], 'direct_message,direct_mention', function(bot, message){
	
	           
	            request('http://194.79.57.109:8080/SFapi/machines', function(error, response, body) {
	                console.log('error:', error); // Print the error if one occurred
	                console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	                console.log('body:', body); // Print the HTML for the Google homepage.
	
	                var jsonData = JSON.parse(body);
	                for (var i = 0; i < jsonData.length; i++) {
	                    //var counter = jsonData.machines[i];
	                    console.log(jsonData[i].machine);
	                }
	            });
	
	             
		     
		     bot.startConversation(message, function (err, convo) {

		     convo.ask("Which linewhich line do you want to watch over?", 
		     		[
				{ pattern: "^fakeMachine0|fakeMachine1|fakeMachine1|fakeMachine2|fakeMachine3|fakeMachine4|fakeMachine5",
				    callback: function (response, convo) {
					convo.gotoThread("success");
				    },
				},
				{ pattern: "escape",
				    callback: function (response, convo) {
					convo.gotoThread("escape");
				    },
				},
				{
				    default: true,
				    callback: function (response, convo) {
					convo.say("Sorry, I don't know this line. Try another one...");
					convo.repeat();
					convo.next();
				    }
				}], { key: "answer" });

			    // yes thread
			    convo.addMessage(
				"Cool, I love '{{responses.answer}}' too"+,
				"success");
				
			    convo.addMessage(
				"Glad having being helped you",
				"escape");
			})  
	        } );
	    }
