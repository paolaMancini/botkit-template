var JagoCalls = require("./JagoAPIsCalls");

module.exports = function(controller) {

    //controller.hears(['open digitaliani|open Office 301'], 'direct_message,direct_mention', function(bot, message) {
    controller.hears([/open (.*)/i], 'direct_message,direct_mention', function(bot, message) {
            console.log('message: ', message);

            console.log(message.match[0]);
            console.log(message.match[1]);
            //var roomName = "digitaliani";
            var roomName = message.match[1];
            var italtelRoom = "Office 301";
            var ciscoRoom = "Digitaliani";

            if ((roomName.toLowerCase().trim() != (ciscoRoom.toLowerCase()).trim()) && (roomName.toLowerCase().trim() != (italtelRoom.toLowerCase()).trim())) {
                bot.reply(message, "Room " + roomName + " not available");
            } else {
                console.log("  received: ", roomName);

                var request = require("request");

                // Create random number for dummy user
                var random_index = Math.floor(Math.random() * (1000 - 1) + 1);
                var user = "u" + random_index;

                //Manage time range for access duration
                //var today = new Date() ;
                //console.log(today);
                //var tomorrow = new Date();
                //tomorrow.setDate(today.getDate() + 1);
                //console.log(tomorrow);
                var todayUTC = new Date();
                console.log('todayUTC: ', todayUTC);
                var utcOffset = todayUTC.getTimezoneOffset();
                var cestOffset = utcOffset + 120;

                console.log('cestOffset: ', cestOffset);

                var todayCESTtime = todayUTC.getTime() + (cestOffset * 60000);
                console.log('todayCESTtime: ', todayCESTtime)
                var todayCEST = new Date(todayCESTtime);
                console.log('todayCEST: ', todayCEST)
                var today = todayCEST.getDate() + "-" + (todayCEST.getMonth() + 1) + "-" + todayCEST.getFullYear() + " " +
                    todayCEST.getHours() + ":" + todayCEST.getMinutes();
                console.log('today: ', today);

                var tomorrowUTC = new Date();
                tomorrowUTC.setDate(todayUTC.getDate() + 1);
                var tomorrowCESTtime = tomorrowUTC.getTime() + (cestOffset * 60000);
                var tomorrowCEST = new Date(tomorrowCESTtime);
                var tomorrow = tomorrowCEST.getDate() + "-" + (tomorrowCEST.getMonth() + 1) + "-" + tomorrowCEST.getFullYear() + " " +
                    tomorrowCEST.getHours() + ":" + tomorrowCEST.getMinutes();
                console.log('tomorrow: ', tomorrow);

                var tomorrow = tomorrowCEST.getDate() + "-" + (tomorrowCEST.getMonth() + 1) + "-" + tomorrowCEST.getFullYear() + " " +
                    tomorrowCEST.getHours() + ":" + tomorrowCEST.getMinutes();
                console.log('tomorrow: ', tomorrow);

                JagoCalls.GETIdGuestTagByRoom(roomName.toLowerCase().trim(), function(err, data, text) {
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
                            JagoCalls.POSTuser(user, user, id, todayCESTtime, tomorrowCESTtime, function(err, data, text) {
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

                                    var msg = "Activate bluetooth and Click on " + publicLink + "  from your Otello App to access the room.";
                                    msg += "<br><br>**Remember**: Access Url is valid from: " + today + " to: " + tomorrow; 
                                    bot.reply(message, msg);

                            });
                    } else {
                        bot.reply(message, "Room not available");

                    }
                })
        }

    })
};
