const nums = [1,2,3,4,5]

let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado)

const soma10 = e =>  e + 10
const triplo = e => e * 3

console.log(nums.map(soma10))