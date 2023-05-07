var weather = require('weather-js'); 
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0
weather.find({search: 'Melbourne, AU', degreeType: 'C'}, function(err, result) {
if(err) console.log(err);

console.log(result[0].current.temperature)
});