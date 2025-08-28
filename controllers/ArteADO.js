const ConexaoBD = require('../models/ConexaoBD');
const { QueryTypes } = require('sequelize');


class AcadADO {
    
 constructor() {
        this.con = ConexaoBD.connect(); // Usa a conexão do ConexaoBD
    }