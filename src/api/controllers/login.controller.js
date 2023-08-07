const path = require("path")
const jwt = require("jsonwebtoken")

const connect = require("../../config/database")

exports.view = (req, res) => {
  res.render("login")
}

exports.loginUser = async (req, res) => {
  try {
    const account = await req.body

    const accessToken = jwt.sign(account, process.env.ACCESS_TOKEN)

    return res
      .cookie("account", accessToken, { maxAge: 900000 })
      .redirect("/admin")
  } catch (error) {
    console.log(error)
  }
}
