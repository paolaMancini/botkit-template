module.exports = function(controller) {

    controller.hears([/^a-hello$/], 'direct_message,direct_mention', function(bot, message) {

        var welcome = `Hi <@personId:${event.actorId}>`;
        
        bot.say ({
            text: welcome,
            channel: event.channel
        }, function (err, rawMessage) {
            if (err) {
                console.log("Error while postig back welcome message, err: " + err.message)
                return;
            }

        bot.startConversation(message, function(err, convo) {

            convo.ask('How can I help you?', function(response, convo) {
                convo.next();
            });
        });

    });
};
