 //
// Command: hello
//

module.exports = function (controller) {

    controller.hears([/^hello$/], 'direct_message,direct_mention', function (bot, message) {
        var mardown = "Hi!\n"
            + bot.appendMention(message, "help");
            
        bot.reply(message, mardown);
    });
 
 
 
 
© 2018 GitHub, Inc.
