var database = require('../database/config.js')

function listar(idForum) {

    var query = `SELECT * FROM Comentario
                    WHERE comentario_fkForum = ${idForum}
    
    `;
  
    return database.executar(query);
  }

  function listarComentarioPeloIdTopico(idTopico) {

    var query = `SELECT idComentario, descricao, dataComentario, comentario_fkUsuario, nomeUsuario
    FROM Comentario
    JOIN Usuario 
    ON comentario_fkUsuario = idUsuario
    WHERE comentario_fkTopico = ${idTopico};`;
  
    return database.executar(query);
  }

module.exports = {
    listar,
    listarComentarioPeloIdTopico,
};