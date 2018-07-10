var JagoCalls = require("./JagoAPIsCalls");

module.exports = function(controller) {

    controller.hears(['access|open|token'], 'direct_message,direct_mention', function(bot, message) {
        console.log('message: ', message);
        
        console.log('message: ', message);
        var roomName = message.match[1];

        console.log("roomName  received: ", roomName );

        var request = require("request");
        
        // Create random number for dummy user
        var random_index = Math.floor(Math.random() * (1000 - 1) + 1);
        var user = "u" + random_index;
        
        //Manage time range for access duration
        var today = new Date();
        console.log(today);
        var tomorrow = new Date();
        tomorrow.setDate(today.getDate()+1);
        console.log(tomorrow);
          
        JagoCalls.GETIdSmartLockByName(roomName, function(err, data, text)){
             var id=null;  
                                     
        }
        
        JagoCalls.POSTuser(user, user, 3513, today.getTime(), tomorrow.getTime(), function(err, data, text) {
            if (err) {
                bot.reply(message, "Jago system not reached! err: ", err);
                return;
            }

            if (data.length == 0) {
                bot.reply(message, "Request failed!");
                return;
            }

            publicLink = data.publicLink;
            console.log("publcLink: ", publicLink);
        

            bot.reply(message, "click on " + publicLink + "  from your Otello App to access the room");




        });

    });
}
