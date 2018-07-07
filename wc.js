const fs = require('fs');

const fileName = process.argv[2];

const content = fs.readFileSync(fileName).toString();

const linesCount = content.split('\n').length;

console.log(`${linesCount} ${fileName}`);
