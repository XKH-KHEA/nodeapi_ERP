const express = require('express');
const router = express.Router();
const SalesInvoice = require('../models/salesInvoice');

// Create a new sales invoice
router.post('/', async (req, res) => {
    try {
        const salesInvoice = new SalesInvoice(req.body);
        await salesInvoice.save();
        res.status(201).send(salesInvoice);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all sales invoices
router.get('/', async (req, res) => {
    try {
        const salesInvoices = await SalesInvoice.find();
        res.status(200).send(salesInvoices);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Get a sales invoice by ID
router.get('/:id', async (req, res) => {
    try {
        const salesInvoice = await SalesInvoice.findById(req.params.id);
        if (!salesInvoice) {
            return res.status(404).send();
        }
        res.status(200).send(salesInvoice);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update a sales invoice by ID
router.patch('/:id', async (req, res) => {
    try {
        const salesInvoice = await SalesInvoice.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!salesInvoice) {
            return res.status(404).send();
        }
        res.status(200).send(salesInvoice);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete a sales invoice by ID
router.delete('/:id', async (req, res) => {
    try {
        const salesInvoice = await SalesInvoice.findByIdAndDelete(req.params.id);
        if (!salesInvoice) {
            return res.status(404).send();
        }
        res.status(200).send(salesInvoice);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
