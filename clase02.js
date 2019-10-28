var nombre = 'David'
    apellido = 'Pruñonosa'

var nombreEnMayusculas = nombre.toUpperCase()
var nombreEnMayusculas = apellido.toLocaleLowerCase()

var primeraLetraDelNombre = nombre.charAt(0)
var cantidadLetrasNombre = nombre.length

// var nombreCompleto = nombre + ' ' + apellido
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

var str = nombre.length
var str = nombre.charAt(1) + nombre.charAt(3)
var str = nombre.substr(1, 4)

var str = nombre.slice(-1)

console.log(str)
