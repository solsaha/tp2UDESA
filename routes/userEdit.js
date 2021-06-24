const express = require('express');
const router = express.Router();
const usereditController = require ("../controllers/usereditController")

router.get('/', usereditController.show);
router.post('/', usereditController.editar)


  


module.exports = router;