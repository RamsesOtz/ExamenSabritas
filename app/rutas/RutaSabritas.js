const { Router } = require('express');
const router = Router();
const ControladorSabritas = require('../controlador/ControladorSabritas');

router.get('/',ControladorSabritas.index )
       .post('/',ControladorSabritas.agregar)
       .get('/:key/:value', ControladorSabritas.buscar, ControladorSabritas.mostrar)
       .put('/:key/:value', ControladorSabritas.buscar, ControladorSabritas.actualizar)
       .delete('/:key/:value', ControladorSabritas.buscar, ControladorSabritas.eliminar);
module.exports=router;