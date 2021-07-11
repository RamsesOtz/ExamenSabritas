const CONFIG = require('./config');
const mongoose=require('mongoose');

module.exports={
    connection:null,
    connect: function(){
        if(this.connection) return this.connect;
        return mongoose.connect(CONFIG.DB).then(conexion =>{
            this.connection = conexion;
            console.log('La conexion se realizo de manera correcta');
        }).catch(error => console.log(error));
    }
}