var dialogflowMiddleware = require('botkit-middleware-dialogflow')({
  token: process.env.dialogflow
});

controller.middleware.receive.use(dialogflowMiddleware.receive);

controller.hears('test', 'message_received', dialogflowMiddleware.hears, function(
    bot,
    message
) {
  console.log('MESSAGE:', message);
    bot.reply(message, 'Hello!');
});
