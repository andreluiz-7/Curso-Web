Array.prototype.filter2 = function(callback){

    const newArray = []

    for(let i = 0; i < this.length;i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }

    return newArray
}

const produtos = [

    {nome: "Nootebook", preco: 2499, fragil: true},
    {nome: 'IpadPro', preco: 5499, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plastico', preco: 18.99, fragil: false},
    
]

const maior500 = produto => produto.preco >= 500

const isFragil = produto => produto.fragil

console.log(" ")
console.log(produtos.filter2(maior500).filter2(isFragil))

