'use strict'

const sym1 = Symbol('id')

const user = {
  name: 'guillermo',
  lastName: 'llancaqueo',
  [sym1]: 'valenzuela'
}

console.log(user[sym1])
