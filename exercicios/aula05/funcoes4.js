// Definição de função
function saudacao(nomeDoEstudante, curso = "Front-end em react") {
  //Template string || template literals

  return `Olá, ${nomeDoEstudante}! Seja bem vindo ao curso de ${curso}!`;
}
const mensagemDeSaudacao = saudacao("Arthur"); //chamada da função saudacao

console.log(mensagemDeSaudacao);

function somar(numero1, numero2) {
  return numero1 + numero2;
}

console.clear();

// Exemplo 2

const resultado = somar(2, 3);

console.log(resultado);
console.log(resultado / 10);

console.clear();

//-------------------------------------------
// Funções anonimas

const dobroDoNumero = function (numero) {
  return numero * 2;
};
const dobro = dobroDoNumero(2);
console.log(dobro);

console.clear();
//------------------------
// Arrow Function: Função seta

const subtrair = (numero1, numero2) => {
  return numero1 - numero2;
};

const multiplicar = (numero1, numero2) => numero1 * numero2; // Usada apenas em funçoes simples de uma linha
