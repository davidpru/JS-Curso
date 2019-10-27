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

var juan = {
  nombre: 'Juan',
  apellido: 'Belliure',
  edad: 14
}

const MAYORIA_DE_EDAD = 18

// function esMayorDeEdad(persona) {
//   return persona.edad >= MAYORIA_DE_EDAD
// }

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(persona) {
  if(esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}

// function permitirAcceso(persona) {
//   if(!esMayorDeEdad(persona)) {
//     console.log('Acceso denegado')
//   } else {
//     console.log('Adelante, disfrute del dia')
//   }
// }

const esMenorDeEdad = ({ edad }) => !esMayorDeEdad({ edad })

const permitirAcceso = persona => {
  if(esMenorDeEdad(persona)) {
    console.log(`Àcceso denegado ${persona.nombre} no tiene 18`)
  } else {
    console.log(`Buenos días ${persona.nombre}, puede acceder`)
  }
}

permitirAcceso(david)
