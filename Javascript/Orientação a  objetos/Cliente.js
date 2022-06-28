// Toda vez que criamos um nome de um arquivo com letras maiusculas, quer dizer que eu estou criando uma classe
//-------------------------------------------------------------------------------------------
export class Cliente {
  Nome
  _CPF
  _RG

  get cpf(){
    return this._CPF
  }

  get rg(){
    return this.rg
  }

  constructor(nome, cpf, rg){
    this.Nome = nome
    this._CPF = cpf
   this._RG = rg
  }
}