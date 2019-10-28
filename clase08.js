var david = {
  nombre: 'David',
  apellido: 'Pruñonosa',
  edad: 36
}
var aitana = {
  nombre: 'Aitana',
  apellido: 'Pruñonosa Belliure',
  edad: 1
}

function imprimirNombreEnMayusculas(persona) {
  // var nombre = persona.nombre
  var { nombre } = persona
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(david)
imprimirNombreEnMayusculas(aitana)


function cumpleanos(persona) {
  return {
    ...persona,
    edad: persona.edad+1
  }
}
