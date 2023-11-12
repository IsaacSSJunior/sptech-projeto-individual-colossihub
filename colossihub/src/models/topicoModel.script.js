var database = require('../database/config.js')

function listar(idFor) {

    var query = `SELECT * FROM Topico
                    WHERE topico_fkForum = ${idFor};
    
    `;
  
    return database.executar(query);
  }

module.exports = {
    listar,
};