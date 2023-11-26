var express = require('express')
var router = express.Router()
var comentarioController = require("../controllers/comentarioController.script");

router.get("/listar/:idForum", function (req,res){
    comentarioController.listar(req,res);
});


router.get("/listarCometario/:idTopico", function (req,res) {
    comentarioController.listarComentarioPeloIdTopico(req,res)
});

module.exports = router;
