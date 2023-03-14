const notas = [10, 9.5, 8, 7, 6];

const notasAtualizadas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1;
    //na linha acima utilizamos o operador ternário mas poderia serum if/else
  });
  
  console.log(notasAtualizadas);
