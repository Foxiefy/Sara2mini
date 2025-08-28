const ConexaoBD = require('../models/ConexaoBD');
const { QueryTypes } = require('sequelize');

//cursos, matrizes, disciplinas, discentes, turmas, matriculas,

class AcadADO {
    constructor() {
        this.con = ConexaoBD.connect(); // Usa a conexão do ConexaoBD
    }

    // CURSOS
    async listarCursos() {
        const [rows] = await this.con.query("SELECT * FROM cursos", { type: QueryTypes.SELECT });
        return rows;
    }
    async buscarCursosPorId(id) {
        const [row] = await this.con.query("SELECT * FROM cursos WHERE id = ?", {
            replacements: [id],
            type: QueryTypes.SELECT
        });
        return row;
    }
    async criarCurso(curso) {
        const [result] = await this.con.query("INSERT INTO cursos (nome, carga_horaria) VALUES (?, ?)", {
            replacements: [curso.nome, curso.carga_horaria],
            type: QueryTypes.INSERT
        });
        return result;
    }
    async atualizarCurso(id, curso) {
        const [result] = await this.con.query("UPDATE cursos SET nome = ?, carga_horaria = ? WHERE id = ?", {
            replacements: [curso.nome, curso.carga_horaria, id],
            type: QueryTypes.UPDATE
        });
        return result;
    }
    async deletarCurso(id) {
        const [result] = await this.con.query("DELETE FROM cursos WHERE id = ?", {
            replacements: [id],
            type: QueryTypes.DELETE
        });
        return result;
    }

    // MATRIZES
    async listarMatrizes() {
        const [rows] = await this.con.query("SELECT * FROM matrizes", { type: QueryTypes.SELECT });
        return rows;
    }
    async buscarMatrizPorId(id) {
        const [row] = await this.con.query("SELECT * FROM matrizes WHERE id = ?", {
            replacements: [id],
            type: QueryTypes.SELECT
        });
        return row;
    }
    async criarMatriz(matriz) {
        const [result] = await this.con.query("INSERT INTO matrizes (nome) VALUES (?)", {
            replacements: [matriz.nome],
            type: QueryTypes.INSERT
        });
        return result;
    }
    async atualizarMatriz(id, matriz) {
        const [result] = await this.con.query("UPDATE matrizes SET nome = ? WHERE id = ?", {
            replacements: [matriz.nome, id],
            type: QueryTypes.UPDATE
        });
        return result;
    }
    async deletarMatriz(id) {
        const [result] = await this.con.query("DELETE FROM matrizes WHERE id = ?", {
            replacements: [id],
            type: QueryTypes.DELETE
        });
        return result;
    }

    // DISCIPLINAS
    async listarDisciplinas() {
        const [rows] = await this.con.query("SELECT * FROM disciplinas", { type: QueryTypes.SELECT });
        return rows;
    }
    async buscarDisciplinaPorId(id) {
        const [row] = await this.con.query("SELECT * FROM disciplinas WHERE id = ?", {
            replacements: [id],
            type: QueryTypes.SELECT
        });
        return row;
    }
    async criarDisciplina(disciplina) {
        const [result] = await this.con.query("INSERT INTO disciplinas (nome, carga_horaria) VALUES (?, ?)", {
            replacements: [disciplina.nome, disciplina.carga_horaria],
            type: QueryTypes.INSERT
        });
        return result;
    }
    async atualizarDisciplina(id, disciplina) {
        const [result] = await this.con.query("UPDATE disciplinas SET nome = ?, carga_horaria = ? WHERE id = ?", {
            replacements: [disciplina.nome, disciplina.carga_horaria, id],
            type: QueryTypes.UPDATE
        });
        return result;
    }
    async deletarDisciplina(id) {
        const [result] = await this.con.query("DELETE FROM disciplinas WHERE id = ?", {
            replacements: [id],
            type: QueryTypes.DELETE
        });
        return result;
    }

    // DISCENTES
    async listarDiscentes() {
        const [rows] = await this.con.query("SELECT * FROM discentes", { type: QueryTypes.SELECT });
        return rows;
    }
    async buscarDiscentePorId(id) {
        const [row] = await this.con.query("SELECT * FROM discentes WHERE id = ?", {
            replacements: [id],
            type: QueryTypes.SELECT
        });
        return row;
    }
    async criarDiscente(discente) {
        const [result] = await this.con.query("INSERT INTO discentes (nome, matricula) VALUES (?, ?)", {
            replacements: [discente.nome, discente.matricula],
            type: QueryTypes.INSERT
        });
        return result;
    }
    async atualizarDiscente(id, discente) {
        const [result] = await this.con.query("UPDATE discentes SET nome = ?, matricula = ? WHERE id = ?", {
            replacements: [discente.nome, discente.matricula, id],
            type: QueryTypes.UPDATE
        });
        return result;
    }
    async deletarDiscente(id) {
        const [result] = await this.con.query("DELETE FROM discentes WHERE id = ?", {
            replacements: [id],
            type: QueryTypes.DELETE
        });
        return result;
    }

    // TURMAS
    async listarTurmas() {
        const [rows] = await this.con.query("SELECT * FROM turmas", { type: QueryTypes.SELECT });
        return rows;
    }
    async buscarTurmaPorId(id) {
        const [row] = await this.con.query("SELECT * FROM turmas WHERE id = ?", {
            replacements: [id],
            type: QueryTypes.SELECT
        });
        return row;
    }
    async criarTurma(turma) {
        const [result] = await this.con.query("INSERT INTO turmas (nome, ano) VALUES (?, ?)", {
            replacements: [turma.nome, turma.ano],
            type: QueryTypes.INSERT
        });
        return result;
    }
    async atualizarTurma(id, turma) {
        const [result] = await this.con.query("UPDATE turmas SET nome = ?, ano = ? WHERE id = ?", {
            replacements: [turma.nome, turma.ano, id],
            type: QueryTypes.UPDATE
        });
        return result;
    }
    async deletarTurma(id) {
        const [result] = await this.con.query("DELETE FROM turmas WHERE id = ?", {
            replacements: [id],
            type: QueryTypes.DELETE
        });
        return result;
    }

    // MATRICULAS
    async listarMatriculas() {
        const [rows] = await this.con.query("SELECT * FROM matriculas", { type: QueryTypes.SELECT });
        return rows;
    }
    async buscarMatriculaPorId(id) {
        const [row] = await this.con.query("SELECT * FROM matriculas WHERE id = ?", {
            replacements: [id],
            type: QueryTypes.SELECT
        });
        return row;
    }
    async criarMatricula(matricula) {
        const [result] = await this.con.query("INSERT INTO matriculas (id_discente, id_turma) VALUES (?, ?)", {
            replacements: [matricula.id_discente, matricula.id_turma],
            type: QueryTypes.INSERT
        });
        return result;
    }
    async atualizarMatricula(id, matricula) {
        const [result] = await this.con.query("UPDATE matriculas SET id_discente = ?, id_turma = ? WHERE id = ?", {
            replacements: [matricula.id_discente, matricula.id_turma, id],
            type: QueryTypes.UPDATE
        });
        return result;
    }
    async deletarMatricula(id) {
        const [result] = await this.con.query("DELETE FROM matriculas WHERE id = ?", {
            replacements: [id],
            type: QueryTypes.DELETE
        });
        return result;
    }
}

module.exports = AcadADO;
