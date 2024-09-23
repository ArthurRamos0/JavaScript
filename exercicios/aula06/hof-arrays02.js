// Array.prototype.every() : Verificar se todos os elementos de um array seguem uma determinada 
//                           condição retornada pela função

const numeros = [40, 34, 67, 89, 23, 16, 10]

const pessoa = [
  {
    nome: "Pessoa 1",
    idade: 34,
    altura: 1.77,
  },
  {
    nome: "Pessoa 2",
    idade: 25,
    altura: 1.56,
  },
  {
    nome: "Pessoa 3",
    idade: 46,
    altura: 1.82,
  },
];

const todosPositivos = numeros.every((elemento) => elemento > 0)

console.log(todosPositivos)

const todosMaioresDeIdade = pessoa.every((pessoa)=> pessoa.idade >= 18)

console.log(todosMaioresDeIdade)

console.clear()

// Array.prototype.some(): Verificar sem algum elemento do array verifica ou torna verdadeira uma determinada 
//                         condição retornada pela função

const numeros2 = [-1, 3, 7, -3, 5]

const retorno = numeros2.some ((numero)=> numero > 0)

console.log(retorno)
console.clear();

// Array.prototype.map(): Chama a funçao que passada como parâmetro para cada elemento do array   
//                        devolve um novo array como resultado