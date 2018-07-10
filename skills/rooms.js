
var JagoCalls = require("./JagoAPIsCalls");

module.exports = function(controller) {

    controller.hears(['room|lock'], 'direct_message,direct_mention', function(bot, message) {
        console.log('message: ', message);

      
      
       
        
        //JagoCalls.POSTuser(user, user, 3513, 1531144800000, 1531159200000, function(err, data, text) {
        JagoCalls.GETsmartLocks(function(err, data, text) {
            if (err) {
                bot.reply(message, "Jago system not reached! err: ", err);
                return;
            }

            if (data.length == 0) {
                bot.reply(message, "Request failed!");
                return;
            }

            publicLink = data.publicLink;
            console.log("publcLink: ", publicLink);
        

            bot.reply(message, "click on " + publicLink + "  from your Otello App to access the room");




        });

    });
}