// Mongoose set up
const express = require('express');
const { getAllSaskatchewan, getOneSaskatchewan, postManySaskatchewan, putOneSaskatchewan, deleteOneSaskatchewan } = require('../controller/saskatchewanController')

const router = express.Router();

router.get('/', getAllSaskatchewan)

router.get('/:id', getOneSaskatchewan)

router.post('/', postManySaskatchewan)

router.put('/:id', putOneSaskatchewan)

router.delete('/:id', deleteOneSaskatchewan)

module.exports = router;