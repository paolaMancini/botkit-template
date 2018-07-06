
module.exports = function(controller) {

    controller.hears(['access|open|token'], 'direct_message,direct_mention', function(bot, message) {
        console.log('message: ', message);
         
        bot.reply(message, "finalmente");
    });
}
