const morgan = require('morgan');
const app = require('./app/app');
const CONFIG = require('./app/config/config');
const Base = require('./app/config/Base');

Base.connect();

app.listen(CONFIG.PORT, function(error){
    if(error) return console.log(error);
    console.log(`El servidor funciona en el puerto ${CONFIG.PORT}`);
});


app.use(morgan('dev'));