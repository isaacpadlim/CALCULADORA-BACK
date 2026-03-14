const express = require('express')
const router = express.Router()

const {getMovimientos, addMovimientos, deleteMovimientos} = require('../controllers/movimientosController')

//Obtener movimientos
router.get('/', getMovimientos)

//Agregar movimiento
router.post('/', addMovimientos)

//Eliminar movimiento
router.delete('/:id', deleteMovimientos)

module.exports = router