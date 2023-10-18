const moduloA = require('../../moduloA')

console.log(require('saudacao').ola)
console.log(moduloA.ola)

const http = require('htpp')
http.createServer((req, res) =>{
    res.write('Bom dia')
    res.end()
}),listen(8080)
