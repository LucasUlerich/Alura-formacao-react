// Imports
import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";
import {Conta} from "./Conta.js"

// Contas------------------------------------------------------------------------------------
const cliente1 = new Cliente("Lucas", 11122233309);
const contaCorrenteLucas = new ContaCorrente(0, cliente1, 1001);
const contaPoupanca = new Conta(50, cliente1, 1001)
//const conta = new Conta(0, cliente1 , 1001)

//Ações--------------------------------------------------------------------------------------
contaCorrenteLucas.depositar(500);
contaCorrenteLucas.sacar(100);


// Testes------------------------------------------------------------------------------------
//console.log(conta)

