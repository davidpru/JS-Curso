var david = {
    nombre: 'David',
    apellido: 'Pruñonosa',
    altura: 1.80
}

var inma = {
    nombre: 'Inma',
    apellido: 'Belliure',
    altura: 1.70
}

var aitana = {
    nombre: 'Aitana',
    apellido: 'Pruñonosa',
    altura: 0.50
}

const esAlta = ({altura}) => altura > 1.00

var personas = [david, inma, aitana]
var personasAltas = personas.filter(esAlta)

const pasarAlturaACms = (persona) => ({
  ...persona,
  altura: persona.altura *= 100
})

var personasCms = personas.map(pasarAlturaACms)

// var acum = 0
//
// for (var i = 0; i < personas.length; i++) {
//   acum = acum + personas[i].cantidadDeLibros
// }

const reducer = (acum, { cantidadDeLibros }) => acum + persona.cantidadDeLibros

var totalDeLibros = persona.reduce(reducer, 0)

console.log(`En total todos tiene ${acum} libros`)
