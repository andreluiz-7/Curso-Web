const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono 

const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrona

fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo) 
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})
