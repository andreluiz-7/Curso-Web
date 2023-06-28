const produtos = [

    {nome: "Nootebook", preco: 2499, fragil: true},
    {nome: 'IpadPro', preco: 5499, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plastico', preco: 18.99, fragil: false},
    
]

const maior500 = produto => produto.preco >= 500

const isFragil = produto => produto.fragil

console.log(" ")
console.log(produtos.filter(maior500).filter(isFragil))

