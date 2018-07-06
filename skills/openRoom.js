
module.exports = function(controller) {
    controller.hears([/'open|access'/i], ['direct_message', 'direct_mention', 'mention'], function(bot, message) {

        console.log('message: ', message);
        //username, fname, uTagId, fromTime, toTime

        var request = require("request");

        var options = {
            method: "POST",
            url: "https://api-cisco-otello-mi.jago.cloud/api/v1.1/users",
            headers: {
                 
               "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiUk9MRV9NQU5BR0VSIiwidXNlcl9uYW1lIjoibWFuYWdlckBjaXNjby5jb20iLCJzY29wZSI6WyJvdGVsbG9fcmVhZCIsIm90ZWxsb193cml0ZSJdLCJ1c2VySWQiOjM2MjQsImF1dGhvcml0aWVzIjpbIlJPTEVfTUFOQUdFUiJdLCJqdGkiOiI1NTUxYzQ0Zi0yYmRmLTQyZGYtOTM4Zi01MmVjMTlhZDgyNTciLCJjbGllbnRfaWQiOiJhcHAifQ.P_hbCZrvmbGc9MKpOKU_XTbiaPrRIJ01R9ZwEcJrRQY",
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: {
                "email": "string",
                "firstname": "italtel-user",
                "lastname": "italtel-user",
                "password": "ita123",
                "phone": "string",
                "publicUser": true,
                "role": "ROLE_GUEST",
                "userTagIds": [],
                "userTagIdsWithTime": [{
                    "id": 3513,
                    "interval": { "from": 1530796020000, "to": 1530835140000 }
                }],
                "username": "italtelUser1"
            },
            json: true
        };

        request(options, function(error, response, body) {
            if (error) throw new Error(error);

            console.log(body);
        });



        //jagoAPIs.POSTuser("u1", 'u1', '3513', null, null, function(err, publickLink, text) {
        //{
        //   if (err) {
        //       bot.reply(message, "Something went wrong during connection with JAGO system");
        //       return;
        //   }

        //  if (publickLink == null) {
        //       bot.reply(message, "Access not authorized");
        //       return;
        //   }

        //   console.log('publickLink: ', publickLink);
        //   text += "You are able to open the door by click on the following link from Otello App <br>";

        //  bot.reply(message, text);
        //}
        // });
        //}
    })
}
