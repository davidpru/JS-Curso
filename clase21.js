function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

const ALTURA_MINIMA = 1.8

Persona.prototype.saludar = function() {

  if(this.altura >= ALTURA_MINIMA) {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy alto`)
  } else {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y mido menos de ${ALTURA_MINIMA}m.`)
  }

}

// creao objeto con el prototipo persona
var david = new Persona('David', 'Pruñonosa', 1.9)
var erika = new Persona('Erika', 'Luna', 1.7)
var arturo = new Persona('Arturo', 'Martinez', 1.6)

david.saludar()
erika.saludar()
arturo.saludar()
