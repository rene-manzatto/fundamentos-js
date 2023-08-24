// const numeros = [2, 5, 7, 8, 9];

// const novosNumeros = numeros;

// novosNumeros.push(10);

// console.log(`Os números originais são ${numeros}.`);
// console.log(`Os novos números são ${novosNumeros}.`);


// A outra forma de escrever essa expressão, sem acrescentar o novo número no array original é:

const numeros = [2, 5, 7, 8, 9];

const novosNumeros = [5, ...numeros, 10];

// const novosNumeros = [...numeros]

// novosNumeros.push(10);

console.log(`Os números originais são ${numeros}.`);
console.log(`Os novos números são ${novosNumeros}.`);