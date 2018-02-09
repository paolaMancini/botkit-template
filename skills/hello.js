module.exports = function(controller) {

    controller.hears([/^hello$/], 'direct_message,direct_mention', function(bot, message) {

        var welcome = `Hi <@personId:${event.actorId}>`;
        
        bot.say ({
            text: welcome,
            channel: event.channel
        }, function (err, rawMessage) {
            if (err) {
                console.log("Error while postig back welcome message, err: " + err.message)
                return;
            }

        bot.startConversation(message, function(err, convo) {

            convo.ask('How can I help you?', function(response, convo) {
                convo.next();
            });
        });

    });
};

                     //
// Command: hello
//
module.exports = function (controller) {

    controller.hears([/^hello$/], 'direct_message,direct_mention', function (bot, message) {
        var text = "Here are my skills:";
        text += "\n- " + bot.appendMention(message, "color") + ": ask to pick a random color";
        text += "\n- " + bot.appendMention(message, "restricted") + ": let a user pick a color among a set of options";
        text += "\n- " + bot.appendMention(message, "storage") + ": store picked color as a user preference";
        text += "\n- " + bot.appendMention(message, "threads") + ": branch to another thread";
        text += "\n- " + bot.appendMention(message, "variables") + ": enriched user-context among threads";
        text += "\n\nI also understand:";
        text += "\n- " + bot.appendMention(message, "about") + ": shows metadata about myself";
        text += "\n- " + bot.appendMention(message, "help") + ": spreads the word about my skills";
        text += "\n- " + bot.appendMention(message, "show [skill]") + ": display the code of the specified skill";
        bot.reply(message, text);
    });
}
© 2018 GitHub, Inc.
