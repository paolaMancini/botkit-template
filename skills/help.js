//
// Command: help
//
module.exports = function (controller) {

    controller.hears([/^help$/], 'direct_message,direct_mention', function (bot, message) {
        var text = "Here are my skills:";
        text += "\n- " + bot.appendMention(message, "plantPerformance") + ": ask about the plant performance";
        //text += "\n- " + bot.appendMention(message, "plantDetails") + ": ask more details about the plant performance ";
        //text += "\n- " + bot.appendMention(message, "linePerformance") + ": ask more details about the line performance";
        //text += "\n- " + bot.appendMention(message, "lineDetails") + ": ask more details about the line performance ";
        //text += "\n- " + bot.appendMention(message, "threads") + ": branch to another thread";
        //text += "\n- " + bot.appendMention(message, "variables") + ": enriched user-context among threads";
        //text += "\n\nI also understand:";
        //text += "\n- " + bot.appendMention(message, "about") + ": shows metadata about myself";
        //text += "\n- " + bot.appendMention(message, "help") + ": spreads the word about my skills";
        //text += "\n- " + bot.appendMention(message, "show [skill]") + ": display the code of the specified skill";
        bot.reply(message, text);
    });
}
