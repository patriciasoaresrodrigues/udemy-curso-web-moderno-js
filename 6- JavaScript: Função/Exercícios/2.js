function classicaTriangulo(lado1, lado2, lado3) {
  if (lado1 && lado2 && lado3) {
    if (lado1 === lado2 && lado2 === lado3) {
      console.log('Triângulo Equilátero')
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
      console.log('Triângulo Isósceles')
    } else if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3) {
      console.log('Triângulo Escaleno')
    }
  } else { console.log('Valores inválidos!') }

}

classicaTriangulo(2, 2, 2)
classicaTriangulo(2, 2, 3)
classicaTriangulo(2, 3, 4)
classicaTriangulo(2, 3)
