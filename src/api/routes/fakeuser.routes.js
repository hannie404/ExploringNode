module.exports = (app) => {
  const controller = require("../controllers/fakeuser.controller")

  const router = require("express").Router()

  router.get("/", controller.generateFakeUser)

  app.use("/api/fakeuser", router)
}
