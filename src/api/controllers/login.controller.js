const path = require("path")

exports.view = (req, res) => {
  console.log(path.resolve())
  res.render(path.resolve("src", "api", "views", "index.hbs"))
}

exports.loginUser = (req, res) => {
  console.log(req.body)
}
