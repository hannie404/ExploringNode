module.exports = (app) => {
  const controller = require("../controllers/logout.controller")
  const router = require("express").Router()

  router.get("/", controller.logoutUser)  

  app.use("/logout", router)
}
