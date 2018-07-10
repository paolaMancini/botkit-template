
 
var debug = require("debug")("samples");
var fine = require("debug")("samples:fine"); 

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

 

module.exports.GETsmartLocks = function( cb) {
    var request = require("request");
    // Get list of upcoming events
  
    var options = {
        method: 'GET',
        url: "https://api-cisco-otello-mi.jago.cloud/api/v1.1/smartLocks/",
        headers: {
            "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiUk9MRV9NQU5BR0VSIiwidXNlcl9uYW1lIjoibWFuYWdlckBjaXNjby5jb20iLCJzY29wZSI6WyJvdGVsbG9fcmVhZCIsIm90ZWxsb193cml0ZSJdLCJ1c2VySWQiOjM2MjQsImF1dGhvcml0aWVzIjpbIlJPTEVfTUFOQUdFUiJdLCJqdGkiOiI1NTUxYzQ0Zi0yYmRmLTQyZGYtOTM4Zi01MmVjMTlhZDgyNTciLCJjbGllbnRfaWQiOiJhcHAifQ.P_hbCZrvmbGc9MKpOKU_XTbiaPrRIJ01R9ZwEcJrRQY",
            "accept": "application/json"
        }
    };

    request(options, function(error, response, body) {
        if (error) {
            console.log("1 could not retreive list of events, error: " + error);
            //cb(new Error("Could not retreive current events, sorry [Events API not responding]"), null, null);
            return;
        }

        if ((response < 200) || (response > 299)) {
            console.log("1 could not retreive list of events, response: " + response);
            //sparkCallback(new Error("Could not retreive current events, sorry [bad anwser from Events API]"), null, null);
            return;
        }
     
     
        
 
      var events = JSON.parse(body);
      checkJSON(events);
       if (events.data.length == 0) {
             cb(null, events, "**Found no event currently going on.**");
             return;
        }
        console.log("fetched " + events.data.length + " events");
        checkJSON(events);
 
       // console.log("events: ",events);
        var nb = events.data.length;
         
        var msg="<br>";
        if (nb == 1) {
            msg = "No values found";
        }
     
        msg = "Rooms available:";
        for (var i = 0; i < nb; i++) {         
            var current = events.data[i];
            console.log('current.name: ', current.name);
            console.log('current.model: ', current.model);
            msg += "<br>ROOM Name: **" + current.name + "** - LOCK model: **" + current.model+ "** - Vendor: **" + current.vendor+ "** - Serial Number: **" + current.serialNumber+"**<br>";
        }
        console.log('msg: ',msg);
        cb(null, events, msg);
    });
}



module.exports.GETidSmartLocksByName = function( name,cb) {
    var request = require("request");
    // Get list of upcoming events
  
    var options = {
        method: 'GET',
        url: "https://api-cisco-otello-mi.jago.cloud/api/v1.1/smartLocks/",
        headers: {
            "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiUk9MRV9NQU5BR0VSIiwidXNlcl9uYW1lIjoibWFuYWdlckBjaXNjby5jb20iLCJzY29wZSI6WyJvdGVsbG9fcmVhZCIsIm90ZWxsb193cml0ZSJdLCJ1c2VySWQiOjM2MjQsImF1dGhvcml0aWVzIjpbIlJPTEVfTUFOQUdFUiJdLCJqdGkiOiI1NTUxYzQ0Zi0yYmRmLTQyZGYtOTM4Zi01MmVjMTlhZDgyNTciLCJjbGllbnRfaWQiOiJhcHAifQ.P_hbCZrvmbGc9MKpOKU_XTbiaPrRIJ01R9ZwEcJrRQY",
            "accept": "application/json"
        }
    };

    request(options, function(error, response, body) {
        if (error) {
            console.log("1 could not retreive list of events, error: " + error);
            //cb(new Error("Could not retreive current events, sorry [Events API not responding]"), null, null);
            return;
        }

        if ((response < 200) || (response > 299)) {
            console.log("1 could not retreive list of events, response: " + response);
            //sparkCallback(new Error("Could not retreive current events, sorry [bad anwser from Events API]"), null, null);
            return;
        }
     
     
        
 
      var events = JSON.parse(body);
      checkJSON(events);
       if (events.data.length == 0) {
             cb(null, events, "**Found no event currently going on.**");
             return;
        }
        console.log("fetched " + events.data.length + " events");
        checkJSON(events);
 
       // console.log("events: ",events);
        var nb = events.data.length;
         
        var msg=null;
        if (nb == 1) {
            msg = "No values found";
        }
     
        msg = "Rooms available:";
        for (var i = 0; i < nb; i++) {         
            var current = events.data[i];
            if (current.name == name){
                msg=current.id;
            }
            
        }
        console.log('msg: ',msg);
        cb(null, events, msg);
    });
}

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
