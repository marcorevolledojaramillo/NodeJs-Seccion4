const { number } = require('yargs');

const argv = require('yargs')
            .options({
                'h':{
                    alias:'help'
                },
                
                'b':{
                alias: 'base',
                type: 'number',
                demandOption:true,
                describe:'Base para crear tabla de multiplicar'
                },
                
                'l':{
                    alias:'listar',
                    type:'boolean',
                    default:false,
                    describe:'Muestra en consola la tabla de multiplicar creada'
                    
                },

                'm':{
                    alias:'mltpcdor',
                    type:number,
                    default:10,
                    describe: 'Permite cambiar hasta que numero quieres que se multiplique la base'
                }
            })
            .check((argv,options) => {
                if( isNaN(argv.b)){
                    throw 'La base tiene que ser un numero';
                }
                if( isNaN(argv.m)){
                    throw 'El multiplicador tiene que ser un numero';
                }
                if(!(typeof(argv.l)==='boolean')){
                    throw 'La opcion Listar no acepta un parametro diferente a booleano';
                }
                return true;
            })
            .argv;


module.exports={
    argv
}