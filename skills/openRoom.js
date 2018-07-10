var JagoCalls = require("./JagoAPIsCalls");

module.exports = function(controller) {

    //controller.hears(['open digitaliani|open Office 301'], 'direct_message,direct_mention', function(bot, message) {
    controller.hears([/open (.*)/i], 'direct_message,direct_mention', function(bot, message) {
            console.log('message: ', message);

            console.log(message.match[0]);
            console.log(message.match[1]);
            //var roomName = "digitaliani";
            var roomName = message.match[1];
            console.log("roomName.toLowerCase(): ",roomName.toLowerCase());
            console.log("Office 301".toLowerCase(): ",Office 301".toLowerCase());
        
            if ((roomName != "digitaliani") && (roomName.toLowerCase() != "Office 301".toLowerCase())) {
                bot.reply(message, "Room " + roomName + "not available");
            } else {
                console.log("  received: ", roomName);

                var request = require("request");

                // Create random number for dummy user
                var random_index = Math.floor(Math.random() * (1000 - 1) + 1);
                var user = "u" + random_index;

                //Manage time range for access duration
                var today = new Date();
                console.log(today);
                var tomorrow = new Date();
                tomorrow.setDate(today.getDate() + 1);
                console.log(tomorrow);

                JagoCalls.GETIdGuestTagByRoom(roomName.toLowerCase(), function(err, data, text) {
                        var id = null;
                        if (err) {
                            bot.reply(message, "Jago system not reached! err: ", err);
                            return;
                        }

                        if (data.length == 0) {
                            bot.reply(message, "Request failed!");
                            return;
                        }

                        var id = text;
                        if (id != null) {
                            console.log("id: ", id);

                            // Office 301 Italtel => 3513 
                            // Digitaliani Cisco => 3471
                            //JagoCalls.POSTuser(user, user, 3513, today.getTime(), tomorrow.getTime(), function(err, data, text) {
                            JagoCalls.POSTuser(user, user, id, today.getTime(), tomorrow.getTime(), function(err, data, text) {
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


                                bot.reply(message, "click on " + publicLink + "  from your Otello App to access the room<br>Access open from: " + today + " to: " + tomorrow);




                            });
                        } else {
                            bot.reply(message, "Room not available");

                        }
                })}

                })
            };
