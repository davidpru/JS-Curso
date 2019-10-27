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

function imprimirNombreEnMayusculas({ nombre }) {
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(david)
imprimirNombreEnMayusculas(aitana)
imprimirNombreEnMayusculas({nombre : 'Pepito'})
