const yargs = require('yargs');
const geocode = require('./geocode.js');
const forecast = require('./forecast.js');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address for the geolocation',
            string: true
        }
    })
    .help()
    .alias({'help': 'h'})
    .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage) {
        console.log(errorMessage);
    } else {        
        forecast.getForecast(results.latitude, results.longitude, (forecastError, forecastResult) => {            
            if(forecastError) {
                console.log(forecastError);
            } else {
                console.log(`Temperature in ${results.address} is ${forecastResult.currently.temperature}`);
            }
        }) 
    }
});