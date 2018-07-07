'use strict';

const createServer = require('./rest');

(async () => {
  const server = await createServer();
  await server.start();
  console.log('info', `Server running at: ${server.info.uri}`);
})();
