var express = require("express");
var router = express.Router();
var usuarioController = require("../controllers/usuariosController.script");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.get("/listarEnvolvimento", function(req,res){
    usuarioController.listarEnvolvimento(req,res);
})


module.exports = router;