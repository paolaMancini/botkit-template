module.exports = function (controller) {

    controller.hears([/^choiceyesno$/], function (bot, message) {

        bot.startConversation(message, function (err, convo) {

            convo.ask("Do you want more details? (Please, choose yes|no)", [
                {
                    pattern: "^yes|ok$",
                    convo.gotoThread("yes");
                    },
                },
				        {
                    pattern: "^no$",
                    callback: function (response, convo) {
                         convo.transitionTo("no");
                    },
                },
                {
                    default: true,
                    callback: function (response, convo) {
                        convo.transitionTo("default", "Got it, let's try again...");
                    }
                }
            ], {}, "choice");

             

            // Yes thread
            convo.addMessage(
                "Line1:\nLine2\n",
                "yes");
				
				// no thread
            convo.addMessage(
                "Glad having been helped you",
                "no");
        });
    });
};
