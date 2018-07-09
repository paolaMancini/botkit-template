var JagoCalls = require("./JagoAPIsCalls");

module.exports = function(controller) {

    controller.hears(['access|open|token'], 'direct_message,direct_mention', function(bot, message) {
        console.log('message: ', message);

        var request = require("request");
        var random_index = Math.floor(Math.random() * (1000 - 1) + 1);
        var user = "u" + random_index;

      
        var today = new Date();
        console.log(today);
        var tomorrow = new Date();
        tomorrow.setDate(today.getDate()+1);
        console.log(tomorrow);
        
        //JagoCalls.POSTuser(user, user, 3513, 1531144800000, 1531159200000, function(err, data, text) {
        JagoCalls.POSTuser(user, user, 3513, today.getTime(), tomorrow.getTime(), function(err, data, text) {
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
