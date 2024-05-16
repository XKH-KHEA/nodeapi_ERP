const mongoose = require('mongoose');

const salesInvoiceSchema = new mongoose.Schema({
    saleOrder: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SaleOrder',
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('SalesInvoice', salesInvoiceSchema);
