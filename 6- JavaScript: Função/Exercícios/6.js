function calculaJurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
  let juros = 0
  for (i = 0; i < tempoAplicacao; i++) {
    juros += (capitalInicial / 100) * taxaJuros
  }
  let total = capitalInicial + juros
  return total
}

function calculaJurosComposto(capitalInicial, taxaJuros, tempoAplicacao) {
  let total = capitalInicial
  for (i = 0; i < tempoAplicacao; i++) {
    total += ((total / 100) * taxaJuros)
  }
  return total
}

console.log(calculaJurosSimples(100, 10, 2))
console.log(calculaJurosComposto(100, 10, 2))


// Outra forma de resolucão sem o FOR
function jurosSimples(capitalInicial, taxa, tempo) {
  return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos(capitalInicial, taxa, tempo) {
  return capitalInicial * (1 + taxa) ** tempo
}

console.log(jurosSimples(100, 10 / 100, 2))
console.log(jurosCompostos(100, 10 / 100, 2))
