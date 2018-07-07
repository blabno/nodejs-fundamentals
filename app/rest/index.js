'use strict';

const hapi = require('hapi');

const userEndpoint = require('./user.endpoint');

function registerRoutes(server) {
  userEndpoint.register(server);
}

async function createServer() {
  const server = await new hapi.Server({
    port: 8080,
    routes: {
      validate: {
        failAction: async (request, h, err) => {
          if (err && err.isJoi) {
            throw err;
          } else {
            throw Boom.badRequest('Invalid request payload input');
          }
        }
      }
    }
  });

  registerRoutes(server);

  return server;
}

module.exports = createServer;
