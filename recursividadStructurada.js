'use strict'
// 0, 1, 2, 3, 4, 5
// 1, 1, 2, 3, 5, 8

function fibonacci (i) {
  let z = 1
  let y = 1
  let p = 0

  for(let x = 0; x < i; x++) {
    y = z
    z = p + y
    p = y
  }

  return z
}

console.log('hola: ', fibonacci(6))

