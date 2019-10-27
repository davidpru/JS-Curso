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

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = david.peso - 3

while (david.peso > META) {
  debugger
  if (comeMucho()) {
    aumentarDePeso(david)
  }
  if (realizaDeporte()) {
    adelgazar(david)
  }
  dias += 1
}


console.log(`Pasaron ${dias} hasta que ${david.nombre} adelgazo 3kg`)
