module.exports = (app) => {
  const controller = require("../controllers/login.controller")
  const middleware = require("../middlewares/login.middleware")
  const router = require("express").Router()

  router.get("/", login.view)

  router.post(
    "/",
    middleware.validateEmptyValue,
    middleware.validateEmail,
    middleware.validatePassword,
    controller.loginUser
  )

  app.use("/login", router)
}
