const express = require('express');
const RutaDulces = require('./rutas/RutaDulces');
const RutaSabritas = require('./rutas/RutaSabritas');

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/dulces',RutaDulces);
app.use('/sabritas',RutaSabritas);


module.exports = app;