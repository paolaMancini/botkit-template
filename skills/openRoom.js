
 var jagoAPIs = require("./JagoPIsCalls");

 module.exports = function(controller) {
  
   controller.hears([/'open|access'/i], ['direct_message', 'direct_mention', 'mention'], function(bot, message) {
    jagoAPIs.POSTuser (username, fname, uTagId, fromTime, toTime, function(err, publickLink, text) {) {
        if (err) {
            bot.reply(message, "Something went wrong during connection with JAGO system");
            return;
        }

        if (publickLink == null) {
            bot.reply(message, "Access not authorized");
            return;
        }

        console.log('publickLink: ', publickLink);
        text += "You are able to open the door by click on the following link from Otello App <br>";

        bot.reply(message, text);
    }
  }
}
