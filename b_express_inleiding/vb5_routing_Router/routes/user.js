const express = require('express');
const router = express.Router();

router.get('/:userId([0-9]+)', function (req, res, next) {
    const { userId } = req.params;
    res.send(`user ${userId}`);
});

module.exports = router;


