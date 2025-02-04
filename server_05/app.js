const yargs = require('yargs');
const chalk = require('chalk');
const { string } = require('yargs');

yargs.version('1.1.0');

// To Do List

// Adding:
yargs.command({
    command: 'add',
    describe: 'add a new task',
    builder: {
        title: {
            describe: 'include a title for the task',
            demandOption: true,
            type: 'string'
        },
        task: {
            describe: 'define your task',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log(`task added!`);
        console.log(`title is '${argv.title}' and the task is '${argv.task}'`);
    }
});

yargs.command({
    command: 'remove',
    describe: 'remove an existing task',
    handler: function () {
        console.log('task removed');
    }
});

yargs.command({
    command: 'read',
    describe: 'read an task',
    handler: function () {
        console.log('task read');
    }
});

yargs.command({
    command: 'edit',
    describe: 'edit an existing task',
    handler: function () {
        console.log('task edited');
    }
});

yargs.command({
    command: 'list',
    describe: 'list of tasks',
    handler: function () {
        console.log('tasks');
    }
});

yargs.command({
    command: 'history',
    describe: 'history of tasks',
    handler: function () {
        console.log('history of tasks');
    }
});

yargs.parse();