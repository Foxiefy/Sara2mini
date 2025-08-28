const ConexaoBD = require('../models/ConexaoBD');
const { QueryTypes } = require('sequelize');

class ArteADO {
  constructor() {
        this.con = ConexaoBD.arteMini; // conecta ao banco arteMini
    }
    async executarQuery(sql, replacements = {}, type = QueryTypes.SELECT) {
        const [result] = await this.con.query(sql, { replacements, type });
        return result;
    }

    // ARTEFATOS
    async listarArtefatos() { return this.executarQuery('SELECT * FROM Artefatos'); }
    async buscarArtefatoPorId(id) { return this.executarQuery('SELECT * FROM Artefatos WHERE id = :id', { id }); }
    async criarArtefato(artefato) { return this.executarQuery('INSERT INTO Artefatos (nome, descricao) VALUES (:nome, :descricao)', artefato, QueryTypes.INSERT); }
    async atualizarArtefato(id, artefato) { return this.executarQuery('UPDATE Artefatos SET nome = :nome, descricao = :descricao WHERE id = :id', { ...artefato, id }, QueryTypes.UPDATE); }
    async deletarArtefato(id) { return this.executarQuery('DELETE FROM Artefatos WHERE id = :id', { id }, QueryTypes.DELETE); }

    // PROJETOS
    async listarProjetos() { return this.executarQuery('SELECT * FROM Projetos'); }
    async buscarProjetoPorId(id) { return this.executarQuery('SELECT * FROM Projetos WHERE id = :id', { id }); }
    async criarProjeto(projeto) { return this.executarQuery('INSERT INTO Projetos (nome, descricao) VALUES (:nome, :descricao)', projeto, QueryTypes.INSERT); }
    async atualizarProjeto(id, projeto) { return this.executarQuery('UPDATE Projetos SET nome = :nome, descricao = :descricao WHERE id = :id', { ...projeto, id }, QueryTypes.UPDATE); }
    async deletarProjeto(id) { return this.executarQuery('DELETE FROM Projetos WHERE id = :id', { id }, QueryTypes.DELETE); }

    // MÓDULOS
    async listarModulos() { return this.executarQuery('SELECT * FROM Modulos'); }
    async buscarModuloPorId(id) { return this.executarQuery('SELECT * FROM Modulos WHERE id = :id', { id }); }
    async criarModulo(modulo) { return this.executarQuery('INSERT INTO Modulos (nome, descricao) VALUES (:nome, :descricao)', modulo, QueryTypes.INSERT); }
    async atualizarModulo(id, modulo) { return this.executarQuery('UPDATE Modulos SET nome = :nome, descricao = :descricao WHERE id = :id', { ...modulo, id }, QueryTypes.UPDATE); }
    async deletarModulo(id) { return this.executarQuery('DELETE FROM Modulos WHERE id = :id', { id }, QueryTypes.DELETE); }
}

module.exports = ArteADO;
