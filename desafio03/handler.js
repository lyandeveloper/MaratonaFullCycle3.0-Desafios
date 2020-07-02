'use strict';

function soma(params) {
  const a = parseFloat(params.a) || 0;
  const b = parseFloat(params.b) || 0;

  const result = a + b;

  console.log('log', { resultado: result });
  return { resultado: result };
}

exports.soma = soma;
