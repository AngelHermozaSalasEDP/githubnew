'use strict';

const test = require('node:test');
const assert = require('node:assert');
const { isValidEmail } = require('../src/emailValidator');

const valid = [
  'usuario@dominio.com',
  'nombre.apellido+tag@sub.dominio.co',
  'a_b-c@ejemplo.org',
];

const invalid = [
  'usuario@.com',
  'usuario@dominio..com',
  'usuario@dominio.',
  'usuario@dominio',
  'usuario@-dominio.com',
  'usuario@dominio-.com',
  '.usuario@dominio.com',
  'usu..ario@dominio.com',
  'usuario@@dominio.com',
  '@dominio.com',
  'usuario@dominio.c',
  '',
  null,
];

for (const email of valid) {
  test(`acepta ${email}`, () => assert.strictEqual(isValidEmail(email), true));
}

for (const email of invalid) {
  test(`rechaza ${JSON.stringify(email)}`, () => assert.strictEqual(isValidEmail(email), false));
}
