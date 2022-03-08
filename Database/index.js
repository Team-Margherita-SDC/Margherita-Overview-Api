const { Pool } = require('pg');
const password = require('../config.js');

const pool = new Pool({
  user: 'data',
  host: 'localhost',
  database: 'Products',
  password: password,
  port: 5432,
})

module.exports = pool;

// const client = new Client({
//    user: 'data',
//    host: 'localhost',
//    database: 'Products',
//    password: password,
//    port: 5432,
// })
// client.connect()
// client.query('Select * from products where id=1', (err, res) => {
//   console.log(err, res)
//   client.end()
// })

// module.exports = client;