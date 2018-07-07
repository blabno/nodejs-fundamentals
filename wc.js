const fs = require('fs');

const fileName = process.argv[2];

function onFileRead(err, data) {
  if (err) {
    throw err;
  }
  const content = data.toString();
  const linesCount = content.split('\n').length;

  console.log(`${linesCount} ${fileName}`);
}

fs.readFile(fileName, onFileRead);

