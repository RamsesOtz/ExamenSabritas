const { Router } = require('express');//creamos constante llamada Router que integra express
const router = Router();//router ejecuta Router funcion
const ControladorDulces = require('../controlador/ControladorDulces');

//cada que llegue una solicitud a router get se ejecutara algo.
router.get('/',ControladorDulces.index)//cada que se ejecute, le mandaremos el archivo que lleva el controlador y el index get tomara los datos
.post('/', ControladorDulces.agregar)//post enviar datos
.get('/:key/:value', ControladorDulces.buscar, ControladorDulces.mostrar)/*tomara los datos a buscar*/
.put('/:key/:value', ControladorDulces.buscar, ControladorDulces.actualizar)
.delete('/:key/:value', ControladorDulces.buscar, ControladorDulces.eliminar);

module.exports = router;