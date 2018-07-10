module.exports = function (controller) {

    controller.hears([/key/], "direct_message,direct_mention", function (bot, message) {

        bot.startConversation(message, function (err, convo) {

            convo.ask("please specify the room from the following list<br>**Digitaliani**<br>**Office 301*?", [
                {
                    pattern: "^Digitaliani|Office 301$",
                    callback: function (response, convo) {
                        convo.gotoThread("success");
                    },
                },
                {
                    default: true,
                    callback: function (response, convo) {
                        convo.say("Sorry, I don't know this room. Try another one...");
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
