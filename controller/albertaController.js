const Alberta = require('../models/albertaModel')
require('express-async-errors');

const getAllAlberta = async (req, res) => {
    try {
        const alberta = await Alberta.find({});
        res.status(200).json(alberta);
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
}

const getOneAlberta = async (req, res) => {
    try {
        const { id } = req.params;
        const alberta = await Alberta.findById(id);
        res.status(200).json(alberta);
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
}


const postManyAlberta = async (req, res) => {
    try {
        const alberta = await Alberta.create(req.body)
        res.status(200).json(alberta)

    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
}

/* const postOneAlberta = async (req, res) => {
    try {
        const alberta = await Alberta.create(req.body)
        res.status(200).json(alberta)

    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
} */

const putOneAlberta = async (req, res) => {
    try {
        const { id } = req.params;
        const alberta = await Alberta.findByIdAndUpdate(id, req.body);
        if (!alberta) {
            return res.status(404).json({ message: `cannot find any product` })
        }
        const updatedAlberta = await Alberta.findById(id, req.body)
        res.status(200).json(updatedAlberta);
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
}

const deleteOneAlberta = async (req, res) => {
    try {
        const { id } = req.params;
        const alberta = await Alberta.findByIdAndDelete(id);
        if (!alberta) {
            res.status(404)
            throw new Error({ message: `cannot find product with ID ${id}` })
        }
        res.status(200).json(alberta);
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
}

module.exports = {
    getAllAlberta,
    getOneAlberta,
    postManyAlberta,
    putOneAlberta,
    deleteOneAlberta
};