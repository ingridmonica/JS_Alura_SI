animaisDoAquario = ['๐', '๐', '๐ฌ', '๐ฆ']

animaisDoAquario.splice(1,0,'๐ ')
animaisDoAquario.splice(3,2,'๐')

console.log(animaisDoAquario)

/* 
    o primeiro slipe nรฃo remove nada (0) mas acrescenta o peixe colorido na posiรงรฃo 1 da lista
    
    o segundo remove o golfinho e o tubarรฃo e acrescenta o peixe azul

    portanto temos:  ['๐', '๐ ', '๐', '๐' ]
*/