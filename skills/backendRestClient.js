var request = require('request');
 

var jsonAllData = allaMahcines = function(url) {
    request('http://194.79.57.109:8080/SFapi/machines', function(error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.

        var jsonData = JSON.parse(body);
        for (var i = 0; i < jsonData.length; i++) {
            var counter = jsonData.machines[i];
            console.log(counter.machine.oee);
        }

        return jsonData;
    });
}



module.exports.jsonAllData;
