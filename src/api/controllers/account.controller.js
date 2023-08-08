const connect = require("../../config/database")

exports.updateView = async (req, res) => {
  try {
    const { accountID } = await req.params
    const conn = await connect()

    const [result] = await conn.execute(
      "SELECT * FROM accounts WHERE accountID = ?",
      [accountID]
    )

    return res.render("update", { account: result[0] })
  } catch (error) {
    console.log(error)
  }
}

exports.updateByPk = async (req, res) => {
  try {
    const { accountID } = req.params
    const { firstName, lastName } = req.body

    const conn = await connect()
    const { affectedRows } = await conn.execute(
      `UPDATE accounts SET firstName=?, lastName=? WHERE accountID=?`,
      [firstName, lastName, accountID]
    )
    res.redirect("/admin")
  } catch (error) {
    console.log(error)
  }
}

exports.deleteByPk = async (req, res) => {
  try {
    const { accountID } = req.params
    const conn = await connect()
    const result = await conn.execute(
      `DELETE FROM accounts WHERE accountID=?`,
      [accountID]
    )
    res.set({ method: "GET" }).redirect("/admin")
  } catch (error) {
    console.log(error)
  }
}

exports.skillView = async (req, res) => {
  try {
    const { accountID } = req.params
    const conn = await connect()
    const [result] = await conn.execute(
      "SELECT a.accountID, a.firstName, a.lastName, a.email, s.title, s.level FROM accounts a LEFT JOIN skills s ON a.accountID=s.accountID WHERE a.accountID=?",
      [accountID]
    )
    return res.render("skills", {
      firstName: result[0].firstName,
      lastName: result[0].lastName,
      email: result[0].email,
      skills: result,
    })
  } catch (error) {
    console.log(error)
  }
}
