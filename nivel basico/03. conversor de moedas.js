/*o seu programa deverá receber como entrada o valor necessário 
para a conversão, a moeda de origem e a moeda de destino. 
Em seguida, o valor deverá ser convertido e fornecer o resultado como saída.*/

const valorDinheiro = parseFloat(gets());
const moedaOrigem = gets();
const moedaDestino = gets();


// !isNaN é uma função embutida em JavaScript que verifica se o valor passado como argumento não é um número.
if (!isNaN(valorDinheiro)) {
// Definição fixa das taxas de câmbio para as moedas:
  const taxaCambioBRLtoUSD = 0.1875;
  const taxaCambioBRLtoEUR = 0.1520;
  const taxaCambioUSDtoBRL = 5.3333;
  const taxaCambioEURtoBRL = 6.5789;

  let valorConvertido;

  if(moedaOrigem === 'BRL'){
    if(moedaDestino === 'USD'){
      valorConvertido = valorDinheiro * taxaCambioBRLtoUSD;
    } else if( moedaDestino === 'EUR'){
      valorConvertido = valorDinheiro * taxaCambioBRLtoEUR;
    }
  } else if(moedaOrigem === 'USD'){
      valorConvertido = valorDinheiro * taxaCambioUSDtoBRL;
  } else if ( moedaOrigem === 'EUR'){
      valorConvertido = valorDinheiro * taxaCambioEURtoBRL;
  }

const valor = valorConvertido.toFixed(2);
print(`${valorDinheiro} ${moedaOrigem} equivalem a ${valor} ${moedaDestino}.`);

} 

