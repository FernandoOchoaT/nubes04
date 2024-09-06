const express = require('express');
const router = express.Router();

// Ruta para obtener productos
router.get('/', (req, res) => {
  res.send('Productos endpoint');
});

module.exports = router;
