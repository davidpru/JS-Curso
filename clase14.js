let contador = 0
const llueve = () => Math.random() < 0.25

//  Este código almenos se ejecuta una vez
do {
  contador++
} while (!llueve())

//  Bug vez veces
let veces = () => {
  if(contador === 1) {
    console.log(`Fui a ver si llovía ${contador} vez`)
  } else {
    console.log(`Fui a ver si llovía ${contador} veces`)
  }
}

veces()
