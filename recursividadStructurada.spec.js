'use strict'

const test = require('ava');
const fibonacci = require('./recursividadStructurada');

test('fibonacci test 1', t => {
  const result = fibonacci(1);
  t.is(result, 1)
})
