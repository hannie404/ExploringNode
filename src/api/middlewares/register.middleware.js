exports.registerUser = (req, res, next) => {
  const hasAllValue = Object.values(req.body).every(Boolean)
  if (!hasAllValue) {
    res.status(400).send({
      status: 400,
      statusText: "Bad Request",
      headers: { "Content-Type": "application/json" },
      message: "Invalid field input",
    })
  }
  const isMatch = req.body.password === req.body.confirmPassword

  if (!isMatch) {
    res.status(400).send({
      status: 400,
      statusText: "Bad Request",
      headers: { "Content-Type": "application/json" },
      message: "Password does not match",
    })
  }
  next()
}
