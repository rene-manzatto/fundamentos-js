const numeros = [100, 200, 300, 400, 500, 600];

numeros.push(700, 800, 900);

numeros.pop();

for (let indice = 0; indice < numeros.length; indice++) {
    console.log(numeros[indice]);
}