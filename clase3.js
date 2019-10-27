var edad = 36
    // edad = edad + 1
    edad += 1
    peso = 75
    // peso = peso - 2
    peso -= 2

    sandwich = 1
    peso += sandwich
    jugarAlFutbol = 3
    peso -= jugarAlFutbol

    precioDeVino = 200.3
    total = precioDeVino * 100 * 3 / 100
    total = Math.round(precioDeVino * 100 * 3) / 100
    totalStr = total.toFixed(3)
    total2 = parseFloat(totalStr)

    pizza = 8
    persona = 2
    cantidadPorPersona = pizza / persona

console.log(cantidadPorPersona)
