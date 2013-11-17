// remove some unnecessary properties
var fs = require('fs'),
    readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', function(line) {
    line = JSON.parse(line);
    delete line.id;
    delete line.properties.href;
    delete line.properties.owner;
    process.stdout.write(JSON.stringify(line) + '\n');
});
