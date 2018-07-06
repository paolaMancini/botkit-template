 
 
module.exports = function(controller) {

    controller.hears(['hello|hi'], 'direct_message,direct_mention', function(bot, message) {
      console.log('message: ', message);
       console.log('message.data.personEmail: ', message.data.personEmail);   
       var message_options = [
            "Hello!",
            "Hi",
            "So glad to meet you again" 
        ]
        var random_index = Math.floor(Math.random() * message_options.length)
        var chosen_message = message_options[random_index];
 
        bot.reply(message, chosen_message);
    });
}
