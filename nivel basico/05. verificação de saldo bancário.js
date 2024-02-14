/*o programa terá um valor fixo, simulando o saldo da conta, 
assim como um nome fixo representativo para o titular da conta. 
A interação ocorrerá quando o usuário escolher uma das três opções:
[ 1 ] - Verifica o Saldo;
[ 2 ] - Realiza um Depósito;
[ 3 ] - Realizar Saque; */

function verificarSaldo(nomeTitular, saldoConta) {
    print(`Saldo da conta de ${nomeTitular}: R$${saldoConta.toFixed(2)}`);
  }
  
  // Função para realizar um depósito:
  function realizarDeposito(saldoConta, valor) {
    saldoConta += valor;
    print(`Deposito de R$${valor.toFixed(2)} realizado com sucesso. Saldo total: R$${saldoConta.toFixed(2)}`);
  }
  
  function realizarSaque(saldoConta, valor) {
    saldoConta -= valor;
    print(`Saque de R$${valor.toFixed(2)} realizado com sucesso. Saldo total: R$${saldoConta.toFixed(2)}`);
  }
  
  
  let saldoConta = 2000.0; 
  const nomeTitular = "Mariane"; 
  
  const opcao = parseInt(gets());
  
  if (opcao === 1) {
    verificarSaldo(nomeTitular, saldoConta);
  } else if (opcao === 2 ) {
    const valorDeposito = parseFloat(gets());
    realizarDeposito(saldoConta, valorDeposito);
  } else if (opcao === 3 ) {
    const valorSaque = parseFloat(gets());
    if (valorSaque>saldoConta) {
      print("Saldo insuficiente para realizar o saque.");
    } else{
      realizarSaque(saldoConta,valorSaque)
    }
  } else {
    print("Opcao invalida. Tente novamente.");
  }