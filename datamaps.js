// all of the nodes
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
    line = JSON.parse(line).geometry.coordinates;
    process.stdout.write(line[1].toFixed(6) + ',' + line[0].toFixed(6) + '\n');
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
