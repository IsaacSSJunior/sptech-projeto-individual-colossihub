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

  function publicar(req, res) {
    var descricao = req.body.descricao;
    var idForum = req.params.idForum;
    var idTopico = req.params.idTopico;
    var idUsuario = req.params.idUsuario;
  
    if (descricao == undefined) {
        res.status(400).send("A descrição está indefinido!");
    } else if (idForum == undefined) {
        res.status(400).send("O id do fórum está indefinido!");
    } else if (idTopico == undefined) {
        res.status(403).send("O id do tópico está indefinido!");
    } else if (idUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else {
  
        comentarioModel.publicar(descricao, idForum, idTopico, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o comentário: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
  }

  module.exports = {
    listar,
    listarComentarioPeloIdTopico,
    publicar
  };