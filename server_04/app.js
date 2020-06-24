const chalk = require('chalk');
const input = process.argv[2];

console.log(chalk.yellow.underline('connected'));

if (input == 'add') {
    console.log('adding!');
} else if (input == 'remove') {
    console.log('removing');
} else if(input == 'edit'){
    console.log('editing');
}

console.log(process.argv);