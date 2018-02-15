
 //
// cheese: demonstrates simple use of Botkit's thread conversation system.
//
// In this example, Botkit hears a keyword, then asks a question. Different paths
// through the conversation are chosen based on the user's response.
//
module.exports = function (controller) {

   // controller.hears(['cheese'], 'direct_message,direct_mention', function (bot, message) {
   controller.hears([/OEE\b/], 'direct_message,direct_mention', function (bot, message) {
 
        bot.startConversation(message, function (err, convo) {

            // create a path for when a user says YES
            convo.addMessage({
                text: 'How wonderful.',
            }, 'yes_thread');

            // create a path for when a user says NO
            // mark the conversation as unsuccessful at the end
            convo.addMessage({
                text: 'Glad having being helped you',
                action: 'stop', // this marks the converation as unsuccessful
            }, 'no_thread');

            // create a path where neither option was matched
            // this message has an action field, which directs botkit to go back to the `default` thread after sending this message.
            convo.addMessage({
                text: 'Sorry I did not understand. Plese choose the line: fakeMachine0,fakeMachine1,fakeMachine2,fakeMachine3,fakeMachine4,fakeMachine5,fakeMachine6',
                action: 'default',
            }, 'bad_response');

            // Create a yes/no question in the default thread...
            convo.ask('Which line are you interested of?', [
                {
                    pattern:'fakeMachine0,fakeMachine1,fakeMachine2,fakeMachine3,fakeMachine4,fakeMachine5,fakeMachine6',
                    callback: function (response, convo) {
                        convo.gotoThread('yes_thread');
                    },
                }
                , {
                    pattern: 'no-line',
                    callback: function (response, convo) {
                        convo.gotoThread('no_thread');
                    },
                }
                , {
                    default: true,
                    callback: function (response, convo) {
                        convo.gotoThread('bad_response');
                    },
                }
            ]);

            // capture the results of the conversation and see what happened...
            convo.on('end', function (convo) {

                if (convo.successful()) {
                    // this still works to send individual replies...
                    bot.reply(message, 'Let us eat some!');

                    // and now deliver cheese via tcp/ip...
                }
            });
        });
    });
};
