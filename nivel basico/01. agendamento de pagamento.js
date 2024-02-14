/*O programa deverá solicitar ao usuário informações sobre a conta a ser paga, como o nome do beneficiário, 
o valor da conta a ser paga e a data de vencimento. 
Em seguida, o programa fornecerá uma mensagem de confirmação do agendamento com as informações fornecidas*/

let nomeBeneficiario;
let valorConta;
let dataVencimento;

// Neste bloco, temos as funções gets para ler os valores de entrada:
nomeBeneficiario = gets();
valorConta = parseFloat(gets());
dataVencimento = gets();

valorConta = Math.round(valorConta);
// TODO: Imprima a saída adequada utilizando o conceito de template strings:
print(`Pagamento Agendado! Valor: R$ ${valorConta}, vencimento ${dataVencimento}.`);