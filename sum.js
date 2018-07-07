#!/usr/bin/env node

const calculator = require('./calculator');

const a = process.argv[2];
const b = process.argv[3];

const result = calculator.sum(a, b);

console.log(a, '+', b, '=', result);
