const {somarDoisNumeros}= require('../src/calculadora');
const {calcularMediaDeDoisNumeros} = require('../src/calculadora');

const resultadoDaSoma = somarDoisNumeros(5,3);
const resultadoDaMediaDeDoisNumeros = calcularMediaDeDoisNumeros(2,8);

console.log(resultadoDaMediaDeDoisNumeros);
console.log(resultadoDaSoma);