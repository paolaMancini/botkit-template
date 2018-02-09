module.exports = function (controller) {

    controller.hears([/^hello$/], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {
            convo.say('This is a BotKit conversation sample.');

            convo.ask('====> What is your favorite color?', function (response, convo) {
                convo.say("Cool, I like '" + response.text + "' too!");
                convo.next();
            });
        });

    });
};

module.exports = function (controller) {

   controller.hears([/^hello$/], 'direct_message,direct_mention', function (bot, message) {

        var welcome = `Hi <@personId:${event.actorId}>, so glad meeting you!`;

        if (this.identity) {
            welcome += `<br/>I am the **${this.identity.displayName}** bot`;
        }

        bot.say ({
            text: welcome,
            channel: event.channel
        }, function (err, rawMessage) {
            if (err) {
                console.log("Error while postig back welcome message, err: " + err.message)
                return;
            }

            var help = "Type `help` to learn about my skills.";

            if (rawMessage.roomType == "group") {
                help = "Note that this is a 'Group' Space. I will answer only if mentionned.<br/>";
                help += "To learn about my skills, type " + bot.appendMention(rawMessage, "help");
            }

            bot.say({
                text: `_${help}_`,
                channel: rawMessage.roomId
            }, function (err, messageAck) {
                if (err) {
                    console.log("Error while postig back help message, err: " + err.message)
                    return;
                }
            });
        });
    });
}
