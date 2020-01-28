
//requires

// const colors = require('colors');
const colors = require('colors/safe');
const {tablaConLimite, crearArchivo} = require('./multiplicar/multiplicar');
const {argv} = require('./config/yargs');

// const fs = require('express'); Paquetes que no son nativos de node
// const fs = require('./fs'); Archivos que nosotros mimos escribimos

let con = console.log;

con(argv);

let comando = argv._[0];

switch (comando){
  case 'listar':
    tablaConLimite(argv.base, argv.limite);
    break;
  case 'crear':
    crearArchivo(argv.base, argv.limite)
      .then(archivo => con('archivo creado: '+ colors.red(archivo)))
      .catch(e=>con(e));
    break;
  case 'borrar':
    con('borrar');
    break
  default:
    con('Comando no reconocido');
    break;
}
// let argv2 = process.argv;

// con(argv.base);
// con('el limite es:'+argv.limite);
// con(argv2)
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// con(base);
