
function ganhoPorHora(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes); 
  
    return salarioHora;
  }
  console.log(ganhoPorHora(3000,176))


  //Usando Math.round 
  function ganhoPorHora(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes); 
  
    return Math.round(salarioHora);
  
  }
  console.log(ganhoPorHora(3000,176))


  //Usando to.Fixed()
  function ganhoPorHora(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes); 
  
    const total = salarioHora.toFixed(2);
  
    return total;
  
  }
  console.log(ganhoPorHora(3000,176))


  //Formatando pra Real usando toLocaleString()             Tipos de objetos
  function ganhoPorHora(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes); 
  
    const formatado = salarioHora.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  
    return formatado;
  
  }
  console.log(ganhoPorHora(3000,176)) //'R$ 17,05'


  //OUTROS:
//Math.ceil() que retorna o maior número inteiro que é maior que o número passado, por exemplo Math.ceil(11.123), o valor fica 12.
//Math.floor() que retorna o menor número inteiro que é menor que o número passado, por exemplo Math.floor(11.789), o valor fica 11.
