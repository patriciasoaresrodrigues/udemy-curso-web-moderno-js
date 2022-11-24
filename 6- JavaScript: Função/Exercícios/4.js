function divisao(dividendo, divisor) {
  resultado = Math.floor(dividendo / divisor)
  resto = dividendo % divisor
  return console.log(`resultado: ${resultado} resto: ${resto}`)
}

divisao(10, 2)
divisao(50, 3)
divisao(11, 4)
