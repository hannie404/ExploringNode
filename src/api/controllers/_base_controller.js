exports.create = (req, res) => {
  res.send("POST > create reqponse from controller")
}

exports.findByPk = (req, res) => {
  res.send("get one request received from controller")
}

exports.findOne = (req, res) => {
  res.send("get one request received from controller")
} // FIXME

exports.findAll = (req, res) => {
  res.send("get all request received from controller")
}

exports.updateByPk = (req, res) => {
  res.send("update one request received from controller")
}

exports.updateOne = (req, res) => {
  res.send("update one request received from controller")
} // FIXME

exports.updateAll = (req, res) => {
  res.send("update all request received from controller")
}

exports.deleteByPk = (req, res) => {
  res.send("delete one request received from controller")
}

exports.deleteOne = (req, res) => {
  res.send("delete one request received from controller")
} // FIXME

exports.deleteAll = (req, res) => {
  res.send("delete all request received from controller")
}
