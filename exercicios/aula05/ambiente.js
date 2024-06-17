//VARIAVEIS COMPOSTAS
/*
let num = [5, 8, 2, 9, 3]
num.push(7)
num.sort()

console.log (`Nosso vetor tem ${num.length} posições`)
*/

let valores = [8, 1, 7, 4, 2, 9]

console.log(valores)
/*
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
    
}
*/

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}