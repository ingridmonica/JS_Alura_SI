const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

//criar função para calcular a média das 3 salas, facilitando o código
function calculaMedia(notasDaSala) {
  const somaDasNotas = notasDaSala.reduce((acc, nota) => acc + nota, 0);
  //temos um acumulador que o valor inicial se encontra no 2º parametro do reduce e atualizamos ao valor a cada iteração que está sendo feita na lista

  const media = somaDasNotas / notasDaSala.length;

  return media;
}

console.log(`A média da sala de JavaScript é ${calculaMedia(salaJS)}`);
console.log(`A média da sala de Java é ${calculaMedia(salaJava)}`);
console.log(`A média da sala de Python é ${calculaMedia(salaPython)}`);