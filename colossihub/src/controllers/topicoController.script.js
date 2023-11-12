var topicoModel = require("../models/topicoModel.script");


function listar(req, res) {
    var idF = req.params.idForum;

    topicoModel.listar(idF).then((resultado) => {
      res.status(200).json(resultado);
    });
  }

  module.exports = {
    listar,
  };