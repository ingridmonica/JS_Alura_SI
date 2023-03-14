const numeros = [43, 50, 65, 12];

const soma = numeros.reduce((acc, atual) => atual + acc, 0);

console.log(soma);

// 2º forma um pouco mais extensa para separar melhor as partes do código:

/* const soma = numeros.reduce(function (acc, atual) {
    return atual + acc
   }, 0)
-Vendo o código acima, percebemos melhor onde começa e termina cada um dos parâmetros do reduce(): o 1º uma função e o 2º um número (acumulador)    */


// 3º forma de escrever: função callback dentro do reduce

/* function operacaoNumerica(acc, atual) {
    return atual + acc
   }
   
   const soma = numeros.reduce(operacaoNumerica, 0)        

-O reduce() roda o loop no array “por baixo dos panos”, executando para cada elemento a instrução passada na função operacaoNumerica.   */

