const createError = require('http-errors');

const mongoose = require('mongoose');
const User = require('../models/userModel.js');

module.exports.index = function(req, res, next) {
    res.render("users/index");
};

module.exports.list = async function(req, res, next) {
    try {
        let users = await User.find({});
        res.render("users/list", {users});
    } catch (error){
        res.render("users/list", {error} );
    }
};


module.exports.showForm = function(req, res, next) {
    res.render("users/create");
};

module.exports.makeUser = async function(req, res, next) {
    try {
        const { name } = req.body;
        let user = new User({name});
        await user.save();
        res.render("users/created", {user} );
    } catch (error){
        res.render("users/create", {error} );
    }
};



