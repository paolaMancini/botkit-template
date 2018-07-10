//
// Command: help
//
module.exports = function (controller) {

    controller.hears([/^help$/], 'direct_message,direct_mention', function (bot, message) {
        var text = "Here are my skills:";
        text += "\n- " + bot.appendMention(message, "open <Digitaliani|Office 301>") + ": let a user to receive the url to click opening the room ";
        text += "\n- " + bot.appendMention(message, "locks") + ": let a user to receive datails about lcoks";
         
        bot.reply(message, text);
    });
}
