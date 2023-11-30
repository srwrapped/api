const express = require('express');
const wrappedController = require('../controller/wrapped');

const router = express.Router();

// router.get('/most-watch', wrappedController.getMostWatchRoom);
router.get('/premium-lives', wrappedController.getPremiumLiveHistory);

module.exports = router;
