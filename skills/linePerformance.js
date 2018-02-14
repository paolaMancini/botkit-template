module.exports = function (controller) {
	              var request = require('request');
	               controller.hears( [/line\b/], 'direct_message,direct_mention', function(bot, message){
	           
	                   request('http://194.79.57.109:8080/SFapi/status?machine=', function(error, response, body) {
	                       console.log('error:', error); // Print the error if one occurred
	                       console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	                       console.log('body:', body); // Print the HTML for the Google homepage.
	       
	                       var jsonData = JSON.parse(body);
	                     //var linea0 = jsonData.machines[0].machine;
	                     //console.log('linea0:' ,linea0); 
	                       for (var i = 0; i < jsonData.machines.length; i++) {
	                           var machine = jsonData.machines[i].machine;
	                         var alias = jsonData.machines[i].alias;
	                         var oee = jsonData.machines[i].alias;
	                     
	                           console.log(machine);
	                         console.log(alias);
	                         console.log(oee);
	                      }
	                   });
	       
	                    
	                   
	                   bot.startConversation(message, function (err, convo) {
			   http://194.79.57.109:8080/SFapi/status?machine=fakeMachine0
			   var line="fakeMachine0|fakeMachine1|fakeMachine2|fakeMachine3|fakeMachine4|fakeMachine5"
	                   convo.ask("which line do you eant to watch over?", 
	                            [
	                           { pattern: line,
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
				   "The '{{responses.answer}}' ha the following performance values:\nAvailability:77.49%\nQuality:97.29\nPerformance:67.7
	                           "yes");
	                           
	                         convo.addMessage(
	                           "Glad having being helped you",
	                           "no");
	                     })  
	               } );
	           }
	
	


 

