const connect = require("../../config/database")

exports.view = async (req, res) => {
  const headers = req.headers

  const conn = await connect()
  const [result] = await conn.execute("SELECT * FROM accounts")

  res.render("admin", { accounts: result, is_admin: true })
}
