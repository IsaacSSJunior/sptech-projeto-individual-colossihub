var topicoModel = require("../models/topicoModel.script");


function listarTopicosForum(req, res) {
  var idF = req.params.idForum;

  topicoModel.listarTopicosForum(idF)
  
  .then((resultado) => {
    console.log(resultado)
    res.status(200).json(resultado);

  });
}

function listarTopicoPeloId(req, res) {
    var idT = req.params.idTopico;
  
    topicoModel.listarTopicoPeloId(idT)
    
    .then((resultado) => {
      console.log(resultado)
      res.status(200).json({
        id: resultado[0].idTopico,
        titulo: resultado[0].tituloTopico,
        descricao: resultado[0].descricaoTopico,
        data: resultado[0].dataTopico,
        t_fkUsuario: resultado[0].topico_fkUsuario,
        nome: resultado[0].nomeUsuario
      });
  
    });
  }

function publicar(req, res) {
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;
  var idForum = req.params.idForum;
  var idUsuario = req.params.idUsuario;

  if (titulo == undefined) {
      res.status(400).send("O título está indefinido!");
  } else if (descricao == undefined) {
      res.status(400).send("A descrição está indefinido!");
  } else if (idForum == undefined) {
      res.status(403).send("O id do fórum está indefinido!");
  } else if (idUsuario == undefined) {
      res.status(403).send("O id do usuário está indefinido!");
  } else {

      topicoModel.publicar(titulo, descricao, idForum,  idUsuario)
          .then(
              function (resultado) {
                  res.json(resultado);
              }
          )
          .catch(
              function (erro) {
                  console.log(erro);
                  console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                  res.status(500).json(erro.sqlMessage);
              }
          );
  }
}




module.exports = {
  listarTopicosForum,
  publicar,
  listarTopicoPeloId
};