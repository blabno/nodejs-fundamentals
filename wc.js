const fs = require('fs');
const util = require('util');

const readFilePromisified = util.promisify(fs.readFile);

const fileName = process.argv[2];

function onFileRead(data) {
  const content = data.toString();
  const linesCount = content.split('\n').length;

  console.log(`${linesCount} ${fileName}`);
}

readFilePromisified(fileName)
  .then(onFileRead)
  .catch(e => console.error(e))
;

