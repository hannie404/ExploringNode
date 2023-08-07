const path = require("path")
const connect = require("../../config/database")

exports.validateEmptyValue = (req, res, next) => {
  const hasAllValue = Object.values(req.body).every(Boolean)

  if (!hasAllValue) {
    return res.render(path.resolve("src", "api", "views", "register.hbs"), {
      message: "Fields cannot be empty!",
      color: "danger",
    })
  }

  next()
}

exports.validateEmailIfExist = async (req, res, next) => {
  try {
    const conn = await connect()
    const { email } = req.body
    const [result] = await conn.execute(
      "SELECT * from accounts where email = ?",
      [email]
    )

    const hasMatch = result.length

    if (hasMatch) {
      return res.render(path.resolve("src", "api", "views", "register.hbs"), {
        message: "Email already exists!",
        color: "danger",
      })
    }
    next()
  } catch (error) {
    console.log(error)
  }
}

exports.validatePasswordMatch = (req, res, next) => {
  const isMatch = req.body.password === req.body.confirmPassword
  console.log(req.body.password)
  console.log(req.body.confirmPassword)
  if (!isMatch) {
    return res.render(path.resolve("src", "api", "views", "register.hbs"), {
      message: "Password does not match",
      color: "danger",
    })
  }
  next()
}
