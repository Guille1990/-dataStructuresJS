'use strict'

function fibonacciMeoizacion (i, x) {
  x = x || {}
  if (x[i]) return x[i]
  if (i <= 1) return 1

  return x[i] = fibonacci(i - 1, x) + fibonacci(i - 2, x)
}

function fibonacci (i) {
  if (i <= 1) return i;

  return fibonacci(i - 1) + fibonacci(i - 2)
}

function recursiveFibonacciMeoizacion () {
  console.time('recursiveMeoizacion')
  console.log(fibonacciMeoizacion(50))
  console.timeEnd('recursiveMeoizacion')
}

function recursiveFibonacci () {
  console.time('recursive')
  console.log(fibonacci(50))
  console.timeEnd('recursive')
}

recursiveFibonacciMeoizacion()