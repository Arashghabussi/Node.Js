// Email checking & Chalk

const validator = require('validator');
const chalk = require('chalk');

if(validator.isEmail('email@gmail.com')){
    console.log('Email True');
} else{
    console.log('Email False');
}

const connected = chalk.red.bgBlack.italic.underline('connected');