var express = require('express');
var router = express.Router();
var AutoManager = require('../controllers/AutoManager');

router.get('/', AutoManager.getAll);

router.get('/:id', AutoManager.getAutotById);

router.post('/create', AutoManager.create);

router.put('/update', AutoManager.update);

router.delete('/delete', AutoManager.delete);

module.exports = router;
