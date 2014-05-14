var knex = require('knex');

var db = knex.initialize({
  client: 'mysql',
  connection: {
    host     : '127.0.0.1',
    user     : 'shippable',
    password : '',
    database : 'test'
  }
});

db.schema.hasTable('things').then(function (exists) {
  if (!exists) {
    console.log('Table does not exist, creating...');
    db.raw('CREATE TABLE things (name char(20));').then(function (res) {
      console.dir(res);
    });
  }
});

module.exports.db = db;
