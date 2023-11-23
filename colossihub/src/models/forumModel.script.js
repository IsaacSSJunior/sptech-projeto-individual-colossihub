var database = require('../database/config.js')

function listar() {
  var query = `
  SELECT idForum,
  nomeForum, 
  descricaoForum,
  imagemForum,
  COUNT(distinct idTopico) AS numeroTopicos,
  COUNT(idComentario) AS numeroComentarios
  FROM Forum JOIN Topico ON idForum = topico_fkForum
  LEFT JOIN Comentario ON idTopico = comentario_fkTopico
	GROUP BY idForum,nomeForum, descricaoForum, imagemForum;`;

  return database.executar(query);
}

function listarPorIdForum(idForum) {
  console.log("ACESSEI O FORUM MODEL")
  var query = `SELECT nomeForum,descricaoForum, imagemForum FROM Forum WHERE idForum = ${idForum}`;
  console.log("CONSULTA: " + query)
  return database.executar(query);
}

function listarEstatisticas(){
  var query = `
  SELECT
  nomeForum, 
  COUNT(distinct idTopico) AS numeroTopicos,
  COUNT(idComentario) AS numeroComentarios
  FROM Forum JOIN Topico ON idForum = topico_fkForum
  LEFT JOIN Comentario ON idTopico = comentario_fkTopico
	GROUP BY idForum,nomeForum, descricaoForum, imagemForum;`;

  return database.executar(query);
}

module.exports = {
  listar,
  listarPorIdForum,
  listarEstatisticas

};