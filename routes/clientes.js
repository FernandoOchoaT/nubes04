const express = require('express');
const router = express.Router();

// Ruta para obtener clientes
router.get('/', (req, res) => {
  res.send('Clientes endpoint');
});

module.exports = router;
