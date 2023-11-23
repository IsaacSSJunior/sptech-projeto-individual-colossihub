var database = require('../database/config.js')

function listar(idUsuario) {

  var query = `SELECT * FROM HistoricoAcesso WHERE HistoricoAcesso_fkUsuario = ${idUsuario};`

  console.log("Executando a instrução SQL: \n" + query);
  return database.executar(query);

}
function listarUltimoAcesso() {

  var query = `SELECT nomeUsuarioHistoricoAcesso AS nomeUsuario FROM HistoricoAcesso ORDER BY idHistoricoAcesso DESC LIMIT 1;`

  console.log("Executando a instrução SQL: \n" + query);
  return database.executar(query);

}


function inserir(idUsuario, nomeUsuario) {
  var instrucao = `
      INSERT INTO HistoricoAcesso (nomeUsuarioHistoricoAcesso, HistoricoAcesso_fkUsuario) VALUES
        ('${nomeUsuario}',${idUsuario});
  `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  listar,
  listarUltimoAcesso,
  inserir
};