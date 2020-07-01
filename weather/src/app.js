const request = require('request');
const yargs = require('yargs');
const { command, describe } = require('yargs');

let city;

yargs.command({
    command: 'weather',
    describe: 'your city',
    builder: {
        city: {
            describe: 'city name',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        city = argv.city;
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=28fdfc113d6d42d5398b2c673f3b30e9`;
        request({ url: url, json:true }, (error, response) => {
            if(error){
                console.log('error');
                console.log(error);
            } else {
                let lat = response.body.coord.lat;
                let lon = response.body.coord.lon;
                console.log(`The weather in ${city} is ${response.body.main.temp}`);
                console.log(`Location: lon: ${lon} lat ${lat}`);
            }    
        });
    }
});

yargs.parse();