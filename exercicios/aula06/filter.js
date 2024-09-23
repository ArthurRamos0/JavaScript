// FILTER: Sempre retorna um array de tamanho igual ou inferior ao tamanho do array original

const valores = [39, 45, 32, 24, 4, 22, 2, 49, 23, 8];

const pares = valores.filter((valor) => valor % 2 === 0);

console.log(pares);

const impares = valores.filter((valor) => valor % 2 != 0);

console.log(impares);
console.clear();

// Exemplo 1: Crie um codigo que obtenha apenas os dados dos alunos que tem uma média superior a 85. Em Seguida, imprima os dados delas na tela.

const alunos = [
  { nome: "Quincy", media: 96 },
  { nome: "Jason", media: 84 },
  { nome: "Alexis", media: 100 },
  { nome: "Sam", media: 65 },
  { nome: "Katie", media: 90 },
];

const mediaSuperiorA85 = alunos.filter((aluno) => aluno.media > 85);
console.log(mediaSuperiorA85);
console.clear();

// Exemplo 2: Crie um script para filtrar apenas pelos produtos que custam menos de R$ 10,00 e não são bebidas:

const produtos = [
  { nome: "Suco de laranja", preco: 7.5, tipo: "Bebida" },
  { nome: "Batata frita ", preco: 10.5, tipo: "Comida" },
  { nome: "Pizza", preco: 12.49, tipo: "Comida" },
  { nome: "Chocolate", preco: 1.5, tipo: "Comida" },
  { nome: "Pastel", preco: 4.5, tipo: "Comida" },
  { nome: "Coca", preco: 6.99, tipo: "Bebida" },
];

const produtosMenosDe10NaoBebidas = produtos.filter(
  (produto) => produto.preco < 10 && produto.tipo !== "Bebida"
);

console.log(produtosMenosDe10NaoBebidas);
