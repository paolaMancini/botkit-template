 
module.exports = function(controller) {

    controller.hears(['hello| hi|good morning'], 'direct_message,direct_mention', function(bot, message) {
        var mardown = "This is Clavigero, the Keys' Keeper. I can help you to get the link to click by your phone or your tablet in orden to open your JAGO door lock.";
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
