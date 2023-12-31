var database = require('../database/config.js')

function listarTopicosForum(idForum) {

  var query = `SELECT idTopico, tituloTopico, COUNT(idComentario) AS totalComentarios, nomeUsuario, dataTopico 
  FROM Topico 
  JOIN Usuario  ON idUsuario = topico_fkUsuario 
  LEFT JOIN Comentario ON comentario_fkTopico = idTopico
  WHERE topico_fkForum = ${idForum}
  GROUP BY idTopico, nomeUsuario, dataTopico, tituloTopico;`

  return database.executar(query);

}

function listarTopicoPeloId(idTopico) {
  console.log("ACESSEI O TOPICO MODEL \n \n\t\t >> Se aqui der erro de, funçaõ listarTopicoPeloId ");

  var query = `
  SELECT idTopico, tituloTopico, descricaoTopico, dataTopico, topico_fkUsuario, nomeUsuario 
  FROM Topico JOIN Usuario ON topico_fkUsuario = idUsuario
  WHERE idTopico = ${idTopico};`

  return database.executar(query);

}

function publicar(titulo, descricao, idForum, idUsuario) {
  console.log("ACESSEI O TOPICO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", titulo, descricao, idForum, idUsuario);
  var instrucao = `
      INSERT INTO Topico (tituloTopico, descricaoTopico, dataTopico, topico_fkForum, topico_fkUsuario) VALUES ('${titulo}', '${descricao}', current_timestamp(),${idForum} ,${idUsuario});
  `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function deletar(idTopico) {
  console.log("ACESSEI O TOPICO MODEL - função deletar \n \n\t\t");
  var instrucao = `
      DELETE FROM Topico WHERE idTopico = ${idTopico};
  `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  listarTopicosForum,
  listarTopicoPeloId,
  publicar,
  deletar
};