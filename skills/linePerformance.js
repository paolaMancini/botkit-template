 
module.exports = function (controller) {
	   	var request = require('request');
	        controller.hears( [/line performance\b/], 'direct_message,direct_mention', function(bot, message){
	
	           
	            request('http://194.79.57.109:8080/SFapi/machines', function(error, response, body) {
	                console.log('error:', error); // Print the error if one occurred
	                console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	                console.log('body:', body); // Print the HTML for the Google homepage.
	
	                var jsonData = JSON.parse(body);
			var linea0 = jsonData.machines[0].machine;
			console.log('linea0:' ,linea0); 
	                //for (var i = 0; i < jsonData.length; i++) {
	                 //   var counter = jsonData.machines[i];
	                  //  console.log(counter.machine.oee);
	              //  }
	            });
	
	             
		     
		     bot.startConversation(message, function (err, convo) {

		     convo.ask("Do you want more details?", 
		     		[
				{ pattern: "^yes|yep|y|Yes$",
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
				"Cool, I love '{{responses.answer}}' too",
				"yes");
				
			    convo.addMessage(
				"Glad having being helped you",
				"no");
			})  
	        } );
	    }
 

