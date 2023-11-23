var forumModel = require("../models/forumModel.script");


function listar(req, res) {
    forumModel.listar().then((resultado) => {
      res.status(200).json(resultado);
    });
  }

  function listarEstatisticas(req, res) {
    forumModel.listarEstatisticas().then((resultado) => {
      res.status(200).json(resultado);
    });
  }

  function listarPorIdForum(req, res) {
    var idF = req.params.idForum;

    forumModel.listarPorIdForum(idF)
    
    .then((resultado) => {

      res.status(200).json({
        nome: resultado[0].nomeForum,
        descricao: resultado[0].descricaoForum,
        imagem: resultado[0].imagemForum

    });

    });
  }

  module.exports = {
    listar,
    listarPorIdForum,
    listarEstatisticas
  };