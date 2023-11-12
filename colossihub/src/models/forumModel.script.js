var database = require('../database/config.js')

function listar() {
    var query = `SELECT * FROM Forum`;
  
    return database.executar(query);
  }

  module.exports = {
     listar,
    
    };