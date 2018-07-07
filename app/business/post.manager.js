const postDAO = require('../dao/postDAO');

function searchPosts(from = 0, size) {
  return postDAO.searchPosts(from, size && from + size);
}

module.exports = {
  searchPosts
};
