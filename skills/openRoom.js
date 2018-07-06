
module.exports = function(controller) {
    
    controller.hears([/'door'/i], ['direct_message', 'direct_mention', 'mention'], function(bot, message) {

        console.log('message: ', message);
        //username, fname, uTagId, fromTime, toTime

        
    })
}
