var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Current timestamp',now.unix());

var timestamp = 1480182812;

var currentMoment = moment.unix(timestamp);

console.log('current mometn', currentMoment.format());
