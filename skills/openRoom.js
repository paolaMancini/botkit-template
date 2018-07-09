var JagoCalls = require ("./JagoAPIsCalls");

module.exports = function(controller) {

    controller.hears(['access|open|token'], 'direct_message,direct_mention', function(bot, message) {
        console.log('message: ', message);
         
        var request = require("request");
        var random_index = Math.floor(Math.random() * (1000 - 1) + 1);
        var user="u"+random_index;
//1531134000000 1531141200000
        var options = {
            method: "POST",
            url: "https://api-cisco-otello-mi.jago.cloud/api/v1.1/users",
            headers: {
                 
               "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiUk9MRV9NQU5BR0VSIiwidXNlcl9uYW1lIjoibWFuYWdlckBjaXNjby5jb20iLCJzY29wZSI6WyJvdGVsbG9fcmVhZCIsIm90ZWxsb193cml0ZSJdLCJ1c2VySWQiOjM2MjQsImF1dGhvcml0aWVzIjpbIlJPTEVfTUFOQUdFUiJdLCJqdGkiOiI1NTUxYzQ0Zi0yYmRmLTQyZGYtOTM4Zi01MmVjMTlhZDgyNTciLCJjbGllbnRfaWQiOiJhcHAifQ.P_hbCZrvmbGc9MKpOKU_XTbiaPrRIJ01R9ZwEcJrRQY",
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: {
                "email": user,
                "firstname": user,
                "lastname": user,
                "password": "ita123",
                "phone": "string",
                "publicUser": true,
                "role": "ROLE_GUEST",
                "userTagIds": [],
                "userTagIdsWithTime": [{
                    "id": 3513,
                    "interval": { "from": 1530889200000, "to": 1530903600000 }
                }],
                "username": user
            },
            json: true
        };

        request(options, function(error, response, body) {
            if (error) throw new Error(error);

            console.log('body: ',body);
            console.log('###################');
             
            var publicLink=body.publicLink;
            bot.reply(message, "click on "+publicLink+"  from your Otello App to access the room");
        });
        
       
    });
}
