const notas = [7, 7, 8, 9];

// spread operator ou operador de espalhamento para clonar o array e acrescentar o valor 10
const novasNotas = [...notas, 10];

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);
