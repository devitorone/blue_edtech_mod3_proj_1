const charService = require('../services/char.service');

const findCharController = (req, res) => {
  res.send(charService.findCharService());
};

const findCharByIdController = (req, res) => {
  res.send(charService.findCharService(req.params.id));
};

module.exports = {
  findCharController,
  findCharByIdController,
};
