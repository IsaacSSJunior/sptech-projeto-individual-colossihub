var express = require('express')
var router = express.Router()
var forumController = require("../controllers/forumController.script");

router.get("/listar", function (req, res) {
  forumController.listar(req, res);
});


router.get("/listar/:idForum", function (req, res) {
  forumController.listarPorIdForum(req, res);
});

module.exports = router;