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
    altura: 1.90
}

var personas = [david, inma, aitana]

for (var i = 0; i < personas.length; i++) {
  var persona = personas[i]
  console.log(`${persona.nombre} mide ${persona.altura}`)
}
