module.exports = function(controller) {

    controller.hears(['thank you|thanks'], 'direct_message,direct_mention', function(bot, message) {
         
        var message_options = [
            "Not at all!",
            "You are very welcome.",
            "It's a pleasure"
        ]
        var random_index = Math.floor(Math.random() * message_options.length)
        var chosen_message = message_options[random_index];
 
        bot.reply(message, chosen_message);
    });
}
