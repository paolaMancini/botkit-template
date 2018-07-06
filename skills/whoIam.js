module.exports = function(controller) {

    controller.hears(['who are you| about you'], 'direct_message,direct_mention', function(bot, message) {
        console.log('emails: '+this.emails);
        var mardown = "This is Clavigero, the Keys' Keeper. I can help you to get the link to click by your phone or your tablet in orden to open your JAGO door lock.";
         
        bot.reply(message, mardown);
    });
}
