
//nodejs v4.2.6

module.exports = function(controller) {

   controller.hears([/'open|access'/i], ['direct_message', 'direct_mention', 'mention'], function(bot, message) {

        console.log('message: ', message);
        //username, fname, uTagId, fromTime, toTime

        var request = require("request");

        var requestData = {
            email: "string",
            firstname: 'u1',
            lastname: "u1",
            password: "ita123",
            phone: "string",
            publicUser: true,
            role: "ROLE_GUEST",
            userTagIds: [],
            userTagIdsWithTime: [{
                id: 3513,
                interval: { from: 1530796020000, to: 1530835140000 }
            }],
            username: "u1"
        };

        request( {
            url: "https://api-cisco-otello-mi.jago.cloud/api/v1.1/users",
            json: true,
            headers: {
                "content-type": "application/json",
                "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiUk9MRV9NQU5BR0VSIiwidXNlcl9uYW1lIjoibWFuYWdlckBjaXNjby5jb20iLCJzY29wZSI6WyJvdGVsbG9fcmVhZCIsIm90ZWxsb193cml0ZSJdLCJ1c2VySWQiOjM2MjQsImF1dGhvcml0aWVzIjpbIlJPTEVfTUFOQUdFUiJdLCJqdGkiOiI1NTUxYzQ0Zi0yYmRmLTQyZGYtOTM4Zi01MmVjMTlhZDgyNTciLCJjbGllbnRfaWQiOiJhcHAifQ.P_hbCZrvmbGc9MKpOKU_XTbiaPrRIJ01R9ZwEcJrRQY",
            
                "accept": "application/json"
            },
      
            body: JSON.stringify(requestData)
        }, function(error, response, body) {
            console.log(response);
        });

 
    })
}
