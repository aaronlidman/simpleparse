// just the coordinates, for datamaps
var fs = require('fs'),
    readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', function(line) {
    line = JSON.parse(line).geometry.coordinates;
    process.stdout.write(line[1] + ',' + line[0] + '\n');
});
