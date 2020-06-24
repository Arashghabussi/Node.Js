// Email checking

const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const { describe } = require('yargs');

if(validator.isEmail('email@gmail.com')){
    //console.log('');
} else{
    //console.log('false');
}

yargs.version('1.3.3');
yargs.command({
    command: 'add',
    describe: 'describttion',
    handler: function (){
        console.log('function');
    }
})

const connected = chalk.red.bgBlack.italic.underline('connected');

//console.log(validator.isURL('google.com'));
//console.log(connected);

//console.log(process.argv);
console.log(yargs.argv[1]);

//if(yargs.argv[]){

//}