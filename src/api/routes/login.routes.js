module.exports = (app) => {
  const login = require("../controllers/login.controller")
  const router = require("express").Router()

  router.get("/", login.view)

  router.post("/login", login.loginUser)

  app.use("/", router)
}
