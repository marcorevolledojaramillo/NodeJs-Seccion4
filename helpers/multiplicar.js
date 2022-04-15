const fs = require('fs');
const colors = require('colors');


const crearArchivo = async(base = 5,multiplicador=10, listar =false) => {
try{
let salida= `===========
TABLA DEL ${base}   
===========
`;

let consola= `===========
TABLA DEL ${base}   
===========
`.green;


for(let i=1;i<=multiplicador;i++){
    consola += `${base} ${'x'.red} ${i} ${'='.red} ${base*(i)}\n`;
    salida += `${base} x ${i} = ${base*(i)}\n`;

}
nombre_archivo= `tabla-${base}.txt`;
fs.mkdirSync('./tablas',{recursive:true});
fs.writeFile(`./tablas/${nombre_archivo}`, salida, (err)=>{
    if (err) throw err;
})
 if(listar){
     console.log(consola);
 }
return nombre_archivo;
}catch(err){
    throw(err);
}

} 

module.exports ={
    crearArchivo
}
