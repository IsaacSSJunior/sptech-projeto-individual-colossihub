var express = require('express')
var router = express.Router()
var topicoController = require("../controllers/topicoController.script");

router.get("/listarTopicosForum/:idForum", function (req,res) {
    topicoController.listarTopicosForum(req,res)
});

router.post("/publicar/:idForum/:idUsuario", function (req, res) {
    topicoController.publicar(req, res);
});

module.exports = router;

