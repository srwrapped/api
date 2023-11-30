const express = require('express');
const wrappedController = require('../controller/wrapped');

const router = express.Router();

router.post('/most-watch', wrappedController.getMostWatchRoom);
router.post('/premium-lives', wrappedController.getPremiumLiveHistory);

module.exports = router;
