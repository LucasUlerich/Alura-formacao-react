console.log('Trabalhando com listas')

// const salvador = `Salvador`
// const saoPaulo = `São Paulo`
// const rioDeJaneiro = `Rio de Janeiro`

// Array é uma lista com varios valores dentro dele.

const listaDeDestinos = new Array ('Salvador','São Paulo', 
 'Rio de janeiro')

console.log(listaDeDestinos)

listaDeDestinos.push('Curitiba') // Insere um novo item na lista
console.log(listaDeDestinos)
// listaDeDestinos.pop(1)
// console.log(listaDeDestinos)

listaDeDestinos.splice(1,1) // remove um iten da lista. o primeiro número é a possição do item, o segundo é até qual item remover.

console.log(listaDeDestinos)
console.log(listaDeDestinos[1])