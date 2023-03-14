const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// Usamos a classe Set() que seus elementos não podem se repetir
const nomesAtualizados = [...new Set(nomes)];

console.log(nomesAtualizados);