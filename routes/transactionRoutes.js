const express = require('express');
const router = express.Router();
const {
    createTransaction,
    getTransactions,
    getTransactionById,
    updateTransaction,
    deleteTransaction,
    getMonthlySummary
} = require('../controllers/transactionController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
    .post(protect, createTransaction)
    .get(protect, getTransactions);

router.route('/summary')
    .get(protect, getMonthlySummary);

router.route('/:id')
    .get(protect, getTransactionById)
    .put(protect, updateTransaction)
    .delete(protect, deleteTransaction);

module.exports = router; 