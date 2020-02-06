const Knex = require('knex');
const dbOptions = require('./config/config').DB;
// const knex = require('knex')(dbOptions);

const knex = new Knex(dbOptions);
// knex('roles').insert({name: 'Admin'}, ['id']).then(result => console.log(result));
module.exports = knex;
