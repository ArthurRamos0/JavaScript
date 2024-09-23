//FUNÇOES DE ALTA ORDEM DE ARRAYS

// 1. Array.forEach() : Percorrer elementos

const numeros = [40, 34, 67, 89, 23, 10];

numeros.forEach((item, index, arrayCompleto) => {
  console.log(index, item, arrayCompleto);
});

console.clear();
// 2. Array.prototype.find() : útil para encontrar um elemento dentro do array

const encontrado = numeros.find((numero) => {
  return numero === 10;
});

console.log(encontrado);

console.clear();

// Array de pessoa

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

const pessoaEncontrada = pessoa.find(
  (pessoa) => pessoa.idade > 20 && pessoa.altura < 1.7
);

console.log(pessoaEncontrada);
console.clear();

// 3. Arrau.prototype.FindIndex() ; Muito parecido com o find(),
//                                  porem retorna o indice do elemento encontrado

const indiceDaPessoaEncontrada = pessoa.findIndex(
  (pessoa) => pessoa.idade > 20 && pessoa.altura < 1.7
);

console.log(indiceDaPessoaEncontrada);
