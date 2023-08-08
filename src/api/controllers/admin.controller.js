require("dotenv").config({ path: "./.env" })
const jwt = require("jsonwebtoken")

const connect = require("../../config/database")

exports.view = async (req, res) => {
  const cookies = req.cookies

  jwt.verify(cookies.account, process.env.ACCESS_SECRET, async (err, data) => {
    if (err) {
      return res.render("login")
    }
    const conn = await connect()
    const [result] = await conn.execute("SELECT * FROM accounts")

    res.render("admin", { accounts: result, is_admin: true })
  })
}
