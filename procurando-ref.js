const nomes = ['Rene', 'Mary', 'Matteo','Livia', 'Carlos', 'Deise', 'Celia', 'Edmilson', 'Marta'];
const idades = [33, 33, 3, 1, 81, 80, 56, 57, 58];

//const uniao = nomes.concat(idades);
const listaNomesEIdades = [nomes, idades];

function exibirDadosFamilia(nome) {
    if(listaNomesEIdades[0].includes(nome)) {
        console.log(`O nome "${nome}" consta na lista.`)

        //const nomes = listaNomesEIdades[0]; Obs: essas duas linhas é uma forma de refatorar.
        //const idades = listaNomesEIdades[1];

        //a forma mais pratica e com menos linhas é abaixo;

        const [nomes, idades] = listaNomesEIdades;

        const indice = nomes.indexOf(nome);
        
        
        const exibirIdade = idades[indice];
        console.log(`${nome} tem ${exibirIdade} anos de idade.`);


    } else {
        console.log(`O nome ${nome} NÃO consta na lista.`)
    }
}

exibirDadosFamilia('Rene');
