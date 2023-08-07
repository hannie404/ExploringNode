const path = require("path")
const { faker } = require("@faker-js/faker")

exports.generateFakeUser = (req, res) => {
  res.status(201).send({
    firstName: faker.person.firstName(),
    lastName: faker.person.firstName(),
    password: faker.internet.password(),
  })
}
