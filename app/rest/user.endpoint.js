'use strict';

const joi = require('joi');

const postManager = require('../business/post.manager');

module.exports = {
  register(server) {
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
        return postManager.searchPosts(request.query.from, request.query.size);
      }
    });
  }
};
