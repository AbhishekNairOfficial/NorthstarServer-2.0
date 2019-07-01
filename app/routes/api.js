const express = require('express');

const router = express.Router();

const login_controller = require('../controllers/login.controller');
const notification_controller=require('../controllers/notification.controller');

router.post('/login', login_controller.login);
router.post('/registerdevice', notification_controller.registerDevice);
router.post('/sendnotification', notification_controller.sendNotification);
module.exports = router;
