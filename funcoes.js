function imprimeNomeIdade (nome, idade){
    console.log("Chamamos a função com os parâmetros/argumentos escolhidos e: ")
    return `Meu nome é ${nome}, e minha idade é ${idade}`
}

console.log(imprimeNomeIdade("Ingrid",18))

//o nome da função é excluivo da função mas os parâmetros podemos escolher e repetir
function soma(nmr1, nmr2) {
    return nmr1 + nmr2;
}

// Podemos definir um valor padrão pra um parâmetro "nmr1 = 1";
//neste caso se esquecermos um argumento este terá o valor padrão passado
function multiplica (nmr1 = 1, nmr2 = 1) {
    return nmr1 * nmr2;
}

console.log(multiplica(soma(5,4)))
