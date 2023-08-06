module.exports = (app) => {
  const modelController = require("../controllers/model.controller")

  const modelRouter = require("express").Router()

  modelRouter.post("/", modelController.create)

  modelRouter.get("/:id", modelController.findByPk)

  modelRouter.get("/:column", modelController.findOne) // FIXME

  modelRouter.get("/", modelController.findAll)

  modelRouter.put("/:id", modelController.updateByPk)

  modelRouter.put("/:column", modelController.updateOne) // FIXME

  modelRouter.put("/", modelController.updateAll)

  modelRouter.delete("/:id", modelController.deletebyPk)

  modelRouter.delete("/:column", modelController.deleteOne) // FIXME

  modelRouter.delete("/", modelController.deleteAll)

  app.use("/api/users", modelRouter)
}
