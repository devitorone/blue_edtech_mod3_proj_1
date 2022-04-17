const express = require('express');
const router = express.Router();

const charController = require('../controllers/char.controller');

router.get('/find-char', charController.findCharController);
router.get('/find-char/:id', charController.findCharByIdController);

module.exports = router;
