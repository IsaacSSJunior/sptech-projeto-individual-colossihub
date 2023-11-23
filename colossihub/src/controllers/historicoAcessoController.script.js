var historicoAcessoModel = require("../models/historicoAcessoModel.script");

function listarUltimoAcesso(req, res) {  
  historicoAcessoModel.listarUltimoAcesso()
    
    .then((resultado) => {
      console.log(resultado)
      res.status(200).json(resultado);
    });
  }


  module.exports = {
    listarUltimoAcesso,
}