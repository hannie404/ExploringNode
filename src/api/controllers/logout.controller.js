exports.logoutUser = async (req, res) => {
  const cookies = req.cookies
  res.clearCookie("account")
  console.log(cookies)
  res.render("login")
}
