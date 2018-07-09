 
var debug = require("debug")("samples");
var fine = require("debug")("samples:fine");

module.exports.POSTuser = function(username, fname, uTagId, fromTime, toTime, cb) {
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
                "email": username,
                "firstname": "buddy",
                "lastname": "buddy",
                "password": "ita123",
                "phone": "string",
                "publicUser": true,
                "role": "ROLE_GUEST",
                "userTagIds": [],
                "userTagIdsWithTime": [{
                    "id": uTagId,
                    "interval": { "from": fromTime, "to": toTime }
                }],
                "username": username
            },
            json: true
        };

        request(options, function(error, response, body) {
            if (error) {
            debug("1 could not retreive list of events, error: " + error);
            cb(new Error("Could not retreive current events, sorry [Backend Events API not responding]"), null, null);
            return;
            }

            if ((response < 200) || (response > 299)) {
                debug("1 could not retreive list of events, response: " + response);

                return;
            }

            console.log('body: ',body);
            console.log('###################');
             
            var publicLink=body.publicLink;
            cb(null, body, publicLink);
    })
     
};
