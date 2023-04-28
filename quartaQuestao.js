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




