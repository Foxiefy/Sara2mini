const ConexaoBD = require('../models/ConexaoBD');
const { QueryTypes } = require('sequelize');

class AcadADO {
 constructor() {
        this.con = ConexaoBD.acadMini; // conecta ao banco acadMini
    }

    async query(sql, replacements = {}, type = QueryTypes.SELECT) {
        const [result] = await this.con.query(sql, { replacements, type });
        return result;
    }

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

    // Métodos específicos para facilitar uso
    listarCursos() { return this.listar('cursos'); }
    buscarCursoPorId(id) { return this.buscarPorId('cursos', id); }
    criarCurso(dados) { return this.criar('cursos', dados); }
    atualizarCurso(id, dados) { return this.atualizar('cursos', id, dados); }
    deletarCurso(id) { return this.deletar('cursos', id); }

    listarMatrizes() { return this.listar('matrizes'); }
    buscarMatrizPorId(id) { return this.buscarPorId('matrizes', id); }
    criarMatriz(dados) { return this.criar('matrizes', dados); }
    atualizarMatriz(id, dados) { return this.atualizar('matrizes', id, dados); }
    deletarMatriz(id) { return this.deletar('matrizes', id); }

    listarDisciplinas() { return this.listar('disciplinas'); }
    buscarDisciplinaPorId(id) { return this.buscarPorId('disciplinas', id); }
    criarDisciplina(dados) { return this.criar('disciplinas', dados); }
    atualizarDisciplina(id, dados) { return this.atualizar('disciplinas', id, dados); }
    deletarDisciplina(id) { return this.deletar('disciplinas', id); }

    listarDiscentes() { return this.listar('discentes'); }
    buscarDiscentePorId(id) { return this.buscarPorId('discentes', id); }
    criarDiscente(dados) { return this.criar('discentes', dados); }
    atualizarDiscente(id, dados) { return this.atualizar('discentes', id, dados); }
    deletarDiscente(id) { return this.deletar('discentes', id); }

    listarTurmas() { return this.listar('turmas'); }
    buscarTurmaPorId(id) { return this.buscarPorId('turmas', id); }
    criarTurma(dados) { return this.criar('turmas', dados); }
    atualizarTurma(id, dados) { return this.atualizar('turmas', id, dados); }
    deletarTurma(id) { return this.deletar('turmas', id); }

    listarMatriculas() { return this.listar('matriculas'); }
    buscarMatriculaPorId(id) { return this.buscarPorId('matriculas', id); }
    criarMatricula(dados) { return this.criar('matriculas', dados); }
    atualizarMatricula(id, dados) { return this.atualizar('matriculas', id, dados); }
    deletarMatricula(id) { return this.deletar('matriculas', id); }
}

module.exports = AcadADO;
