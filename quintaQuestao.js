//CODIGO COM ENTRADA DEFINIDA

let string = "Hello World"; // define uma string fixa
let invertedString = ""; // cria uma string vazia para armazenar a string invertida

for (let i = string.length - 1; i >= 0; i--) {
  invertedString += string[i]; // adiciona cada caractere da string original à string invertida, na ordem inversa
}

console.log("A string original é: " + string);
console.log("A string invertida é: " + invertedString);


//CÓDIGO COM ENTRADA DISPONÍVEL

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
//   readline.question('Digite uma palavra: ', (string) => {
//     let invertedString = "";
  
//     for (let i = string.length - 1; i >= 0; i--) {
//       invertedString += string[i];
//     }
  
//     console.log("A string original é: " + string);
//     console.log("A string invertida é: " + invertedString);
  
//     readline.close();
//   });
