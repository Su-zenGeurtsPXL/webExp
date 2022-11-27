const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const {body, validationResult} = require('express-validator');

router.post('/',
    body('name').isLength({min: 2}),
    function (req, res, next) {
        const { name } = req.body;
        const validationErrors = validationResult(req);
        if (!validationErrors.isEmpty()) {
            return next(createError(422, 'Validation failed'));
        }
        res.status(201).json({id: 1, name});
    });

router.get('/', function (req, res, next) {
    next(createError(500, 'Not implemented'));
});

router.get('/:id([0-9]+)', function (req, res, next) {
    const { id } = req.params;
    if( id == 1 ){
        const name = "sofie";
        res.status(200).json({id, name});
    } else {
        res.status(404).json({});
    }
});

module.exports = router;


