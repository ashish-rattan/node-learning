const request = require('request');

var getForecast = (lat, lng, callback) => {
    var url = `https://api.forecast.io/forecast/2517dd74e87300e717e9ff288d236684/${lat},${lng}`;
    //console.log(url);
    
    request({
        url,
        json: true
    },(error, response, body) => {
        if(error) {
            callback("Unable to get forecast from server");
        } else if(response.statusCode == 400) {
            callback("Unable to get details from forecast io");
        } else if(!error && response.statusCode == 200) {
            callback(undefined, body);
        } else {
            callback("Unable to fetch forecast");
        }
    })
};

module.exports.getForecast = getForecast;