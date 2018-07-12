 
module.exports = function(controller) {

    controller.hears([/how are you| feeling|how are u/i], 'direct_message,direct_mention', function(bot, message) {
      
        var message_options = [
            "Fine thanks!",
            "Very well, thank you.",
            "Not so bad, thanks for asking.",
            "Very good, thank you."
        ];
        var random_index = Math.floor(Math.random() * message_options.length);
        var chosen_message = message_options[random_index];
 
        bot.reply(message, chosen_message);
    });
}
