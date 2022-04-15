const { boolean } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar');
const {argv}=require('./config/yargs')

const base = argv.b;
const listar= argv.l;
const multiplicador= argv.m;
console.clear();

crearArchivo(base,multiplicador, listar)
.then(msg => console.log(msg.blue))
.catch(err => console.log(err.red));



