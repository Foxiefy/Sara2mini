-- Configuração inicial
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE;
SET SQL_MODE='STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- =====================================================
-- DATABASE: sara2mini
-- =====================================================
CREATE SCHEMA IF NOT EXISTS sara2mini DEFAULT CHARSET=utf8;
USE sara2mini;

-- RecursosAcademicos
CREATE TABLE IF NOT EXISTS RecursosAcademicos (
  idRecurso INT NOT NULL AUTO_INCREMENT,
  tipo      VARCHAR(50)  NOT NULL,
  descricao VARCHAR(150) NOT NULL,
  PRIMARY KEY (idRecurso)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Horarios
CREATE TABLE IF NOT EXISTS Horarios (
  idHorarios INT NOT NULL,
  diaSemana  ENUM('SEG','TER','QUA','QUI','SEX','SAB') NOT NULL,
  horaInicio ENUM('7:30','9:15','11:00','14:00','15:45','17:30','19:00','20:30') NOT NULL,
  horaFim    ENUM('9:15','11:00','12:30','13:45','17:15','19:00','20:30','22:00') NOT NULL,
  PRIMARY KEY (idHorarios)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Alocacoes
CREATE TABLE IF NOT EXISTS Alocacoes (
  idAlocacoes INT NOT NULL AUTO_INCREMENT,
  idRecurso   INT NOT NULL,
  idHorarios  INT NOT NULL,
  `data`      DATE NOT NULL,
  PRIMARY KEY (idAlocacoes),
  KEY fk_Alocacoes_recurso_idx  (idRecurso),
  KEY fk_Alocacoes_horarios_idx (idHorarios),
  CONSTRAINT fk_Alocacoes_recurso
    FOREIGN KEY (idRecurso)  REFERENCES RecursosAcademicos (idRecurso)
      ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_Alocacoes_horarios
    FOREIGN KEY (idHorarios) REFERENCES Horarios (idHorarios)
      ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- =====================================================
-- DATABASE: acadMini
-- =====================================================
CREATE SCHEMA IF NOT EXISTS acadMini DEFAULT CHARSET=utf8;
USE acadMini;

-- Cursos
CREATE TABLE IF NOT EXISTS Cursos (
  idCurso INT NOT NULL AUTO_INCREMENT,
  nome    VARCHAR(100) NOT NULL,
  sigla   VARCHAR(10)  NOT NULL,
  PRIMARY KEY (idCurso),
  UNIQUE KEY sigla_UNIQUE (sigla)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Matrizes
CREATE TABLE IF NOT EXISTS Matrizes (
  idMatriz  INT NOT NULL AUTO_INCREMENT,
  idCurso   INT NOT NULL,
  anoInicio DATE NOT NULL,
  PRIMARY KEY (idMatriz),
  KEY fk_Matrizes_1_idx (idCurso),
  CONSTRAINT fk_Matrizes_1
    FOREIGN KEY (idCurso) REFERENCES Cursos (idCurso)
      ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Disciplinas
CREATE TABLE IF NOT EXISTS Disciplinas (
  idDisciplina INT NOT NULL AUTO_INCREMENT,
  nome         VARCHAR(100) NOT NULL,
  cargaHoraria INT NOT NULL,
  PRIMARY KEY (idDisciplina)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Turma
CREATE TABLE IF NOT EXISTS Turma (
  idTurma  INT NOT NULL AUTO_INCREMENT,
  codigo   VARCHAR(20) NOT NULL,
  semestre TINYINT NOT NULL,
  idCurso  INT NOT NULL,
  PRIMARY KEY (idTurma),
  UNIQUE KEY codigo_UNIQUE (codigo),
  KEY fk_Turma_Cursos_idx (idCurso),
  CONSTRAINT fk_Turma_Cursos
    FOREIGN KEY (idCurso) REFERENCES Cursos (idCurso)
      ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Discentes
CREATE TABLE IF NOT EXISTS Discentes (
  idDiscente INT NOT NULL AUTO_INCREMENT,
  nome       VARCHAR(100) NOT NULL,
  matricula  VARCHAR(20)  NOT NULL,
  idCurso    INT NULL,
  PRIMARY KEY (idDiscente),
  UNIQUE KEY matricula_UNIQUE (matricula),
  KEY fk_Discentes_Cursos_idx (idCurso),
  CONSTRAINT fk_Discentes_Cursos
    FOREIGN KEY (idCurso) REFERENCES Cursos (idCurso)
      ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Matriculas
CREATE TABLE IF NOT EXISTS Matriculas (
  idMatricula  INT NOT NULL AUTO_INCREMENT,
  idDiscente   INT NOT NULL,
  idTurma      INT NOT NULL,
  idDisciplina INT NOT NULL,
  PRIMARY KEY (idMatricula),
  KEY fk_Matriculas_disciplina_idx (idDisciplina),
  KEY fk_Matriculas_discente_idx (idDiscente),
  KEY fk_Matriculas_turma_idx (idTurma),
  CONSTRAINT fk_Matriculas_disciplina
    FOREIGN KEY (idDisciplina) REFERENCES Disciplinas (idDisciplina)
      ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_Matriculas_discente
    FOREIGN KEY (idDiscente) REFERENCES Discentes (idDiscente)
      ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_Matriculas_turma
    FOREIGN KEY (idTurma) REFERENCES Turma (idTurma)
      ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- =====================================================
-- DATABASE: arteMini
-- =====================================================
CREATE SCHEMA IF NOT EXISTS arteMini DEFAULT CHARSET=utf8;
USE arteMini;

-- Projetos
CREATE TABLE IF NOT EXISTS Projetos (
  idProjeto INT NOT NULL AUTO_INCREMENT,
  nome      VARCHAR(100) NOT NULL,
  descricao VARCHAR(150) NOT NULL,
  PRIMARY KEY (idProjeto)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Perfis
CREATE TABLE IF NOT EXISTS Perfis (
  idPerfil INT NOT NULL AUTO_INCREMENT,
  nome     VARCHAR(50) NOT NULL,
  PRIMARY KEY (idPerfil)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Usuarios
CREATE TABLE IF NOT EXISTS Usuarios (
  idUsuario INT NOT NULL AUTO_INCREMENT,
  nome      VARCHAR(100) NOT NULL,
  email     VARCHAR(100) NOT NULL,
  senha     VARCHAR(255) NOT NULL,
  idPerfil  INT NOT NULL,
  PRIMARY KEY (idUsuario),
  KEY fk_Usuarios_perfil_idx (idPerfil),
  CONSTRAINT fk_Usuarios_perfil
    FOREIGN KEY (idPerfil) REFERENCES Perfis (idPerfil)
      ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Modulos
CREATE TABLE IF NOT EXISTS Modulos (
  idModulo  INT NOT NULL AUTO_INCREMENT,
  idProjeto INT NOT NULL,
  nome      VARCHAR(100) NOT NULL,
  PRIMARY KEY (idModulo),
  KEY fk_Modulos_projeto_idx (idProjeto),
  CONSTRAINT fk_Modulos_projeto
    FOREIGN KEY (idProjeto) REFERENCES Projetos (idProjeto)
      ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Artefatos
CREATE TABLE IF NOT EXISTS Artefatos (
  idArtefato INT NOT NULL AUTO_INCREMENT,
  idModulo   INT NOT NULL,
  nome       VARCHAR(100) NOT NULL,
  tipo       VARCHAR(45) NOT NULL,
  PRIMARY KEY (idArtefato),
  KEY fk_Artefatos_modulo_idx (idModulo),
  CONSTRAINT fk_Artefatos_modulo
    FOREIGN KEY (idModulo) REFERENCES Modulos (idModulo)
      ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- =====================================================
-- Restaurando Configurações
-- =====================================================
SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

