
/* desenvolva uma solução algorítmica para o cálculo de juros simples 
em uma corporação bancária, onde, o programa deve solicitar como entrada 
o capital inicial, a taxa de juros e o período de tempo em meses. 
Em seguida, deverá ser retornado o montante final a ser pago, 
incluindo os juros, e fornecer o resultado. */

const capitalInicial = parseFloat(gets());
const taxaJuros = parseFloat(gets());
const tempoMeses = parseInt(gets());

//!isNaN é uma função embutida em JavaScript que verifica se o valor passado como argumento não é um número.
if (!isNaN(capitalInicial) && !isNaN(taxaJuros) && !isNaN(tempoMeses) && tempoMeses > 0) {

  const jurosSimples = (capitalInicial * taxaJuros * tempoMeses) / 100;
  const montanteFinal = capitalInicial + jurosSimples;
  const capital= capitalInicial.toFixed(2);
  const montante= montanteFinal.toFixed(2);


  print(`Montante em ${tempoMeses} meses, com R$ ${capital} iniciais, ${taxaJuros}% juros, e: R$ ${montante}.`);
} else {
  print('Por favor, insira valores validos e um periodo de tempo adequado.');
}