var database = require('../database/config.js')

function listar() {
  var query = `SELECT * FROM Forum`;

  return database.executar(query);
}

function listarPorIdForum(idForum) {
  console.log("ACESSEI O FORUM MODEL")
  var query = `SELECT nomeForum,descricaoForum, imagemForum FROM Forum WHERE idForum = ${idForum}`;
  console.log("CONSULTA: " + query)
  return database.executar(query);
}

module.exports = {
  listar,
  listarPorIdForum

};