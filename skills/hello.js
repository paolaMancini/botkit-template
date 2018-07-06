module.exports = function(controller) {

    controller.hears([/'hello'|'hi'/i], ['direct_message', 'direct_mention', 'mention'], function(bot, message) {
    
    var welcome = `Hi <@personId:${message.actorId}>, so glad meeting you!`;
        var message_options = [
            "Hello "+<@personId:${message.actorId}>,
            "Hi "+<@personId:${message.actorId}>,
            "Nice to hear you again "+<@personId:${message.actorId}>,
            "Hi "+<@personId:${message.actorId}>+", so glad meeting you!"
        ]
        
        var random_index = Math.floor(Math.random() * message_options.length)
        var chosen_message = message_options[random_index];
       
        bot.reply(message, chosen_message);
     });
}
