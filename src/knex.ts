import knex = require('knex');

// const knex = ({
//   client: 'sqlite3',
//   connection: {
//     filename: "./mydb.sqlite"
//   }
// });

export const db = knex({
  client: 'sqlite3',
  connection: {
    filename: "./db.sqlite3"
  }
})
