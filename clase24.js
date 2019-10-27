function heredaDe(prototipoHijo, prototipoPadre) {
  var fn = function () {}
}

function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

const ALTURA_MINIMA = 1.8

Persona.prototype.saludar = function() {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function() {
  this.altura > ALTURA_MINIMA
}

function Desarrollador(nombre, apellido) {
  this.nombre = apellido
  this.apellido = apellido
}

Desarrollador.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y son desarrollador`)
}

// creao objeto con el prototipo persona
var david = new Persona('David', 'Pruñonosa', 1.90)
var erika = new Persona('Erika', 'Luna', 1.72)
var arturo = new Persona('Arturo', 'Martinez', 1.89)

david.soyAlto()
erika.soyAlto()
arturo.soyAlto()
