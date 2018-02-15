//
// Command: help
//
module.exports = function (controller) {

    controller.hears([/^help$/], 'direct_message,direct_mention', function (bot, message) {
        var text = "Here are my skills:";
        text += "\n- " + bot.appendMention(message, "plant OEEs") + ": Ask to know the OEE value about every line in the plant ";
        text += "\n- " + bot.appendMention(message, "plant qualities") + ": Ask to know the OEE value about every line in the plant ";
        text += "\n- " + bot.appendMention(message, "plant performances") + ": Ask to know the OEE value about every line in the plant ";
        text += "\n- " + bot.appendMention(message, "line quality") + ": ask to know the quality value about a specific line";
        text += "\n- " + bot.appendMention(message, "line availability") + ": ask to know the availability value about a specific line";
        text += "\n- " + bot.appendMention(message, "line OEE") + ":  ask to know the OEE value about a specific line";
        text += "\n- " + bot.appendMention(message, "line performance") + ": ask to know the performance value about a specific line";
        text += "\n- " + bot.appendMention(message, "about") + ": ask to know who I am";
    
        text += "\n- " + bot.appendMention(message, "help") + ": spreads the word about my skills";
        bot.reply(message, text);
    });
}
