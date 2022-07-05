export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    this._saldo = saldoInicial
    this._cliente = cliente
    this._agencia = agencia
    if(this.constructor == Conta){
      console.log("Não deveria instaciar um ogjeto do tipo conta!")
    }
  }

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor
    }
  }

  get cliente() {
    return this._cliente
  }

  get saldo() {
    return this._saldo
  }

  sacar(valor) {
    let taxa = 1.1
    return this._sacar(valor, taxa)
  }

  _sacar(valor, taxa) {
    const valorSacado = taxa * valor
    if (this._saldo >= valor) {
      this._saldo -= valor
      return valorSacado
    }
    return 0
  }

  depositar(valor) {
    this._saldo += valor
  }

  tranferir(valor, conta) {
    const valorSacado = this.sacar(valor)
    conta.depositar(valorSacado)
  }
}
