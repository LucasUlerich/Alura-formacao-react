import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";
import {Conta} from "./Conta.js"
const cliente1 = new Cliente("Lucas", 11122233309);



const contaCorrenteLucas = new Conta(0, cliente1, 1001);
contaCorrenteLucas.depositar(500);
contaCorrenteLucas.sacar(100);

const contaPoupanca = new Conta(50, cliente1, 1001)

console.log(contaPoupanca)
console.log(contaCorrenteLucas);