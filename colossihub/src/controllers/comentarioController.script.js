var comentarioModel = require("../models/comentarioModel.script");


function listar(req, res) {
    var idForum = req.params.idForum;

    comentarioModel.listar(idForum).then((resultado) => {
      res.status(200).json(resultado);
    });
  }

  function listarComentarioPeloIdTopico(req, res) {
    var idTopico = req.params.idTopico;

    comentarioModel.listarComentarioPeloIdTopico(idTopico)
    
    .then((resultado) => {
      console.log(resultado)
      res.status(200).json(resultado);
    });
  }

  module.exports = {
    listar,
    listarComentarioPeloIdTopico,
  };