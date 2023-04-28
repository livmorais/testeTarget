<h1 align="center">Teste da Target Sistemas</h1>
<h2 align="center">Repositório feito para as respostas do teste.</h2> 

### 1) Observe o trecho de código abaixo:

  int INDICE = 13, SOMA = 0, K = 0;

  enquanto K < INDICE faça

  {

  K = K + 1;

  SOMA = SOMA + K;

  }

  imprimir(SOMA);



  Ao final do processamento, qual será o valor da variável SOMA?

RESPOSTA: 91

public class primeiraQuestao {
  public static void main(String[] args) {
    int INDICE = 13, SOMA = 0, K = 0;
    while (K < INDICE) {
      K = K + 1;
      SOMA = SOMA + K;
    }
    System.out.println(SOMA);
  }
}


### 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

    RESPOSTA:
    - Código com o número pre definido: 
    // Define o número a ser procurado na sequência
    const numeroProcurado = 21;

    // Inicializa as variáveis que armazenam os valores da sequência
    let a = 0;
    let b = 1;
    let c;

    // Executa a sequência até encontrar um valor maior ou igual ao número procurado
    while (b < numeroProcurado) {
        c = a + b;
        a = b;
        b = c;
    }

    // Verifica se o número procurado foi encontrado e exibe mensagem correspondente
    if (b === numeroProcurado) {
        console.log(`O número ${numeroProcurado} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${numeroProcurado} não pertence à sequência de Fibonacci.`);
    }

    - Código com entrada disponível: 

    
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



### 3) Descubra a lógica e complete o próximo elemento: a) 1, 3, 5, 7, ___ b) 2, 4, 8, 16, 32, 64, ____ c) 0, 1, 4, 9, 16, 25, 36, ____ d) 4, 16, 36, 64, ____ e) 1, 1, 2, 3, 5, 8, ____ f) 2,10, 12, 16, 17, 18, 19, ____

RESPOSTA:
a) 9.
b) 128.
c) 49.
d) 100.
e) 13.
f) 200.

- Código que fornece as respostas: 
// Sequência a) 1, 3, 5, 7, ...
let a = [1, 3, 5, 7];
let proximoA = a[a.length - 1] + 2;
console.log(proximoA); // saída: 9

// Sequência b) 2, 4, 8, 16, 32, 64, ...
let b = [2, 4, 8, 16, 32, 64];
let proximoB = b[b.length - 1] * 2;
console.log(proximoB); // saída: 128

// Sequência c) 0, 1, 4, 9, 16, 25, 36, ...
let c = [0, 1, 4, 9, 16, 25, 36];
let proximoC = (c.length) ** 2;
console.log(proximoC); // saída: 49

// Sequência d) 4, 16, 36, 64, ...
let d = [4, 16, 36, 64];
let proximoD = Math.pow(10, 2); // ou 10 ** 2
console.log(proximoD); // saída: 100

// Sequência e) 1, 1, 2, 3, 5, 8, ...
let e = [1, 1, 2, 3, 5, 8];
let proximoE = e[e.length - 1] + e[e.length - 2];
console.log(proximoE); // saída: 13

// Sequência f) 2,10, 12, 16, 17, 18, 19, ...
function numerosComD() {
    let numerosDecimais = {
      "Dois": 2,
      "Dez": 10,
      "Doze": 12,
      "Dezesseis": 16,
      "Dezessete": 17,
      "Dezoito": 18,
      "Dezenove": 19,
      "Duzentos": 200
    };
    
    let numerosComD = null;
    
    for(let numero in numerosDecimais) {
      if(numero.charAt(0) === "D") {
        numerosComD = numerosDecimais[numero];
      }
    }
    
    return numerosComD;
  }
  
  console.log(numerosComD()); //saída: 200


### 4)Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca em direção a Ribeirão Preto a uma velocidade constante de 80 km/h. Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?


IMPORTANTE:

a) Considerar a distância de 100km entre a cidade de Ribeirão Preto <-> Franca.

b) Considerar 2 pedágios como obstáculo e que o caminhão leva 5 minutos a mais para passar em cada um deles e o carro possui tag de pedágio (Sem Parar)

c) Explique como chegou no resultado.

RESPOSTA: Ambos estão na mesma distância. 

- Código com a explicando o resultado:

// distância entre Ribeirão Preto e Franca
const distanciaTotal = 100;

// velocidade do carro e do caminhão, em km/h
const velocidadeCarro = 110;
const velocidadeCaminhao = 80;

// tempo extra que o caminhão leva nos pedágios, em minutos
const tempoExtraPedagio = 10;

// distância percorrida pelo caminhão até o ponto de encontro, em km
const distanciaCaminhao = (distanciaTotal / 2) - ((tempoExtraPedagio / 60) * velocidadeCaminhao);

// distância percorrida pelo carro até o ponto de encontro, em km
const distanciaCarro = distanciaTotal - distanciaCaminhao;

// distância de cada veículo até Ribeirão Preto, em km
const distanciaDoCarroDeRP = distanciaCarro;
const distanciaDoCaminhaoDeRP = distanciaTotal - distanciaCaminhao;

console.log("Distância(carro e caminhão) de Ribeirão Preto: ", distanciaDoCarroDeRP, distanciaDoCaminhaoDeRP)
// verificação de qual veículo está mais próximo de Ribeirão Preto
if (distanciaDoCarroDeRP < distanciaDoCaminhaoDeRP) {
  console.log("O carro está mais próximo de Ribeirão Preto.");
} else if (distanciaDoCaminhaoDeRP < distanciaDoCarroDeRP) {
  console.log("O caminhão está mais próximo de Ribeirão Preto.");
} else {
  console.log("O carro e o caminhão estão à mesma distância de Ribeirão Preto.");
}



### 5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;

RESPOSTA: 
- Código com palavra pre definida:

let string = "Hello World"; // define uma string fixa
let invertedString = ""; // cria uma string vazia para armazenar a string invertida

for (let i = string.length - 1; i >= 0; i--) {
  invertedString += string[i]; // adiciona cada caractere da string original à string invertida, na ordem inversa
}

console.log("A string original é: " + string);
console.log("A string invertida é: " + invertedString);

- Código com estrada disponível: 

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite uma palavra: ', (string) => {
    let invertedString = "";
  
    for (let i = string.length - 1; i >= 0; i--) {
      invertedString += string[i];
    }
  
    console.log("A string original é: " + string);
    console.log("A string invertida é: " + invertedString);
  
    readline.close();
  });



