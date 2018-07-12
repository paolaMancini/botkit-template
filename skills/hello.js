 
 
module.exports = function(controller) {
     

    controller.hears([/hello/i] , 'direct_message,direct_mention', function(bot, message) {
     if (controller.config.limit_to_domain) {
         var domains = [];
         if (typeof(controller.config.limit_to_domain) == 'string') {
             domains = [controller.config.limit_to_domain];
         } else {
             domains = controller.config.limit_to_domain;
         }
         var allowed = false;
         var userEmail = message.data.personEmail;
         for (var d = 0; d < domains.length; d++) {
             if (userEmail.includes(domains[d]) || userEmail.includes('@sparkbot.io')) {
                 allowed = true;
             }
         }
         if (!allowed) {
             console.log('*** WARNING *** : this message came from ' + userEmail + ' a domain that is outside of the allowed list', controller.config.limit_to_domain);
             // this message came from a domain that is outside of the allowed list.
             return false;
         }
     }
      console.log('message: ', message);
       console.log('message.data.personEmail: ', message.data.personEmail);   
       var message_options = [
            "Hello "+message.data.personEmail,
            "Hi "+message.data.personEmail,
            "So glad to meet you again "+message.data.personEmail
        ]
        var random_index = Math.floor(Math.random() * message_options.length)
        var chosen_message = message_options[random_index];
 
        bot.reply(message, chosen_message);
    });
}
