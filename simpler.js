// remove some unnecessary properties
var fs = require('fs'),
    glob = require('glob'),
    readline = require('readline');

var sGeo,
    rl,
    count = 0;

glob('places_dump_*.geojson', {sync: true}, function (er, files) {
    sGeo = files;
});

function eachLine(line) {
    line = JSON.parse(line);
    delete line.id;
    delete line.properties.href;
    delete line.properties.owner;
    process.stdout.write(JSON.stringify(line) + '\n');
}

function nextFile() {
    var file = sGeo[count];
    if (file) {
        rl = readline.createInterface({
            input: fs.createReadStream(file),
            outstream: process.stdout,
            terminal: false
        });
    }
    count += 1;
    rl.on('line', eachLine);
    rl.on('close', nextFile);
}

nextFile();
