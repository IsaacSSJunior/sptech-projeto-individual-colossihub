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

  function deletar(idTopico) {
    console.log("ACESSEI O COMENTARIO MODEL - função deletar \n \n\t\t");
    var instrucao = `
        DELETE FROM Comentario WHERE comentario_fkTopico = ${idTopico};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  }

  function publicar(descricao, idForum, idTopico, idUsuario) {

    var query = `INSERT INTO Comentario (descricao, comentario_fkForum, comentario_fktopico, comentario_fkusuario) VALUES 
                      ('${descricao}', ${idForum}, ${idTopico}, ${idUsuario});`;
  
    return database.executar(query);
  }
  

module.exports = {
    listar,
    listarComentarioPeloIdTopico,
    deletar,
    publicar
};