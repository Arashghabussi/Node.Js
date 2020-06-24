const fs = require('fs');
// create server_catch & write ip

function userLog(log){
    fs.writeFileSync('user_log.txt', '');
    for(let i = 0; i < log; i ++){
        fs.appendFileSync('user_log.txt', 'data');
        fs.appendFileSync('user_log.txt', '\n');
    }
}

userLog(5);