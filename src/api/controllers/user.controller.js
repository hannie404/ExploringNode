const connect = require("../../config/database")

exports.create = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = await req.body

    const encryptedPassword = password
    const createdBy = 1
    const updatedBy = 1

    const connection = await connect()
    const result = await connection.execute(
      "INSERT INTO `accounts` (`firstName`, `lastName`, `email`, `password`, `createdBy`, `updatedBy`) VALUES ( ?, ?, ?, ? ,?, ?)",
      [firstName, lastName, email, password, createdBy, updatedBy]
    )

    res.status(200).send({
      message: "added successfully",
      data: result,
    })
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

exports.findByPk = async (req, res) => {
  const { id } = req.params
  try {
    const connection = await connect()

    const [row, field] = await connection.execute(
      "SELECT * FROM `users` WHERE `id` = ?",
      [id]
    )

    res.status(200).send({
      message: "fetched successfully",
      data: row[0],
    })
  } catch (error) {
    throw new Error(error)
  }
}

exports.findAll = async (req, res) => {
  try {
    const connection = await connect()

    const [row, field] = await connection.execute("SELECT * FROM `users`")

    res.status(200).send({
      message: "Success",
      data: row,
    })
  } catch (error) {
    throw new Error(error)
  }
}

exports.updateByPk = (req, res) => {}

exports.deleteByPk = (req, res) => {}

exports.deleteAll = (req, res) => {}
