 
var backendRestClient = require("./backendRestClient.js");
var data=backendRestClient.jsonAllData;
var machinesList=backendRestClient.machs;

module.exports = function (controller) {
	controller.hears( [/line performance\b/], 'direct_message,direct_mention', function(bot, message){
	 for (var i = 0; i < data.machines.length; i++) {
		     
		     var mpattern=machinesList.join("|");
		     console.log('mpattern:',mpattern);
		     bot.startConversation(message, function (err, convo) {

		     convo.ask("Do you want more details?", 
		     		[
				{ pattern: mpattern,
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
					convo.say("Sorry, I don't know this machine. Try another one...");
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
	}
 

