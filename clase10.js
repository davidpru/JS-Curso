var david = {
  nombre: 'David',
  apellido: 'Pruñonosa',
  edad: 36,
  ingeniero: false,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false,
  drone: true
}

// function imprimirProfesiones(persona) {
//   console.log(`${persona.nombre} es:`)
//
//   if (persona.ingeniero) {
//     console.log('Ingeniero')
//   } else {
//     console.log('No es ingeniero')
//   }
//   if (persona.cocinero) {
//     console.log('Cocinero')
//   }
//   if (persona.dj) {
//     console.log('DJ')
//   }
//   if (persona.cantante) {
//     console.log('Cantante')
//   }
//   if (persona.guitarrista) {
//     console.log('Guitarrista')
//   }
//   if (persona.drone) {
//     console.log('Vuela drones')
//   }
//
// }
// imprimirProfesiones(david)

// imprimir si és mayor de edad

// function imprimirSiEsMayorDeEdad(persona) {
//   // David es mayor de edad
//   // david es menor de edad
//   if(persona.edad >= 18) {
//     console.log(`${persona.nombre} Es mayor de edad`)
//   } else {
//     console.log(`${persona.nombre} Es menor de edad`)
//   }
// }
// imprimirSiEsMayorDeEdad(david)

var juan = {
  nombre: 'Juan',
  apellido: 'Belliure',
  edad: 14
}

const MAYORIA_DE_EDAD = 18;

function esMayorDeEdad(persona) {
  return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona) {
  if(esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}
imprimirSiEsMayorDeEdad(juan)
