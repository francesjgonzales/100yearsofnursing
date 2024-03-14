const Saskatchewan = require('../models/saskatchewanModel')
require('express-async-errors');



const getAllSaskatchewan = async (req, res) => {
    try {
        const saskatchewan = await Saskatchewan.find({});
        res.status(200).json(saskatchewan);
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
}

const getOneSaskatchewan = async (req, res) => {
    try {
        const { id } = req.params;
        const saskatchewan = await Saskatchewan.findById(id);
        res.status(200).json(saskatchewan);
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
}

const postManySaskatchewan = async (req, res) => {
    try {
        const saskatchewan = await Saskatchewan.create(req.body)
        res.status(200).json(saskatchewan)

    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
}

const putOneSaskatchewan = async (req, res) => {
    try {
        const { id } = req.params;
        const saskatchewan = await Saskatchewan.findByIdAndUpdate(id, req.body);
        if (!saskatchewan) {
            res.status(404)
            throw new Error({ message: `cannot find any product` })
        }
        const updatedSaskatchewan = await Saskatchewan.findById(id, req.body)
        res.status(200).json(updatedSaskatchewan);
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
}

const deleteOneSaskatchewan = async (req, res) => {
    try {
        const { id } = req.params;
        const saskatchewan = await Saskatchewan.findByIdAndDelete(id);
        if (!saskatchewan) {
            res.status(404)
            throw new Error({ message: `cannot find product with ID ${id}` })
        }
        res.status(200).json(saskatchewan);
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
}

module.exports = {
    getAllSaskatchewan,
    getOneSaskatchewan,
    postManySaskatchewan,
    putOneSaskatchewan,
    deleteOneSaskatchewan
};