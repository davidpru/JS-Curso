function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

const ALTURA_MINIMA = 1.8

Persona.prototype.saludar = () => {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = () => this.altura > ALTURA_MINIMA

// creao objeto con el prototipo persona
var david = new Persona('David', 'Pruñonosa', 1.90)
var erika = new Persona('Erika', 'Luna', 1.72)
var arturo = new Persona('Arturo', 'Martinez', 1.89)

// david.soyAlto()
// erika.soyAlto()
// arturo.soyAlto()
