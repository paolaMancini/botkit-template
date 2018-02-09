 //
// Command: hello
//
module.exports = function (controller) {

    controller.hears([/^hello$/], 'direct_message,direct_mention', function (bot, message) {
        var text =  `Hi <@personId:${event.actorId}>`;
        text += "\nHow can I help  you";
        bot.reply(message, text);
    });
}
© 2018 GitHub, Inc.
