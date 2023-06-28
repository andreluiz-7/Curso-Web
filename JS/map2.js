const carrinho = [
    '{"nome": "borracha", "preco": 3.45}',
    '{"nome": "caderno", "preco": 10.45}',
    '{"nome": "Kit de Lapis", "preco": 5.75}',
    '{"nome": "Caneta", "preco": 2.19}'
]

const viraObj = e => e = JSON.parse(e)

const retornaPreco = function (e){
    return e.preco
}

console.log(carrinho.map(viraObj).map(retornaPreco))
