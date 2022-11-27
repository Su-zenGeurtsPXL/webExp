const express = require('express');
const router = express.Router();

router.get('/:userId([0-9]+)', function (req, res, next) {
    const { userId } = req.params;
    res.send(`user ${userId}`);
    next();
});

router.use(
    function (req, res, next) {
        console.log('Time:', new Date());
        next();
    },
    function (req, res, next) {
        console.log('Request URL:', req.originalUrl);
        next();
    });

module.exports = router;


