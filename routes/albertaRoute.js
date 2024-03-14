const express = require('express');
const { getAllAlberta, getOneAlberta, putOneAlberta, deleteOneAlberta, postManyAlberta } = require('../controller/albertaController')

const router = express.Router();

router.get('/', getAllAlberta)

router.get('/:id', getOneAlberta)

router.post('/', postManyAlberta)

router.put('/:id', putOneAlberta)

router.delete('/:id', deleteOneAlberta)

module.exports = router;