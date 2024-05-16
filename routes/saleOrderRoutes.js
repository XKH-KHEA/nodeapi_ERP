const express = require('express');
const router = express.Router();
const SaleOrder = require('../models/saleOrder');

// Create a new sale order
router.post('/', async (req, res) => {
    try {
        const saleOrder = new SaleOrder(req.body);
        await saleOrder.save();
        res.status(201).send(saleOrder);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all sale orders
router.get('/', async (req, res) => {
    try {
        const saleOrders = await SaleOrder.find();
        res.status(200).send(saleOrders);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Get a sale order by ID
router.get('/:id', async (req, res) => {
    try {
        const saleOrder = await SaleOrder.findById(req.params.id);
        if (!saleOrder) {
            return res.status(404).send();
        }
        res.status(200).send(saleOrder);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update a sale order by ID
router.patch('/:id', async (req, res) => {
    try {
        const saleOrder = await SaleOrder.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!saleOrder) {
            return res.status(404).send();
        }
        res.status(200).send(saleOrder);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete a sale order by ID
router.delete('/:id', async (req, res) => {
    try {
        const saleOrder = await SaleOrder.findByIdAndDelete(req.params.id);
        if (!saleOrder) {
            return res.status(404).send();
        }
        res.status(200).send(saleOrder);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
