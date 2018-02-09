module.exports = function(controller) {

    controller.hears([/^hello$/], 'direct_message,direct_mention', function(bot, message) {

        var welcome = `Hi <@personId:${event.actorId}>!`;

        bot.startConversation(message, function(err, convo) {

            convo.ask('How can help you?', function(response, convo) {
                convo.next();
            });
        });

    });
};
