// Variaveis são espaços alocado na memoria do computador para armazenar dados.

// Regras para nomear variáveis: não começar com números, caracteres especiais.

// var -> Variável, ela pode mudar de valor se atribuimos a ela.
// const -> É uma variável que não muda seu valor, nasceu com um valor e vai morrer com um valor
// let -> Segue a regra da variável, porém ela respeita o escopo de onde ela foi declarada.

const idade = 26

// No javascript não é necessário dizer o tipo de dado que a variável vai receber, pois o javascript é fracamente tipado.

console.log(idade) // Apos declarar, temos que usar a variável para podermos ler seu valor.

const nome = 'lucas'
const altura = 1.62
const programador = true

// Posso criar variável do tipo, número, caractere, bolean.
// Usa o simbolo de + para concatenar duas variáveis
console.log(nome + ' ' + idade + ' ' + altura + ' ' + programador)
