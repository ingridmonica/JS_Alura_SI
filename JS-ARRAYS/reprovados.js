const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

//Poderia ser feito com forEach() e utilizar o splice mas vamos utilizar o filter

const reprovados = alunos.filter((aluno, indice) => {
    return medias[indice] < 7;
});

console.log(reprovados);
