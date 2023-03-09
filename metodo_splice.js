animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠')
animaisDoAquario.splice(3,2,'🐟')

console.log(animaisDoAquario)

/* 
    o primeiro slipe não remove nada (0) mas acrescenta o peixe colorido na posição 1 da lista
    
    o segundo remove o golfinho e o tubarão e acrescenta o peixe azul

    portanto temos:  ['🐋', '🐠', '🐙', '🐟' ]
*/