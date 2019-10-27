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

console.log(personasAltas)
