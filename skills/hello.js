 //
// Command: hello
//
 
 module.exports = function(controller) {


  controller.hears('hello','message_received', function(bot, message) {

    bot.reply(message,'Hi');

  });
 
 
© 2018 GitHub, Inc.
