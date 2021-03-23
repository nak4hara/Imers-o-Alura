var valorEmDolarTexto = prompt("Qual o valor em dolar que você quer converter?")

var valorEmDolar = parseFloat(valorEmDolarTexto)

var valorEmReal = valorEmDolar *5.50
var valorEmRealFixado = valorEmReal.toFixed(2)

alert(valorEmRealFixado)