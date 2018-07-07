'use strict';

const hapi = require('hapi');
const joi = require('joi');

const posts = [
  { title: 'Vitalik Buterin: “I definitely hope centralized exchanges go burn in hell as much as possible”' },
  { title: '"A question for EOS": why is EOS worth $4 billion? -> get not a single comprehensible expert answer within 8 minutes. ' }
];

function searchPosts(from = 0, size) {
  return posts.slice(from, size && from + size);
}

(async () => {
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

  server.route({
    method: 'GET',
    path: '/api/posts',
    config: {
      description: 'Get posts',
      tags: ['api'],
      validate: {
        query: joi.object({
          from: joi.number().integer(),
          size: joi.number().integer()
        }).label('getPostsRequest')
      }
    },
    handler(request) {
      return searchPosts(request.query.from, request.query.size);
    }
  });

  await server.start();
  console.log('info', `Server running at: ${server.info.uri}`);
})();
