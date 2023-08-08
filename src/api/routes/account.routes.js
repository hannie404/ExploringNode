module.exports = (app) => {
  const controller = require("../controllers/account.controller")
  const middleware = require("../middlewares/account.middleware")
  const router = require("express").Router()

  router.get("/update/:accountID", controller.updateView)

  router.put("/update/:accountID", controller.updateByPk)

  router.delete("/delete/:accountID", controller.deleteByPk)

  router.get("/skills/:accountID", controller.skillView)

  app.use("/account", router)
}
