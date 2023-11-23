var express = require('express')
var router = express.Router()
var historicoAcessoController = require("../controllers/historicoAcessoController.script");

router.get("/listar", function (req,res){
    historicoAcessoController.listarUltimoAcesso(req,res);
});


router.post("/inserir/:idUsuario/:nomeUsuario", function (req, res) {
    historicoAcessoController.Inserir(req, res);
});

module.exports = router;

