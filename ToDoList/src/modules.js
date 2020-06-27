const yargs = require('yargs');
const chalk = require('chalk');
const fs = require('fs');

let taskJSON = "sdfsfsfsd";

const addTask = function (title, task) {
    const tasks = loadTasks();

    const doublication = tasks.filter(function (task) {
        return task.title === title;
    });

    console.log(doublication.length);

    if (doublication == 0) {
        tasks.push({
            title: title,
            body: task
        });
        console.log(tasks);
        console.log(chalk.green(`task added!`));
        saveNotes(tasks);
    } else {
        console.log(chalk.red(`already exists!`));
    }
}

const saveNotes = function (tasks) {
    taskJSON = JSON.stringify(tasks);
    fs.writeFileSync('tasks.json', taskJSON);
}

const loadTasks = function () {
    try {
        const buffer = fs.readFileSync('./tasks.json');
        const stringBuffer = buffer.toString();
        const bufferParsed = JSON.parse(stringBuffer);

        return bufferParsed;
    } catch (e) {
        return [];
    }
}

const readTasks = function () {
    const buffer = fs.readFileSync('./tasks.json');
    const stringBuffer = buffer.toString();
    //const bufferParsed = JSON.parse(stringBuffer);
    return stringBuffer;
}

const doneTask = function (title) {
    // History of tasks
    let tasks = readTasks();
    fs.writeFileSync('history.json', 'Tasks History');
    fs.appendFile('./history.json', tasks, function (err) {
        if (err) { throw err };
    });
    // Deleting 
    // splic(x, 1)

    const parsedTasks = JSON.parse(tasks);
    //console.log(parsedTasks);

    for (let i = 0; i < (parsedTasks.length); i++) {
        console.log(tasks.title);
        if (parsedTasks[i].title === title) {
            console.log('removed');
            parsedTasks.splice(i, 1);
            const newTasks = JSON.stringify(parsedTasks);
            fs.writeFileSync('history.json', newTasks);
        }
    }
    //console.log(parsedTasks);
}

module.exports = {
    addTask: addTask,
    loadTasks: loadTasks,
    doneTask: doneTask
}