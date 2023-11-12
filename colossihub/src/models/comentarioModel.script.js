var database = require('../database/config.js')

function listar(idForum) {

    var query = `SELECT * FROM Comentario
                    WHERE comentario_fkForum = ${idForum}
    
    `;
  
    return database.executar(query);
  }

module.exports = {
    listar,
};