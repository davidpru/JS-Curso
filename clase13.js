var david = {
  nombre: 'David',
  apellido: 'Pruñonosa',
  edad: 36,
  peso: 75
}

console.log(`Al inicio del año ${david.nombre} pesaba ${david.peso}`)


// function aumentarDePeso(persona) {
//   return persona.peso +=20
// }

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO


for (var i = 1; i <= DIAS_DEL_ANO; i++) {
  var random = Math.random()
  if (random < 0.25) {
    aumentarDePeso(david)

  } else if (random < 0.5) {
    adelgazar(david)
  }
}

console.log(`Al final del año ${david.nombre} pesaba ${david.peso.toFixed(2)}kg`)
