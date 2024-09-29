const fs = require("fs");

// 1. CallBacks

// Função assíncronas (ler um arquivo leva um tempo

/*fs.readFile('exercicios/aula07/arquivo.txt', (erro, conteudoDoArquivo) => {
  if (erro) {
    console.log("Ocorreu um erro a tentar ler o arquivo:", erro);
  } else {
    console.log(String(conteudoDoArquivo))
  }
});*/

/*console.log("Antes do setTimeout");

setTimeout(() => {
  console.log("Isso aqui vai ser executado após 2 segundos");
}, 2 * 1000);

console.log("DEPOIS do SetTimeout");*/

// 2. Promises (Promessas)

//console.log("ANTES da criação da promisse...");

function lerArquivoPromise() {
  return new Promise((resolve, reject) => {
    fs.readFile("exercicios/aula07/arquivo.txt", (erro, conteudoDoArquivo) => {
      if (erro) {
        reject("Ocorreu um erro a tentar ler o arquivo:", erro);
      } else {
        resolve(String(conteudoDoArquivo));
      }
    });
  });
}

/*lerArquivoPromise()
  .then((retornoDoResolveDaPromise) => { //semelhante ao IF
    console.log("Deu certo:", retornoDoResolveDaPromise);
  })
  .catch((erro) => { //Semelhante ao ELSE
    console.log("Deu ruim!:", erro);
  })
  .finally(() => {
    console.log(
      "Isso aqui vai ser executado, independente do sucesso ou fracasso da promessa, no final dela."
    );
  });*/

// 3. Async/await

async function leituraDeDados() {
  console.log("Isso é executado ANTES da promise ser resolvidade!");

  try {
    const dadosDoArquivoLido = await lerArquivoPromise(); //Espera a promessa ser resolvida para avançar no código

    console.log(dadosDoArquivoLido);
    console.log("Isso é executado DEPOIS da promise ser resolvidade!");
  } catch (err) {
    console.log(err);
    console.log("Isso aqui é executado depois da promise (com erro).");
  } finally {
    console.log("Dentro do finally!")
  }
}

leituraDeDados();
