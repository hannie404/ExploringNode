module.exports = (app) => {
  const controller = require("../controllers/register.controller")
  const middleware = require("../middlewares/register.middleware")
  const router = require("express").Router()

  router.get("/", controller.view)

  router.post("/", middleware.registerUser, controller.registerUser)

  app.use("/register", router)
}
