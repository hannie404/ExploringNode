module.exports = (app) => {
  const controller = require("../controllers/admin.controller")
  const middleware = require("../middlewares/admin.middleware")
  const router = require("express").Router()

  router.get("/", controller.view)

  router.delete("/", controller.view)

  app.use("/admin", router)
}
