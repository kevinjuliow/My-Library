const mysql = require ('mysql2')
const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password : process.env.PASSWORD, 
  database: process.env.DATA,
});


module.exports = pool.promise()