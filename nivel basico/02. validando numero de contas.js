/*O programa solicitará ao usuário que insira um número de conta e 
verificará se ele atende aos critérios predefinidos de validação. 
Além disso, você pode adicionar a capacidade de informar ao usuário 
qual regra específica não foi cumprida caso a validação falhe. */

const num = gets();

const numArray = num.split('').map(Number);

if (numArray.length === 6){

  let sum = 0;
  for (let i = 0; i < 6; i++) {
    sum += numArray[i];
  }
  
  if (!(numArray[0] > 0)) {
    print('Numero de conta invalido: O primeiro digito deve ser maior que zero.');
  } else if (sum > 30) {
    print('Numero de conta invalido: A soma dos digitos e maior que 30.');
  } else {
    print('Numero de conta valido.');
  }

}