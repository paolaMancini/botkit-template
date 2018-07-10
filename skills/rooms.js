
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
            console.log('text: ',text);
            if (data.length == 0) {
                bot.reply(message, "Request failed!");
                return;
            }
 

            bot.reply(message, text);
 
        });
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

       
            console.log("text: ", text);
        

            bot.reply(message, text  );




        });

    });
}
