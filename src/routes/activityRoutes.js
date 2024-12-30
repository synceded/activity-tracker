const express = require('express');
const { getActivities, addActivity, deleteActivity } = require('../controllers/activityController');
const router = express.Router();

router.get('/', getActivities);
router.post('/', addActivity);
router.delete('/:id', deleteActivity);

module.exports = router;