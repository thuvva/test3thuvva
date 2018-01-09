let AWS = require('aws-sdk');
exports.handler = function(event, context, callback){
    callback(null, `Hello, ${event.name}`);
}