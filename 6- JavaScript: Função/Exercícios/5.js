function formatarMoeda(valor) {
  valor = valor.toFixed(2).toString()
  console.log(`R$ ${valor.replace('.', ',')}`)
}

formatarMoeda(0.3000004)
