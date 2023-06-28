const alunos = [

    { nome: "Joao", nota: 9.2, bolsista: false },
    { nome: "Ana", nota: 7, bolsista: false },
    { nome: "Adalberto", nota: 6, bolsista: false },
    { nome: "Andre", nota: 10, bolsista: false },
]
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    return acumulador + atual
}, 10)

console.log(resultado)

// reduce 2
//Desafio 1: Todos os alunos são Bolsistas?

const todosBolsista = (resultado, bolsista) => resultado && bolsista

if (alunos.map(a => a.bolsista).reduce(todosBolsista)) {
    console.log("Todos os alunos são bolsistas")
} else {
    console.log("Nem todos são bolsistas")
}


//Desafio 2: ALgum aluno é bolsista?
const temBolsista = (resultado, bolsista) => resultado || bolsista

if (alunos.map(a => a.bolsista).reduce(temBolsista)) {
    console.log("Tem aluno bolsista")
} else {
    console.log("Não tem nenhum bolsista")


}

Array.prototype.reduce2 = function (callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for (let i = indiceInicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}
const soma = (total, valor) => total + valor

const nums = [1, 2, 3, 4, 5, 6, 6, 7]
console.log(nums.reduce2(soma, 6))


