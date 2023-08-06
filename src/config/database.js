require("dotenv").config()
const mysql = require("mysql2/promise")

const connect = async () => {
  const connection = await mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    port: process.env.DATABASE_PORT,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
  })
  return connection
}

module.exports = connect
