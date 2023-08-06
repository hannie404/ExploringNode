require("dotenv").config({ path: "./.env" })
const express = require("express")
const path = require("path")

const PORT = process.env.PORT || 8000
const app = express()

// view engine configuration
app.set("view engine", "hbs")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, "api", "views")))

require("./api/routes/user.routes")(app)
require("./api/routes/login.routes")(app)
require("./api/routes/register.routes")(app)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
