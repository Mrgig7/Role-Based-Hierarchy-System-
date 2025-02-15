const express = require('express');
const { createUser, updateUserRole } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/create', authMiddleware, createUser);
router.put('/:id/role', authMiddleware, updateUserRole);

module.exports = router;