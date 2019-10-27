const david = {
  nombre: 'David',
  apellido: 'Pruñonosa',
  edad: 36,
  peso: 82,
  diseñador: true,
  malavarista: false
}

const PESO_IDEAL_KG = 80

function pesoIdeal(persona){
  return persona.peso <= PESO_IDEAL_KG
}

function davidPesoIdeal(persona) {
  if(pesoIdeal(persona)) {
    console.log('peso ideal');
  } else {
    console.log('ojo, no estas en peso ideal slim fit')
  }
  console.log(`${persona.nombre} pesa hoy ${persona.peso} kilos` )
}
davidPesoIdeal(david)



let saludo = (nombre, apellido) => {
  console.log(saludo = 'Hola ' + nombre + ' ' + apellido)
}

saludo('david', 'pruñonosa')


let saludos = nombre => console.log(saludo = 'Hola ' + nombre )
saludos('david')



var cuadrado = function(numero) {
  return numero * numero;
}

cuadrado(2)
