module.exports = function (controller) {

    controller.hears(['plant performance'], 'direct_message,direct_mention', function (bot, message) {
      
        bot.startConversation(message, function (err, convo) {
            convo.addMessage("The performances of the plant1 are: fakeMachine0 : 43.73%\n fakeMachine1: 31.56% \n fakeMachine2: 40.31%\n fakeMachine3: 43.65%\n fakeMachine4: 47.02%\ fakeMachine5: 38.52%");
            convo.addQuestion('Do you want more details?', function (response, convo) {
                convo.say('I love ' + response.text + ' too');
                convo.next();
            }, {}, 'linedetails');

            convo.ask("Which line do you want to watch over (no-line if you don't need details)", [
                {
                    pattern: "fakeMachine0,fakeMachine1,fakeMachine2,fakeMachine3,fakeMachine4,fakeMachine5,fakeMachine6",
                    callback: function (response, convo) {
                        convo.say("You answred: '{{responses.linedetails}}'!");
                        convo.next();
                    },
                }
                , {
                    pattern: "no|neh|non|na|birk",
                    callback: function (response, convo) {
                        convo.gotoThread('linedetails');
                    },
                }
                , {
                    pattern: "cancel|stop|exit",
                    callback: function (response, convo) {
                        convo.say("Got it, cancelling...");
                        convo.next();
                    },
                }
                , {
                    default: true,
                    callback: function (response, convo) {
                        convo.say("Sorry, I did not understand.");
                        convo.repeat();
                        convo.next();
                    }
                }
            ]);
        });
    });
};
