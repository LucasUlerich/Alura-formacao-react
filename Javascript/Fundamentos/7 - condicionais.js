console.log('Trabalhando com condicionais')

const listaDeDestinos = new Array('Salvador', 'São Paulo', 'Rio de janeiro')
console.log('Destinos possiveis')
console.log(listaDeDestinos)

const idadeComprador = 17
const estaAcompanhada = true

// if (idadeComprador >= 18) {
//   console.log('Você pode comprar a passagem')
//   listaDeDestinos.splice(1, 1)
// } else if (estaAcompanhada) {
//   console.log('Comprador esta acompanhado')
//   listaDeDestinos.splice(1, 1)
// } else {
//   console.log('Volte acompanhado com um maior de idade!')
// }


if (idadeComprador >= 18 || estaAcompanhada == true){
  console.log('Boa viagem!')
  listaDeDestinos.splice(1, 1)
}else {
  console.log('Não pode comprar, menos de idade!')
}
console.log(listaDeDestinos)

