var JagoCalls = require("./JagoAPIsCalls");

module.exports = function(controller) {

    controller.hears(['access|open|token'], 'direct_message,direct_mention', function(bot, message) {
        console.log('message: ', message);

        var request = require("request");
        var random_index = Math.floor(Math.random() * (1000 - 1) + 1);
        var user = "u" + random_index;

        JagoCalls.POSTUser(user, user, 3513, 1531134000000, 1531141200000, function(err, data, text) {
            if (err) {
                bot.reply(message, "Jago system not reached! err: ", err);
                return;
            }

            if (data.length == 0) {
                bot.reply(message, "Request failed!");
                return;
            }

            publcLink = data.publicLink;
            console.log("publcLink: ", publcLink);
            console.log("publcLink: ", publcLink);

            bot.reply(message, "click on " + publicLink + "  from your Otello App to access the room");




        });

    });
}
