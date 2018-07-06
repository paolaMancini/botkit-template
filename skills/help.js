//
// Command: help
//
module.exports = function (controller) {

    controller.hears([/^help$/], 'direct_message,direct_mention', function (bot, message) {
        var text = "Here are my skills:";
        text += "\n- " + bot.appendMention(message, "open <room>") + ": let a user to receive the url to click opening the room ";
        text += "\n- " + bot.appendMention(message, "rooms") + ": let a user pick a color among a set of options";
        text += "\n- " + bot.appendMention(message, "room detail") + ": store picked color as a user preference";
        bot.reply(message, text);
    });
}
