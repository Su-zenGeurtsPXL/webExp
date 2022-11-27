const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get("/", userController.index);

router.get("/create/", userController.showForm);

router.post("/create/", userController.makeUser);

router.get("/list/", userController.list);

module.exports = router;


