module.exports = function(controller) {

    controller.hears([/^season$/], 'direct_message,direct_mention', function(bot, message) {

        bot.startConversation(message, function(err, convo) {
            convo.say('This is a BotKit conversation sample.');

            convo.ask('What is your favorite season?', function(response, convo) {
                convo.say("Cool, I like '" + response.text + "' too!");
                convo.next();
            });
        });

    });
};
