const path = require("path")
const bcrypt = require("bcrypt")
const faker = require("@faker-js/faker")

const connect = require("../../config/database")
exports.view = (req, res) => {
  res.render("register")
}

exports.registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = await req.body
    const encryptedPassword = await bcrypt.hash(password, 10)
    const conn = await connect()
    const result = await conn.execute(
      "INSERT INTO accounts (firstName, lastName, email, password) VALUES (?, ?, ? ,?)",
      [firstName, lastName, email, encryptedPassword]
    )
    console.log(result)
    res.render("register", {
      message: "Registered successfully",
      color: "success",
    })
  } catch (error) {
    console.log(error)
  }
}
