//
// Fallback Command
//
module.exports = function (controller) {

     
    
     controller.hears([".*"], 'direct_message,direct_mention', function (bot, message) {
      
        var message_options = [
            "Sorry, I did not understand.<br/>",
            "Sorry! It's not clear for me.",
            "What do you mean?",
            "I didn't get it. Please, try again ..."
        ];
        var random_index = Math.floor(Math.random() * message_options.length);
        var chosen_message = message_options[random_index];
 
        bot.reply(message, chosen_message);
    });
}
