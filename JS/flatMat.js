const escola = [{

    nome: "Turma1",
    alunos: [{
        nome: 'andre',
        nota: 7.8
    }, {
        nome: 'Maria',
        nota: 9.9

    }]
},{
    nome: "Turma 2",
    alunos: [{
        nome: 'aroldo',
        nota: 6
    }, {
        nome: 'Duda',
        nota: 10

    }] 
}]

const getNota = a => a.nota
const notasTurma = turma => turma.alunos.map(getNota)


