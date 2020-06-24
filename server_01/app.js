const fs = require('fs');

function userLog(log){
    fs.writeFileSync('user_log.txt', '');
    for(let i = 0; i < log; i ++){
        fs.appendFileSync('user_log.txt', 'data');
        fs.appendFileSync('user_log.txt', '\n');
    }
}

userLog(5);