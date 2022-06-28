// Import das Classes------------------------------------------------------------------------
import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

// Clientes ---------------------------------------------------------------------------------
const cliente1 = new Cliente("Lucas", 15631757956, 14523687 )

const cliente2 = new Cliente("Adriene", 98765214732, 36521487)


//Contas Correntes --------------------------------------------------------------------------

const contaCorrenteLucas = new ContaCorrente(1001, cliente1)


const contaCorrenteAdriene = new ContaCorrente(1002, cliente2)


// //Testes ------------------------------------------------------------------------------------
let valor = 200
contaCorrenteLucas.depositar(500)
contaCorrenteLucas.transferir(valor, contaCorrenteAdriene)

console.log(cliente1)
console.log(cliente2)
console.log(ContaCorrente.numeroDeContas)
