const express = require('express');
const router = express.Router();

router.post('/', function (req, res) {
    const { name } = req.body;
    res.status(201).json({id: 1, name});
});

module.exports = router;


