const carrinho = [
    '{"nome": "borracha", "preco": 3.45}',
    '{"nome": "caderno", "preco": 10.45}',
    '{"nome": "Kit de Lapis", "preco": 5.75}',
    '{"nome": "Caneta", "preco": 2.19}'
]

//Retornar array apenas com o preço

const viraObj = json => JSON.parse(json)

const retornaPreco = produto => produto.preco

console.log(carrinho.map(viraObj).map(retornaPreco))


