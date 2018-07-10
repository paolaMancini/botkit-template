 
module.exports.POSTuser = function(username, fname, uTagId, fromTime, toTime, cb) {
    var request = require("request");
    console.log('POSTuser: ', username, ' uTagId: ', uTagId, ' fromTime: ', fromTime, ' toTime: ', toTime);

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
            "firstname": fname,
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

    request(options, function(error, response, events) {
        if (error) {
            debug("1 could not retreive list of events, error: " + error);
            cb(new Error("Could not retreive current events, sorry [Backend Events API not responding]"), null, null);
            return;
        }

        if ((response < 200) || (response > 299)) {
            debug("1 could not retreive list of events, response: " + response);

            return;
        }


        console.log('events: ', events);
        console.log('###################');
    

        var numRec = events.tags.length;

        if (numRec == 0) {
            msg = "No data found";
        }


        var publicLink = null;
        for (var i = 0; i < numRec; i++) {
            var current = events.tags[i];
            publicLink = events.publicLink;
            console.log('events.tags[i].id: ', events.tags[i].id);
            console.log('events.tags[i].state: ', events.tags[i].state);
            if (events.tags[i].id == uTagId && (events.tags[i].state == "VALID")) {
                var publicLink = events.publicLink;

                console.log('@@@@@@@@@@@@@@@ publicLink=publicLink');
            }

        }


        cb(null, events, publicLink);
    })

};

module.exports.GETsmartLocks = function(cb) {
    var request = require("request");
    console.log('GETsmartLocks ..');


    var options = {
        method: 'GET',
        url: "https://api-cisco-otello-mi.jago.cloud/api/v1.1/smartLocks/",
        headers: {
            "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiUk9MRV9NQU5BR0VSIiwidXNlcl9uYW1lIjoibWFuYWdlckBjaXNjby5jb20iLCJzY29wZSI6WyJvdGVsbG9fcmVhZCIsIm90ZWxsb193cml0ZSJdLCJ1c2VySWQiOjM2MjQsImF1dGhvcml0aWVzIjpbIlJPTEVfTUFOQUdFUiJdLCJqdGkiOiI1NTUxYzQ0Zi0yYmRmLTQyZGYtOTM4Zi01MmVjMTlhZDgyNTciLCJjbGllbnRfaWQiOiJhcHAifQ.P_hbCZrvmbGc9MKpOKU_XTbiaPrRIJ01R9ZwEcJrRQY",
            "accept": "application/json"
        }
    };

    request(options, function(error, response, info) {
        if (error) {
            debug("1 could not retreive list of events, error: " + error);
            cb(new Error("Could not retreive current events, sorry [Backend Events API not responding]"), null, null);
            return;
        }

        if ((response < 200) || (response > 299)) {
            debug("1 could not retreive list of events, response: " + response);

            return;
        }


       
       JSON.stringify(info);
       console.log("^^^^^^^ Check: ",checkJSON(info)); 
       
      console.log('###################');
      console.log('info: ', info);
        
      console.log('###################'); console.log('info.data[0]: ', info.data[0]);
     
          
        var msg = "No room found";
        for (var i = 0; i < info.data.lenght; i++) {
            msg = "Rooms available:<br>";
            var current = info.data[i];
            console.log('info.data[i].name: ', info.data[i].name);
            console.log('info.data[i].model: ', info.data[i].model);
            msg += "**Room name: " + info.data[i].name + "**. Lock model: " + info.data[i].model;
        }

        cb(null, info, msg);
    })

};
var checkJSON = function(m) {

   if (typeof m == 'object') { 
      try{ m = JSON.stringify(m); }
      catch(err) { return false; } }

   if (typeof m == 'string') {
      try{ m = JSON.parse(m); }
      catch (err) { return false; } }

   if (typeof m != 'object') { return false; }
   return true;

};
