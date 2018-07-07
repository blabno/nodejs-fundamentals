const mongodb = require('mongodb');

const config = require('../config');

const MongoClient = mongodb.MongoClient;

let client;

const posts = [
  { title: 'Vitalik Buterin: “I definitely hope centralized exchanges go burn in hell as much as possible”' },
  { title: '"A question for EOS": why is EOS worth $4 billion? -> get not a single comprehensible expert answer within 8 minutes. ' }
];

async function getClient() {
  if (!client) {
    client = await MongoClient.connect(config.mongo.connectionUrl);
    client.db(config.mongo.databaseName).collection('posts').insert(posts);
  }
  return client;
}

async function searchPosts(from, size) {
  const client = await getClient();
  const find = client.db(config.mongo.databaseName).collection('posts').find();
  if (from) {
    find.skip(from);
  }
  if (size) {
    find.limit(size);
  }
  return find.toArray();
}

module.exports = {
  searchPosts
};

