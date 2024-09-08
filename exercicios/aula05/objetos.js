// Objects Literal

const array = ["Arthur", 22, 1.65, true];

const pessoa = {
  nome: "Arthur",
  idade: 22,
  altura: 1.65,
  ehProgramador: true,
  hobbies: ["jogar", "academia", "dormir"],
  funcao: () => {
    console.log("Opa");
  },
};

console.log(pessoa);

console.log(pessoa.nome);
console.log(pessoa.hobbies);
console.log(pessoa["idade"]);

pessoa.profissao = "Dev";

pessoa.nome = "Arthur Ramos";

console.log(pessoa);

delete pessoa.altura;

console.log(pessoa);
console.clear();

pessoa.funcao();
