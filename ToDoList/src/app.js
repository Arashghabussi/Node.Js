const yargs = require('yargs');
const taskModule = require('./modules.js');
const { argv, title } = require('process');
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
        taskModule.addTask(argv.title, argv.task);
    }
});

// Marking Done:

yargs.command({
    command: 'done',
    describe: 'done an existing task',
    builder: {
        title: {
            describe: 'mark a task done',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        taskModule.doneTask(argv.title);
    }
});


yargs.command({
    command: 'list',
    describe: 'list of tasks',
    handler: function () {
        taskModule.listTask();
    }
});

yargs.command({
    command: 'read',
    describe: 'read an task',
    builder: {
        title: {
            describe: 'mark a task done',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        taskModule.readTask(argv.title);
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
    command: 'history',
    describe: 'history of tasks',
    handler: function () {
        console.log('history of tasks');
    }
});

yargs.parse();