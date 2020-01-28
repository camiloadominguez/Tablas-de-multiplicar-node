
let con = console.log;
const fs = require('fs');
const colors = require('colors');

const tablaConLimite = (base, limite) => {
    if(!Number(base) || !Number(limite) )
        {
            con('El valor introducido no es un numero');
            return;
        }
        let data = '';
    for(let i=1;i<=limite;i++){
        data += base+' * '+i+' = '+(base*i)+'\n';
    }
    con(data.green);
}

const crearArchivo = (base, limite) => {
    return new Promise ((resolve, reject)=>{
        if(!Number(base))
        {
            reject('El valor introducido '+base+' no es un numero');
            return;
        }
        let data ='';
        for(let i=1;i<=limite;i++){
            // con(`${base} * ${i} = ${base*i}`);
            data += base+' * '+i+' = '+(base*i)+'\n';
        }
        // const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-del-${base}-al-${limite}`, data, (err) => {
          if (err) reject(err);
          else
            resolve('tabla-del-'+base+'-al-'+limite+'.txt');
        });
    });
}

module.exports = {
    tablaConLimite:tablaConLimite,
    crearArchivo: crearArchivo
}