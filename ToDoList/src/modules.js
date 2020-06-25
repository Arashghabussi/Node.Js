const yargs = require("yargs");
const fs = require('fs');

const addTask = function (title, task) {
    const tasks = loadTasks();

    tasks.push({
        title: title,
        body: task
    });
    console.log(tasks);
    saveNotes(tasks);
}

const saveNotes = function (tasks) {
    const dataJSON = JSON.stringify(tasks);
    fs.writeFileSync('tasks.json', dataJSON);
}

const loadTasks = function () {
    try {
        const buffer = fs.readFileSync('./tasks.json');
        //console.log(`test ${buffer}`);
        const stringBuffer = buffer.toString();
        //console.log(`test ${stringBuffer}`);
        const bufferParsed = JSON.parse(stringBuffer);
        
        return bufferParsed;
    } catch (e) {
        return [];
    }
}

module.exports = {
    addTask: addTask,
    loadTasks: loadTasks
}