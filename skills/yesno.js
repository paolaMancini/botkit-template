module.exports = function (controller) {

    controller.hears([/^yes|no$/], "direct_message,direct_mention", function (bot, message) {

        bot.startConversation(message, function (err, convo) {

            convo.ask("Do you want more details? (Please, choose yes|no)?", [
                {
                    pattern: "^yes|no$",
                    callback: function (response, convo) {
                        convo.gotoThread("success");
                    },
                },
                {
                    default: true,
                    callback: function (response, convo) {
                        convo.say("Sorry, I don't know this color. Try another one...");
                        convo.repeat();
                        convo.next();
                    }
                }
            ], { key: "answer" });

            // Success thread
            convo.addMessage(
                "Cool, I love '{{responses.answer}}' too",
                "success");
        });
    });
};
