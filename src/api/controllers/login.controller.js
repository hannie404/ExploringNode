const jwt = require("jsonwebtoken")

exports.view = (req, res) => {
  res.render("login")
}

exports.loginUser = async (req, res) => {
  try {
    const account = await req.body

    const accessToken = jwt.sign(account, process.env.ACCESS_SECRET, {
      expiresIn: "10s",
    })

    const cookieoptions = {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    }

    return res.cookie("account", accessToken, cookieoptions).redirect("/admin")
  } catch (error) {
    console.log(error)
  }
}
