const posts = [
  { title: 'Vitalik Buterin: “I definitely hope centralized exchanges go burn in hell as much as possible”' },
  { title: '"A question for EOS": why is EOS worth $4 billion? -> get not a single comprehensible expert answer within 8 minutes. ' }
];

function searchPosts(from = 0, size) {
  return posts.slice(from, size && from + size);
}

module.exports = {
  searchPosts
};
