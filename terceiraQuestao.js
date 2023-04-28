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
  




