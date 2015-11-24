

    // Working with core modules - fs

var fs = require('fs');

fs.writeFileSync('data.txt', 'Hello World from the IDE...'); // Blocking code

fs.writeFile('data2.txt', 'A lot of information', function () { // Non-blocking code
    console.log('wrote data to the file data2.txt ... ');
});

// Node does not block

console.log('Hello World!');

