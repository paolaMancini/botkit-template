//
// Command: help
//
module.exports = function (controller) {

    controller.hears([/^help$/], 'direct_message,direct_mention', function (bot, message) {
        var text = "Here are my skills:";
        text += "\n- " + bot.appendMention(message, "open <**Digitaliani** |**Office 301**>") + ": let a user to receive the url granting access to the smart lock;"
        text += "\n- " + bot.appendMention(message, "locks") + ": let a user to receive datails about smart locks";
         
        bot.reply(message, text);
    });
}
