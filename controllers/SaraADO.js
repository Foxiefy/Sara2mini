const ConexaoBD = require('../models/ConexaoBD');
const { QueryTypes } = require('sequelize');

class SaraADO {
    constructor() {
        this.con = ConexaoBD.sara(); // Conexão com o banco sara2mini
    }

    async query(sql, replacements = {}, type = QueryTypes.SELECT) {
        const [result] = await this.con.query(sql, { replacements, type });
        return result;
    }

    // CRUD genérico
    async listar(tabela) {
        return this.query(`SELECT * FROM ${tabela}`);
    }

    async buscarPorId(tabela, id) {
        return this.query(`SELECT * FROM ${tabela} WHERE id = :id`, { id });
    }

    async criar(tabela, dados) {
        const cols = Object.keys(dados).join(', ');
        const vals = Object.keys(dados).map(k => `:${k}`).join(', ');
        return this.query(`INSERT INTO ${tabela} (${cols}) VALUES (${vals})`, dados, QueryTypes.INSERT);
    }

    async atualizar(tabela, id, dados) {
        const set = Object.keys(dados).map(k => `${k} = :${k}`).join(', ');
        return this.query(`UPDATE ${tabela} SET ${set} WHERE id = :id`, { ...dados, id }, QueryTypes.UPDATE);
    }

    async deletar(tabela, id) {
        return this.query(`DELETE FROM ${tabela} WHERE id = :id`, { id }, QueryTypes.DELETE);
    }

    // Métodos específicos
    // ALOCAÇÕES
    listarAlocacoes() { return this.listar('Alocacoes'); }
    buscarAlocacaoPorId(id) { return this.buscarPorId('Alocacoes', id); }
    criarAlocacao(dados) { return this.criar('Alocacoes', dados); }
    atualizarAlocacao(id, dados) { return this.atualizar('Alocacoes', id, dados); }
    deletarAlocacao(id) { return this.deletar('Alocacoes', id); }

    // HORÁRIOS
   
}