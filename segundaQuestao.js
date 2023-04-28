//CODIGO COM ENTRADA DISPONÍVEL

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function fibonacci(numeroProcurado) {
    // Inicializa as variáveis que armazenam os valores da sequência
    let a = 0;
    let b = 1;
    let list = [];
  
    // Executa a sequência até encontrar um valor maior ou igual ao número procurado
    while (b <= numeroProcurado) {
      list.push(b);
      let c = a + b;
      a = b;
      b = c;
    }
  
    return list;
}

readline.question('Informe um número: ', (numeroProcurado) => {
    let sequencia = fibonacci(numeroProcurado);
  
    // Verifica se o número procurado foi encontrado e exibe mensagem correspondente
    if (sequencia.includes(parseInt(numeroProcurado))) {
        console.log(`O número ${numeroProcurado} pertence à sequência de Fibonacci.`);
    } else {
      console.log(`O número ${numeroProcurado} não pertence à sequência de Fibonacci.`);
    }
    
    console.log(`A sequência de Fibonacci até ${numeroProcurado} é: ${sequencia}`);
  
    readline.close();
  });
  
//CODIGO COM O NÚMERO DEFINIDO  
  
// // Define o número a ser procurado na sequência
//     const numeroProcurado = 21;
  
// // Inicializa as variáveis que armazenam os valores da sequência
//     let a = 0;
//     let b = 1;
//     let c;
  
// // Executa a sequência até encontrar um valor maior ou igual ao número procurado
//     while (b < numeroProcurado) {
//     c = a + b;
//     a = b;
//     b = c;
// }
  
//   // Verifica se o número procurado foi encontrado e exibe mensagem correspondente
//     if (b === numeroProcurado) {
//     console.log(`O número ${numeroProcurado} pertence à sequência de Fibonacci.`);
// } else {
//     console.log(`O número ${numeroProcurado} não pertence à sequência de Fibonacci.`);
// }
  
  

  
  
