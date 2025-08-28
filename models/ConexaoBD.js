// ConexaoBD.js
const { Sequelize } = require('sequelize');

const conexoes = {
    sara2mini: new Sequelize('sara2mini', 'usuario', 'senha', { host: 'localhost', dialect: 'mysql' }),
    acadMini: new Sequelize('acadMini', 'usuario', 'senha', { host: 'localhost', dialect: 'mysql' }),
    arteMini: new Sequelize('arteMini', 'usuario', 'senha', { host: 'localhost', dialect: 'mysql' }),
};

module.exports = conexoes;
