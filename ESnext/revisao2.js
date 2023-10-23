// arrow Function

const soma = (a,b) => a + b
console.log(soma(5,8))

// operador rest
function total(...numeros){
    let total = 0
    numeros.forEach(n => total+=n)
    return total
}

console.log(total(1,2,3,4,5))

