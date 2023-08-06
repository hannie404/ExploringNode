module.exports = (app) => {
  const users = require("../controllers/user.controller")

  const router = require("express").Router()

  router.post("/", users.create)

  router.get("/:id", users.findByPk)

  router.get("/", users.findAll)

  router.put("/:id", users.updateByPk)

  router.delete("/:id", users.deleteByPk)

  router.delete("/", users.deleteAll)

  app.use("/api/users", router)
}
