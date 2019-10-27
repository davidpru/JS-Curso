var signo = prompt('¿Cual es tu signo?')

switch(signo) {
  case 'acuario':
    console.log('Es acuario')
  break
  case 'cancer':
    console.log('Es cancer')
  break
  case 'geminis'  :
  case 'géminis':
    console.log('Es géminis')
  break
  default:
    console.log('No existe')
  break
  // case '':
  //   console.log('Nada')
  // break
}

// if demasiados iff
// if (signo === 'acuario') {
//   console.log('Es acuario')
// } else if (signo === 'cancer') {
//   console.log('Es cancer')
// } else {
//   console.log('No es nada')
// }
