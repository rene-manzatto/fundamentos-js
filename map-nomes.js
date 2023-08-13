// Nesse exemplo vamos pegar nomes com letras maísculas e mínusculas misturados e corrigir com a function .toUpperCase

const nomes = ['Rene manzatto', 'mary Góes', 'MATTEO manzatto'];

// const nomesAtualizados = nomes.map((nome) => {
//     return nome.toUpperCase();
// });

// tem outra forma de escrever a função acima, de forma mais simplificada. Abaixo:

const nomesAtualizados = nomes.map((nome) => nome.toUpperCase());

console.log(nomesAtualizados);