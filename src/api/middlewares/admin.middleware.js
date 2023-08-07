const path = require("path")
const bcrypt = require("bcrypt")
const connect = require("../../config/database")

exports.validateEmptyValue = async (req, res, next) => {
  const hasAllValue = Object.values(req.body).every(Boolean)

  if (!hasAllValue) {
    return res.render(path.resolve("src", "api", "views", "register.hbs"), {
      message: "Fields cannot be empty!",
      color: "danger",
    })
  }
  next()
}

exports.validateEmail = async (req, res, next) => {
  try {
    const conn = await connect()
    const { email } = req.body
    const [result] = await conn.execute(
      "SELECT * from accounts WHERE email = ?",
      [email]
    )

    const hasMatch = result.length

    if (!hasMatch) {
      return res.render(path.resolve("src", "api", "views", "register.hbs"), {
        message: "Email/password invalid!",
        color: "danger",
      })
    }
    next()
  } catch (error) {
    console.log(error)
  }
}

exports.validatePassword = async (req, res, next) => {
  try {
    const conn = await connect()
    const { email, password } = req.body
    const [result] = await conn.execute(
      "SELECT * from accounts WHERE email = ?",
      [email]
    )

    const account = result[0]

    const isPasswordMatch = await bcrypt.compare(password, account.password)

    if (!isPasswordMatch) {
      return res.render(path.resolve("src", "api", "views", "register.hbs"), {
        message: "Email/password invalid!",
        color: "danger",
      })
    }
    req.body = account
    next()
  } catch (error) {
    console.log(error)
  }
}
