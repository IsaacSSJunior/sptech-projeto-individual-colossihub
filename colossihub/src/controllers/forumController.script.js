var forumModel = require("../models/forumModel.script");


function listar(req, res) {
    forumModel.listar().then((resultado) => {
      res.status(200).json(resultado);
    });
  }

  module.exports = {
    listar,
  };