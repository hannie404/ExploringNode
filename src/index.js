require("dotenv").config({ path: "./.env" })
const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")

const PORT = process.env.PORT || 8000
const app = express()

app.set("view engine", "hbs")
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, "api", "views")))
app.set("views", path.join(__dirname, "api", "views"))

require("./api/routes/fakeuser.routes")(app)
require("./api/routes/login.routes")(app)
require("./api/routes/logout.routes")(app)
require("./api/routes/register.routes")(app)
require("./api/routes/admin.routes")(app)
require("./api/routes/account.routes")(app)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
