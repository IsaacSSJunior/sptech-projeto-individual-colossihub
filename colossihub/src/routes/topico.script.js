var express = require('express')
var router = express.Router()
var topicoController = require("../controllers/topicoController.script");

router.get("/listar/:idForum", function (req,res){
    topicoController.listar(req,res);
});

module.exports = router;

