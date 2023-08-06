const path = require("path")

exports.view = (req, res) => {
  res.render(path.resolve("src", "api", "views", "register.hbs"))
}

exports.registerUser = (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body
  res.send(Object.values(req.body))
  // res.render(path.resolve("src", "api", "views", "register.hbs"), {
  //   message: "Reqistered successfully",
  // })
}
