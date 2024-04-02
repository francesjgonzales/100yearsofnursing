// Mongoose set up
const express = require('express');
const { getAllImages, getOneImage, putOneImage, deleteOneImage, postManyImages } = require('../controller/albertaController')

const router = express.Router();

router.get('/', getAllImages)

router.get('/:id', getOneImage)

router.post('/', postManyImages)

router.put('/:id', putOneImage)

router.delete('/:id', deleteOneImage)

module.exports = router;


