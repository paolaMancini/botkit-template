module.exports = function(controller) {

    controller.hears([/who are you|about you|who are u|about u/i], 'direct_message,direct_mention', function(bot, message) {
        console.log('emails: ',message.emails);
        var mardown = "This is Clavigero, the Keys' Keeper. I can help you to obtain the link to use by your phone (or your tablet) in order to open your JAGO door lock.";
         
        bot.reply(message, mardown);
    });
}
