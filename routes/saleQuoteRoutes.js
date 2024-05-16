const express = require('express');
const router = express.Router();
const SaleQuote = require('../models/saleQuote');

// Create a new sale quote
router.post('/', async (req, res) => {
    try {
        const saleQuote = new SaleQuote(req.body);
        await saleQuote.save();
        res.status(201).send(saleQuote);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all sale quotes
router.get('/', async (req, res) => {
    try {
        const saleQuotes = await SaleQuote.find();
        res.status(200).send(saleQuotes);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Get a sale quote by ID
router.get('/:id', async (req, res) => {
    try {
        const saleQuote = await SaleQuote.findById(req.params.id);
        if (!saleQuote) {
            return res.status(404).send();
        }
        res.status(200).send(saleQuote);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update a sale quote by ID
router.patch('/:id', async (req, res) => {
    try {
        const saleQuote = await SaleQuote.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!saleQuote) {
            return res.status(404).send();
        }
        res.status(200).send(saleQuote);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete a sale quote by ID
router.delete('/:id', async (req, res) => {
    try {
        const saleQuote = await SaleQuote.findByIdAndDelete(req.params.id);
        if (!saleQuote) {
            return res.status(404).send();
        }
        res.status(200).send(saleQuote);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
