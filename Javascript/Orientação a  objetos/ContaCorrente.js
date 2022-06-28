import { Cliente } from './Cliente.js'

export class ContaCorrente {
  static numeroDeContas = 0
  agencia
  _cliente
  _Saldo = 0

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor
    }
  }

  get cliente() {
    return this._cliente
  }
  // O underline diz que é um atributo privado e que não é pra mexer
  _Saldo

  get saldo() {
    return this._saldo
  }

  constructor(agencia, cliente) {
    this.agencia = agencia
    this.cliente = cliente
    ContaCorrente.numeroDeContas += 1
  }

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

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor)
    conta.depositar(valorSacado)
  }
}
