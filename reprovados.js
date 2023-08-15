// const alunos = ['Dalto Priscilo', 'Aline Moura', 'Jonathan Silva', 'Joana Laura'];
// const notas = [8.5, 4.6, 5, 9.2];

// //const alunosReprovados = notas < 6;

// const AlunosNotas = [alunos, notas];

// function exibirDadosAlunos(aluno) {
//     if(AlunosNotas[0].includes(aluno)) {
//         console.log(`Aluno ${aluno} está presente.`);

//         const i = AlunosNotas[0].indexOf(aluno);

//         const exibirNota = AlunosNotas[1][i];
//         console.log(`Nota ${exibirNota}`);

//         if(exibirNota < 6) {
//             console.log('O aluno está reprovado.');

//         } else {
//             console.log('Aprovado');
//         }

//     } else {
//         console.log('Não está presente.');
//     }
// }

// exibirDadosAlunos('Joana Laura');


// const nomes = ['Rene', 'Mary', 'Matteo'];
// const idades = [33, 34, 3];

// const juncaoNomesIdade = [nomes, idades];

// const maiorDeIdade = nomes.filter((nome, indice) => {
//     return idades[indice] < 18;
// });

// console.log(`O nome ${maiorDeIdade} tem menos de 18 anos`);

const nomes = ['Rene', 'Mary', 'Matteo'];
const idades = [33, 34, 3];

const juncaoNomesEIdades = [nomes, idades];

const maioridade = nomes.filter((nome, indice) => {
    if(idades[indice] < 18) {
            console.log(`${nome} é menor de idade.`);

    } else {
        console.log(`${nome} é maior de idade.`);
    }
});