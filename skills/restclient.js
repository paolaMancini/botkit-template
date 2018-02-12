var Client = require('node-rest-client').Client;
var client = new Client();
module.exports = {
// All line about plant1 
  getMachinesStatus: function() {
    var messageData =  "";
    client.get("'http://194.79.57.109:8080/SFapi/machines", function (data, response) {
      console.log(JSON.parse(data));
      messageData=data;
    });
    //We waiting for data.
    while (messageData === "") {
      require('deasync').sleep(10);
    }
    return messageData;
  }
}
