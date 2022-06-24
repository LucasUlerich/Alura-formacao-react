//Declaração de Classes
class Cliente {
  Nome
  CPF
  RG
}

class ContaCorrente {
  Agencia
  _Saldo
  sacar(valor) {
    if (this._Saldo >= valor) {
      this._Saldo -= valor
      return valor
    }
  }

  depositar(valor) {
    if (valor <= 0) {
      return 
    }
    this._Saldo += valor
  }
}

//-------------------------------------------------------------------------------------------

// Clientes
const cliente1 = new Cliente()
cliente1.Nome = 'Adriene'
cliente1.CPF = 15631757956
cliente1.RG = 14523687

const cliente2 = new Cliente()
cliente2.Nome = 'Lucas'
cliente2.CPF = 98765214732
cliente2.rg = 36521487

//-------------------------------------------------------------------------------------------

// Contas correntes
const contaCorrenteLucas = new ContaCorrente()
contaCorrenteLucas._Saldo = 0
contaCorrenteLucas.Agencia = 1001

const contaCorrenteAdriene = new ContaCorrente()
contaCorrenteAdriene._Saldo = 0
contaCorrenteAdriene.Agencia = 1001

//-------------------------------------------------------------------------------------------

contaCorrenteLucas.depositar(200)
console.log(contaCorrenteLucas._Saldo)

const valorSacado = contaCorrenteLucas.sacar(50)

console.log(valorSacado)
console.log(contaCorrenteLucas)

