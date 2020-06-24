const fs = require('fs');

const book = {
    title: 'Runixtra',
    describtion: 'From Innovation Into Creation'
}

//const bookJSON = JSON.stringify(book);
//const parsedBook = JSON.parse(bookJSON);

fs.writeFileSync('book.txt', bookJSON);

const bookBuffer = fs.readFileSync('book-json.json');
const dataJSON = bookBuffer.toString();
const data = JSON.parse(dataJSON);

console.log(data);
console.log(data.title);