const fs = require('fs');
const util = require('util');

const readFilePromisified = util.promisify(fs.readFile);

const fileName = process.argv[2];

(async () => {
  const content = await readFilePromisified(fileName).toString();
  const linesCount = content.split('\n').length;

  console.log(`${linesCount} ${fileName}`);
})();

