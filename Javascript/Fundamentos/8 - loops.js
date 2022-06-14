console.log('\n Trabalhando com Loops')

const listaDeDestinos = new Array('Salvador', 'São Paulo', 'Rio de janeiro')

const idadeComprador = 17
const estaAcompanhada = true
let temPassagemComprada = false
const destino = 'Salvador'

console.log('\n Destinos possiveis')
console.log(listaDeDestinos)

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true
let contador = 0
let destinoExiste = false

while (contador < 3) {
  if (listaDeDestinos[contador] == destino) {
    console.log('Destino existente!')
    destinoExiste = true
    break
  }
  contador++
}

console.log(`Destino existe? ${destinoExiste}`)

for(let cont = 0; cont < 3; cont++){
  if(listaDeDestinos[contador] == destino){
    destinoExiste = true
  }
}