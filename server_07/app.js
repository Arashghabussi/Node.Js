const fs = require('fs');
const { argv } = require('process');
const yargs = require('yargs');

const buffer = fs.readFileSync('blacklist.json');
const bufferString = buffer.toString();
const blacklist = JSON.parse(bufferString);

blacklist.planet = "earth";
blacklist.name = "XOZ003012";

const newList = JSON.stringify(blacklist);
fs.writeFileSync('blacklist.json', newList);