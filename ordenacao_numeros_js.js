//sort() usa por padrão a ordenação alfabética baseada na tabela Unicode

var lista = [10,1, 5, 9, 8, 12, 15];
console.log(lista.sort()) // [1, 10, 12, 15, 5, 8, 9])

//O sort recebe opcionalmente uma função de comparação que, dados dois valores, deve devolver um número inteiro:
function comparaNumeros(a,b) { 
    if (a == b) return 0; if (a < b) return -1; if (a > b) return 1; 
}
console.log(lista.sort(comparaNumeros)) // [1, 5, 8, 9, 10, 12, 15]

//Juntanto tudo isso com a sintaxe de arrow functions do ES6 pra escrever menos, podemos simplesmente fazer:
console.log(lista.sort((a, b) => a - b)) // [1, 5, 8, 9, 10, 12, 15]