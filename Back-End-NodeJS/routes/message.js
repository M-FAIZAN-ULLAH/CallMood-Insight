const express = require('express');
const router = express.Router();
const messageController = require('../controller/messages');
const { verifyToken } = require("../middleware/jwt");

// Send a message
router.post('/send', verifyToken, messageController.sendMessage);

// Get all messages /messages/get-all
router.get('/get-all', messageController.getAllMessages);

module.exports = router;
