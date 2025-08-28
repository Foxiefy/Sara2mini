// ...rotas de cursos...

// MATRIZES
app.get("/matrizes/:id", async (req, res) => {
    const id = req.params.id;
    const matriz = await AcadADO.buscarMatrizPorId(id);
    if (matriz) {
        res.json(matriz);
    } else {
        res.status(404).send("Matriz não encontrada");
    }
});
app.get("/matrizes", async (req, res) => {
    const matrizes = await AcadADO.listarMatrizes();
    res.json(matrizes);
});
app.post("/matrizes", async (req, res) => {
    const novaMatriz = req.body;
    const result = await AcadADO.criarMatriz(novaMatriz);
    res.status(201).json(result);
});
app.put("/matrizes/:id", async (req, res) => {
    const id = req.params.id;
    const matrizAtualizada = req.body;
    const result = await AcadADO.atualizarMatriz(id, matrizAtualizada);
    if (result) {
        res.json(result);
    } else {
        res.status(404).send("Matriz não encontrada");
    }
});
app.delete("/matrizes/:id", async (req, res) => {
    const id = req.params.id;
    const result = await AcadADO.deletarMatriz(id);
    if (result) {
        res.status(204).send();
    } else {
        res.status(404).send("Matriz não encontrada");
    }
});

// DISCIPLINAS
app.get("/disciplinas/:id", async (req, res) => {
    const id = req.params.id;
    const disciplina = await AcadADO.buscarDisciplinaPorId(id);
    if (disciplina) {
        res.json(disciplina);
    } else {
        res.status(404).send("Disciplina não encontrada");
    }
});
app.get("/disciplinas", async (req, res) => {
    const disciplinas = await AcadADO.listarDisciplinas();
    res.json(disciplinas);
});
app.post("/disciplinas", async (req, res) => {
    const novaDisciplina = req.body;
    const result = await AcadADO.criarDisciplina(novaDisciplina);
    res.status(201).json(result);
});
app.put("/disciplinas/:id", async (req, res) => {
    const id = req.params.id;
    const disciplinaAtualizada = req.body;
    const result = await AcadADO.atualizarDisciplina(id, disciplinaAtualizada);
    if (result) {
        res.json(result);
    } else {
        res.status(404).send("Disciplina não encontrada");
    }
});
app.delete("/disciplinas/:id", async (req, res) => {
    const id = req.params.id;
    const result = await AcadADO.deletarDisciplina(id);
    if (result) {
        res.status(204).send();
    } else {
        res.status(404).send("Disciplina não encontrada");
    }
});

// DISCENTES
app.get("/discentes/:id", async (req, res) => {
    const id = req.params.id;
    const discente = await AcadADO.buscarDiscentePorId(id);
    if (discente) {
        res.json(discente);
    } else {
        res.status(404).send("Discente não encontrado");
    }
});
app.get("/discentes", async (req, res) => {
    const discentes = await AcadADO.listarDiscentes();
    res.json(discentes);
});
app.post("/discentes", async (req, res) => {
    const novoDiscente = req.body;
    const result = await AcadADO.criarDiscente(novoDiscente);
    res.status(201).json(result);
});
app.put("/discentes/:id", async (req, res) => {
    const id = req.params.id;
    const discenteAtualizado = req.body;
    const result = await AcadADO.atualizarDiscente(id, discenteAtualizado);
    if (result) {
        res.json(result);
    } else {
        res.status(404).send("Discente não encontrado");
    }
});
app.delete("/discentes/:id", async (req, res) => {
    const id = req.params.id;
    const result = await AcadADO.deletarDiscente(id);
    if (result) {
        res.status(204).send();
    } else {
        res.status(404).send("Discente não encontrado");
    }
});

// TURMAS
app.get("/turmas/:id", async (req, res) => {
    const id = req.params.id;
    const turma = await AcadADO.buscarTurmaPorId(id);
    if (turma) {
        res.json(turma);
    } else {
        res.status(404).send("Turma não encontrada");
    }
});
app.get("/turmas", async (req, res) => {
    const turmas = await AcadADO.listarTurmas();
    res.json(turmas);
});
app.post("/turmas", async (req, res) => {
    const novaTurma = req.body;
    const result = await AcadADO.criarTurma(novaTurma);
    res.status(201).json(result);
});
app.put("/turmas/:id", async (req, res) => {
    const id = req.params.id;
    const turmaAtualizada = req.body;
    const result = await AcadADO.atualizarTurma(id, turmaAtualizada);
    if (result) {
        res.json(result);
    } else {
        res.status(404).send("Turma não encontrada");
    }
});
app.delete("/turmas/:id", async (req, res) => {
    const id = req.params.id;
    const result = await AcadADO.deletarTurma(id);
    if (result) {
        res.status(204).send();
    } else {
        res.status(404).send("Turma não encontrada");
    }
});

// MATRICULAS
app.get("/matriculas/:id", async (req, res) => {
    const id = req.params.id;
    const matricula = await AcadADO.buscarMatriculaPorId(id);
    if (matricula) {
        res.json(matricula);
    } else {
        res.status(404).send("Matrícula não encontrada");
    }
});
app.get("/matriculas", async (req, res) => {
    const matriculas = await AcadADO.listarMatriculas();
    res.json(matriculas);
});
app.post("/matriculas", async (req, res) => {
    const novaMatricula = req.body;
    const result = await AcadADO.criarMatricula(novaMatricula);
    res.status(201).json(result);
});
app.put("/matriculas/:id", async (req, res) => {
    const id = req.params.id;
    const matriculaAtualizada = req.body;
    const result = await AcadADO.atualizarMatricula(id, matriculaAtualizada);
    if (result) {
        res.json(result);
    } else {
        res.status(404).send("Matrícula não encontrada");
    }
});
app.delete("/matriculas/:id", async (req, res) => {
    const id = req.params.id;
    const result = await AcadADO.deletarMatricula(id);
    if (result) {
        res.status(204).send();
    } else {
        res.status(404).send("Matrícula não encontrada");
    }
});