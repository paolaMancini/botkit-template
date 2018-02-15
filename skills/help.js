//
// Command: help
//
module.exports = function (controller) {

    controller.hears([/^help$/], 'direct_message,direct_mention', function (bot, message) {
        var text = "Here are my skills:";
        text += "\n- " + bot.appendMention(message, "plant1 performance") + ": ask to pick a random color";
        text += "\n- " + bot.appendMention(message, "line quality") + ": let a user pick a color among a set of options";
        text += "\n- " + bot.appendMention(message, "line availability") + ": store picked color as a user preference";
        text += "\n- " + bot.appendMention(message, "line OEE") + ": branch to another thread";
        text += "\n- " + bot.appendMention(message, "line performance") + ": branch to another thread";
        text += "\n- " + bot.appendMention(message, "variables") + ": enriched user-context among threads";
        text += "\n\nI also understand:";
        text += "\n- " + bot.appendMention(message, "help") + ": spreads the word about my skills";
        bot.reply(message, text);
    });
}
