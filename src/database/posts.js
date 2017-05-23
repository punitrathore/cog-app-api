var pgp = require('pg-promise')()
var databaseUrl = process.env.DATABASE_URL || `postgres://punit:@localhost:5432/cog_api_${process.env.NODE_ENV}`
var db = pgp(databaseUrl);

const posts = {}

posts.all = function() {
  return db.any('SELECT * from posts')
}

posts.find = function(id) {
  return db.one('SELECT * from posts where id = $1', [id])
}

posts.create = function(body) {
  //
  try {
    return db.query('INSERT INTO posts (body) values($1) RETURNING *', [body])
  }
  catch (err) {
    return Promise.reject(err);
  };

}

module.exports = posts

